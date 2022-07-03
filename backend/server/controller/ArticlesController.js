const Article = require("../model/Article");
const Category = require('../model/Category')

exports.index = async (req, res) => {
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "X-Total-Count": "100",
    "Content-Range": "posts 0-30/30",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  });
  if(req.query.range){
    range = JSON.parse(req.query.range)
    Article.findAll({
      raw: true, 
      limit: range[1] - range[0] + 1,
      offset: range[0],
    }).then( async articles => articlesReturnAll(articles, res))
      .catch(err => {
        return res.status(400).send('Something went wrong')
    })
  }
  else{
    Article.findAll({
      raw: true
    })
      .then(async (articles) => articlesReturnAll(articles, res))
      .catch((err) => {
        return res.status(400).send({ message: err });
      });
  }
};

async function articlesReturnAll(articles, res){
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
}

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
  const article = await Article.create({
    category_id: req.body.category_id,
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
          .send({ message: "Article with given id does not exist." });
      }
      await article
        .update({
          category_id: req.body.category_id,
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
