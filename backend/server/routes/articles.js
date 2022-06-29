const express = require('express');
const router = express.Router();
const db = require('../database/database.js')
const Article = require('../model/Article')

router.get('/', (req, res)=>{
    Article.findAll()
        .then( articles => {
            return res.status(200).send(articles);
        })
        .catch(err => {return res.status(400).send({message: err})});
});

router.post('/', async (req, res)=>{
    specs = req.body.specs.split(", ");
    const article = await Article.create({
        category_id : req.body.category_id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        specs: specs,
        units_available: req.body.units_available,
        units_sold: 0
    }).then(()=>{
            return res.status(200).send({message : 'Article saved successfully!'});
        })
        .catch((err)=>{
            return res.status(400).send(err);
        });
});


router.put('/:id', async (req, res)=>{
    const name = req.body.name;
    console.log(req.body.units_available)
    if(!(typeof name === 'string' || name instanceof String)){
        return res.status(400).send('Given name is not a string');
    }
    const article = await Article.findOne({ where: { id: req.params.id } })
        .then(async (article) => {
            if(article === null){
                return res.status(404).send({message: 'Article with given id does not exist.'});
            }
            await article.update({ name: req.body.name })
                .then((article)=>{
                    return res.status(200).send(article);
                })
                .catch(err => {
                    return res.status(400).send(err);
                });
        })
        .catch(err => {
            return res.status(400).send(err);
        });
});

router.delete('/:id', async (req, res) =>{
    const article = await Article.findOne({ where: { id: req.params.id } })
        .then(async (article) => {
            if(article === null){
                return res.status(404).send({message: 'Article with given id does not exist.'});
            }
            await article.destroy()
                .then( () => {
                    return res.status(200).send({message: 'Article successfully deleted.'})
                })
                .catch(err => {
                    return res.status(400).send(err);
                });
        })
        .catch(err => {
            return res.status(400).send(err);
        });
})

module.exports = router;