const Category = require("../model/Category");

exports.index = (req, res) => {
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "X-Total-Count": "100",
    "Content-Range": "posts 0-30/100",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  });
  Category.findAll().then((categories) => {
    if (categories === null) {
      return res.status(404).send({ message: "Something went wrong!" });
    }
    return res.status(200).send(categories);
  });
};

exports.show = (req, res) => {
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "X-Total-Count": "100",
    "Content-Range": "posts 0-30/100",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  });

  Category.findOne({
    where: {
      id: req.params.id
    }
  }).then( category => {
      if(category === null){
        res.status(404).send('Category with given ID does not exist');
      }else{
        res.status(200).send(category)
      }
  } )
}


exports.store = async (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).send("Missing name!");
  }
  if (!(typeof name === "string" || name instanceof String)) {
    return res.status(400).send("Given name is not a string");
  }
  const category = await Category.create({
    name: name,
  })
    .then(() => {
      return res.status(200).send({ message: "Category saved successfully!" });
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
  const category = await Category.findOne({ where: { id: req.params.id } })
    .then(async (category) => {
      if (category === null) {
        return res
          .status(404)
          .send({ message: "Category with given id does not exist." });
      }
      await category
        .update({ name: req.body.name })
        .then((category) => {
          return res.status(200).send(category);
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
  const category = await Category.findOne({ where: { id: req.params.id } })
    .then(async (category) => {
      if (category === null) {
        return res
          .status(404)
          .send({ message: "Category with given id does not exist." });
      }
      await category
        .destroy()
        .then(() => {
          return res
            .status(200)
            .send({ message: "Category successfully deleted." });
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};
