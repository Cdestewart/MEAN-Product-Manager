const api = require("./controller.js");

function router(app){
    app.get('/api/product/:id',api.singleProduct),
    app.get('/api/product',api.home),
    app.post('/api/product',api.addProduct),
    app.put('/api/product/:id',api.updateProduct),
    app.delete('/api/product/:id',api.deleteProduct)
}

module.exports = router;