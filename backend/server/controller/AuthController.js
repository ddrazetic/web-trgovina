const User = require("../model/User");
const { genPassword } = require("../database/passwordUtils");

exports.login = (req, res) => {
    res.status(200).json({ user: {id: req.user.id, email: req.user.email}, msg: 'Successfully logged in!'});
}

exports.user = (req, res) => {
    if(req.isAuthenticated()){
        res.status(200).json( { id: req.user.id, email: req.user.email} );
    }else{
        res.status(401).send('Unauthorized');
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
                    salt: saltHash.salt
                }).then((user) => {
                    console.log('after create')
                    user = user.get({plain:true});
                    req.login(user, err =>{
                        if(err){
                            console.log(err);
                        }
                        return res.status(200).send({user: {id: user.id, email: user.email}, msg: 'Successfully registered!'});
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