const User = require("../model/User");
const { genPassword } = require("../database/passwordUtils");

exports.index = (req,res) => {
    User.findAll({
        raw: true,
        attributes: {
            exclude: ['hash','password']
        }
    }).then(users => {
        if(users === null){
            return res.status(404).send({msg: 'No users found.'})
        }else{
            return res.status(200).send(users)
        }
    })
}

exports.login = (req, res) => {
    if(req.isAuthenticated()){
        const user = User.findOne({
            raw: true,
            attributes: {
                exclude: ['hash','salt','createdAt','updatedAt']
            },
            where: {
                id: req.user.id
            }
        }).then(user => {
            if(user === null){
                return res.status(500).send({msg: 'Something went wrong'})
            }else{
                return res.status(200).send({user: user, msg: 'Successfully logged in!'});
            }
        })
    }else{
        return res.status(401).send('Unauthorized');
    }
}

exports.user = async (req, res) => {
    if(req.isAuthenticated()){
        const user = User.findOne({
            raw: true,
            attributes: {
                exclude: ['hash','salt']
            },
            where: {
                id: req.user.id
            }
        }).then(user => {
            if(user === null){
                return res.status(500).send({msg: 'Logged user cant be found'})
            }else{
                return res.status(200).send(user);
            }
        })
    }else{
        return res.status(401).send('Unauthorized');
    }
}

exports.logout = (req, res) => {
    if(req.user){
        req.logout(function(err) {
            if(err){
                return next(err);
            }
            res.status(200).send('You are logged out!');
        });
    }
    else{
        res.status(401).send('Unauthorized');
    }
}

exports.register = (req, res) => {
    // Validate request
    if(!req.body){
        res.status(400).send({ msg: "Content can not be empty!"});
        return;
    }

    const user = User.findOne({
        where:{
            email: req.body.email
        }})
        .then(async user => {
            if(user !== null){
                return res.status(400).send({msg:'User with this email already exists!'});
            }
            else{
                const saltHash = genPassword(req.body.password);
                const newUser = await User.create({
                    email : req.body.email,
                    hash: saltHash.hash,
                    salt: saltHash.salt,
                    address: req.body.address,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                }).then((user) => {
                    user = user.get({plain:true});
                    req.login(user, err =>{
                        if(err){
                            console.log(err);
                        }
                        return res.status(200).send({user: {id: user.id, email: user.email, address: user.address, firstName: user.firstName, lastName: user.lastName}, 
                            msg: 'Successfully registered!'});
                    })
                })
                .catch(err => {
                    res.status(400).send({ msg: 'Something went wrong!'});
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}