const Order = require("../model/Order");

exports.store = async (req, res) => {
  if (!req.user) {
    return res.status(401).send("You must be logged in to do this!");
  }
  Order.create({
    userId: req.user.id,
    articles: req.body.articles,
    totalSum: req.body.totalSum,
    totalQty: req.body.totalQty,
    address: req.body.address,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    status: req.body.status
  })
    .then((order) => {
      return res.status(200).send(order);
    })
    .catch((err) => {
      return res.status(400).send({ msg: "Something went wrong." });
    });
};

exports.index = async (req, res) => {
  if (!req.user) {
    return res.status(401).send("You must be logged in to do this!");
  }
  Order.findAll({
    raw: true,
    where: {
      userId: req.user.id,
    },
  }).then((orders) => {
    if (orders === null) {
      return res.status(400).send("Something went wrong");
    } else {
      return res.status(200).send(orders);
    }
  });
};

exports.show = async (req, res) => {
  if (!req.user) {
    return res.status(401).send("You must be logged in to do this!");
  }
  if (!req.params.id) {
    return res.status(400).send({ msg: "Missing parameters" });
  }
  Order.findOne({
    raw: true,
    where: {
      id: req.params.id,
    },
  }).then((order) => {
    if (order === null) {
      return res.status(404).send("Order does not exist");
    } else if (order.userId !== req.user.id) {
      return res.status(401).send("Unauthorized");
    } else {
      return res.status(200).send(order);
    }
  });
};


exports.delete = async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ msg: "You must be logged in to do this!" });
  }
  Order.findOne({ where: { id: req.params.id } })
    .then(async (order) => {
      if (order === null) {
        return res.status(404).send({ msg: "Order with given id does not exist." });
      }
      if (order.userId !== req.user.id) {
        return res.status(401).send({ msg: "Unauthorized." });
      }
      await order.destroy()
        .then(() => {
          return res.status(200).send({ msg: "Order successfully deleted." });
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

exports.edit = async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ msg: "You must be logged in to do this." });
  }
  Order.findOne({ where: { id: req.params.id } })
    .then(async (order) => {
      if (order === null) {
        return res.status(404).send({ msg: "Order with given id does not exist." });
      }
      if (order.userId !== req.user.id) {
        return res.status(401).send({ msg: "Unauthorized" });
      }
      await order.update({
          articles: req.body.articles,
          totalSum: req.body.totalSum,
          totalQty: req.body.totalQty,
          address: req.body.address,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          status: req.body.status
        })
        .then((order) => {
          return res.status(200).send(order);
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};
