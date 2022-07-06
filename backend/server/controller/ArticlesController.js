const Article = require("../model/Article");
const Category = require("../model/Category");

exports.index = async (req, res) => {
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "X-Total-Count": "100",
    "Content-Range": "posts 0-30/30",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  });
  if (req.query.range) {
    range = JSON.parse(req.query.range);
    Article.findAll({
      raw: true,
      limit: range[1] - range[0] + 1,
      offset: range[0],
    })
      .then(async (articles) => {
        if (articles === null) {
          return res.status(404).send({ msg: "Articles dont exist" });
        } else {
          return res.status(200).send(articles);
        }
      })
      .catch((err) => {
        return res.status(400).send("Something went wrong");
      });
  } else {
    Article.findAll({
      raw: true,
    })
      .then(async (articles) => {
        if (articles === null) {
          return res.status(404).send({ msg: "Articles dont exist" });
        } else {
          return res.status(200).send(articles);
        }
      })
      .catch((err) => {
        return res.status(400).send({ msg: err });
      });
  }
};

exports.show = (req, res) => {
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "X-Total-Count": "100",
    "Content-Range": "posts 0-30/30",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  });

  Article.findOne({
    raw: true,
    where: {
      id: req.params.id,
    },
    include: Category,
  }).then((article) => {
    if (article === null) {
      return res.status(404).send("Article with given ID does not exist.");
    } else {
      return res.status(200).send(article);
    }
  });
};

exports.store = async (req, res) => {
  const article = await Article.create({
    categoryId: req.body.categoryId,
    name: req.body.name,
    description: req.body.description,
    img_url: req.body.img_url,
    price: req.body.price,
    units_available: req.body.units_available,
    units_sold: 0,
  })
    .then((article) => {
      return res.status(200).send(article);
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

exports.edit = async (req, res) => {
  const name = req.body.name;
  if (!(typeof name === "string" || name instanceof String)) {
    return res.status(400).send("Given name is not a string");
  }
  const article = await Article.findOne({ where: { id: req.params.id } })
    .then(async (article) => {
      if (article === null) {
        return res
          .status(404)
          .send({ msg: "Article with given id does not exist." });
      }
      await article
        .update({
          categoryId: req.body.categoryId,
          name: req.body.name,
          description: req.body.description,
          img_url: req.body.img_url,
          price: req.body.price,
          units_available: req.body.units_available,
          units_sold: req.body.units_sold,
        })
        .then((article) => {
          return res.status(200).send(article);
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

exports.delete = async (req, res) => {
  const article = await Article.findOne({ where: { id: req.params.id } })
    .then(async (article) => {
      if (article === null) {
        return res
          .status(404)
          .send({ msg: "Article with given id does not exist." });
      }
      await article
        .destroy()
        .then(() => {
          return res.status(200).send({ msg: "Article successfully deleted." });
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};
