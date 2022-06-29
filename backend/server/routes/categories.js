const express = require('express');
const router = express.Router();
const db = require('../database/database.js')
const Category = require('../model/Category')

router.get('/', (req, res)=>{
    Category.findAll()
        .then( categories => {
            return res.status(200).send(categories);
        })
        .catch(err => {return res.status(400).send({message: err})});
});

router.post('/', async (req, res)=>{
    console.log(req.body)
    const name = req.body.name;
    if(!name){
        return res.status(400).send('Missing name!') 
    }
    if(!(typeof name === 'string' || name instanceof String)){
        return res.status(400).send('Given name is not a string');
    }
    const category = await Category.create({name: req.body.name})
        .then(()=>{
            return res.status(200).send('Category saved successfully!');
        })
        .catch((err)=>{
            return res.status(400).send(err);
        });
})

router.put('/:id', async (req, res)=>{
    const name = req.body.name;
    if(!(typeof name === 'string' || name instanceof String)){
        return res.status(400).send('Given name is not a string');
    }
    const category = await Category.findOne({ where: { id: req.params.id } })
        .then(async (category) => {
            if(category === null){
                return res.status(404).send({message: 'Category with given id does not exist.'});
            }
            await category.update({ name: req.body.name })
                .then((category)=>{
                    return res.status(200).send(category);
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
    const category = await Category.findOne({ where: { id: req.params.id } })
        .then(async (category) => {
            if(category === null){
                return res.status(404).send({message: 'Category with given id does not exist.'});
            }
            await category.destroy()
                .then( () => {
                    return res.status(200).send({message: 'Category successfully deleted.'})
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