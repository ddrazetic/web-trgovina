const Order = require("../model/Order");

exports.index = async (req, res) => {
    res.set({
      "Access-Control-Expose-Headers": "Content-Range",
      "X-Total-Count": "100",
      "Content-Range": "posts 0-30/100",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    });
    let options = {
    raw: true,
    }
    // In case additional paging is requested append range options
    if(req.query.range){
    range = JSON.parse(req.query.range);
    options.limit = range[1] - range[0] + 1;
    options.offset = range[0];
    }
    Order.findAll(options)
        .then((orders) => {
          if (orders === null) {
            return res.status(404).send("No orders available");
          } else {
            return res.status(200).send(orders);
          }
        })
        .catch(() => {
          return res.status(400).send("Something went wrong");
        });
  };

exports.show = async (req, res) => {
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
        }else {
            return res.status(200).send(order);
        }
    });
};

exports.delete = async (req, res) => {
    Order.findOne({ where: { id: req.params.id } })
      .then(async (order) => {
        if (order === null) {
          return res
            .status(404)
            .send({ msg: "Order with given id does not exist." });
        }else{
            await order.destroy()
                .then(() => {
                    return res.status(200).send({ msg: "Order successfully deleted." });
                })
                .catch((err) => {
                    return res.status(400).send({msg: 'Order could not be deleted.'});
                });
        }
      })
      .catch((err) => {
        return res.status(400).send({msg: 'Something went wrong.'});
      });
  };

  exports.edit = async (req, res) => {
    Order.findOne({ where: { id: req.params.id } })
      .then(async (order) => {
        if (order === null) {
          return res.status(404).send({ msg: "Order with given id does not exist." });
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
        return res.status(400).send({msg: 'Something went wrong'});
      });
  };