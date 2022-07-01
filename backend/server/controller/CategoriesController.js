const Category = require('../model/category')

exports.show = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        Category.findAll({
            where:{
                id: id
            }
        }).then( category => {
            if(category.length === 0){
                return res.status(404).send({message: 'Category with given ID does not exist'})
            }else{
                return res.status(200).send(category);
            }
        });
    }
    else{
        Category.findAll()
            .then( categories => {
                if(categories === null){
                    return res.status(404).send({message: 'Something went wrong!'})
                }
                return res.status(200).send(categories);
            })
    }
};

exports.store = async (req, res)=>{
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
};

exports.edit = async (req, res)=>{
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
};

exports.delete = async (req, res) =>{
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
};