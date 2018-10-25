const Products = require("./models.js")
module.exports = {
    home: (req,res)=>Products.find({})
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),
    addProduct: (req,res)=>Products.create(req.body)
                            .then(data=>{console.log("create controller",data);res.json(data)})
                            .catch(errs=>{console.log("ERRS");res.json(errs)}),
    singleProduct: (req,res)=>Products.find({id:req.params.id})
                            .then(data=>{console.log("edit Controller");res.json(data)})
                            .catch(errs=>{console.log(errs);res.json(errs)}),
    updateProduct:(req,res)=>Products.update({_id:req.params.id},{name:req.body.name,quantity:req.body.quantity,price:req.body.price, displayPrice: req.body.displayPrice}, {runValidators:true} )
                            .then(data=>{console.log("update");res.json(data)})
                            .catch(errs=>res.json(errs)),
    deleteProduct:(req,res)=>Products.remove({id:req.params.id})
                            .then(data=>{console.log("delete");res.json(data)})
                            .catch(errs=>res.json(errs)),
                                                            
}


