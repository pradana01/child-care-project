const {Product} = require('../models');

const Authorization =  (req,res,next)=>{
    Product.findOne({
        where:{
            id: req.params.id
        }
    })
    .then((data)=>{
        
        if(!data){
            next({name: 'DATA_NOT_FOUND'})
        }else if(data.UserId != req.userData.id){
            next({name: "Forbidden access"})
        }else {
            next()
        }
    }).catch(err=>{
        next(err)
    })
}

module.exports = Authorization;