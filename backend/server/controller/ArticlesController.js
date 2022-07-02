const Article = require("../model/Article");
const Category = require('../model/Category')

exports.index = (req, res) => {
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "X-Total-Count": "100",
    "Content-Range": "posts 0-30/30",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  });
  Article.findAll({
    raw: true
  })
    .then(async (articles) => {
      if(articles === null){
        return res.status(404).send({message: 'No articles available'})
      }
      else{
        await Promise.all(articles.map(async (article) => {
          await Category.findOne({
            raw: true,
            where: {
              id: article.category_id
            }
          }).then((category) => {
            if(category === null){
              return res.status(400).send({message: 'Cant get category.'});
            }
            article.category_name = category.name
          })
        }));
        return res.status(200).send(articles)
      }
    })
    .catch((err) => {
      return res.status(400).send({ message: err });
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
      id: req.params.id
    }
  }).then(async article => {
    if(article === null){
      return res.status(404).send('Article with given ID does not exist.')
    }
    else{
      Category.findOne({
        raw: true,
        where: {
          id: article.category_id
        }
      }).then(category => {
        article.category_name = category.name;
        return res.status(200).send(article)
      }).catch( () => {
        return res.status(400).send('Category with given ID does not exist.')
      })
    }
  })

}

exports.store = async (req, res) => {
  const specs = req.body.specs.split(", ");
  const article = await Article.create({
    category_id: req.body.category_id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    specs: specs,
    units_available: req.body.units_available,
    units_sold: 0,
  })
    .then(() => {
      return res.status(200).send({ message: "Article saved successfully!" });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

exports.edit = async (req, res) => {
  const name = req.body.name;
  const specs = req.body.specs.split(", ");
  if (!(typeof name === "string" || name instanceof String)) {
    return res.status(400).send("Given name is not a string");
  }
  const article = await Article.findOne({ where: { id: req.params.id } })
    .then(async (article) => {
      if (article === null) {
        return res
          .status(404)
          .send({ message: "Article with given id does not exist." });
      }
      await article
        .update({
          category_id: req.body.category_id,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          specs: specs,
          units_available: req.body.units_available,
          units_sold: 0,
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
          .send({ message: "Article with given id does not exist." });
      }
      await article
        .destroy()
        .then(() => {
          return res
            .status(200)
            .send({ message: "Article successfully deleted." });
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};
