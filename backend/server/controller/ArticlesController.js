const Article = require("../model/Article");
const Category = require("../model/Category");
const { Op } = require("sequelize");

exports.index = async (req, res) => {
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "X-Total-Count": "100",
    "Content-Range": "posts 0-30/30",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  });
  // Create basic options for querying Model
  let options = {
    raw: true,
    include: Category
  }
  // In case additional paging is requested append range options
  if(req.query.range){
    range = JSON.parse(req.query.range);
    options.limit = range[1] - range[0] + 1;
    options.offset = range[0];
  }
  // In case additional filtering is requested append where clauses
  if(req.query.filter){
    filter = JSON.parse(req.query.filter);
    let whereClause = {};
    if(filter.name){
      whereClause.name = {
        [Op.iLike]: `%${filter.name}%`
      }
    }
    options.where = whereClause;
  }
  Article.findAll(options)
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
