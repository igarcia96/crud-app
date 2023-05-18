var Userdb = require('../model/model');


exports.create = (req,res)=>{

    if(!req.body){
        res.status(400).send({ message : "content can not be empty"});
    }

    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status
    })

    user
        .save(user)
        .then(data => {
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "some error occurred while creating a create operation"
            });
        });
}







exports.find = (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(400).send
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send
            })
    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send
            })
    }
}

exports.find = (req,res)=>{
    
    if(!req.body){
        return res
                .status(400)
                .send

        const id = req.params.id;
        Userdb.findByIdAndUpdate(id, req.body,{ useFindAndModify: false})
            .then(data =>{
                if(!data){
                    res.status(400).send
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send
            })
    }
}

exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(400).send
            }else{
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send
            
        });
};       