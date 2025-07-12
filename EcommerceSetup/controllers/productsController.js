const path=require('path');
const getAllProducts=(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","product.html"))
}

const AddProduct=(req,res)=>{
    const data=req.body;
    res.json({value:data.productName})
}

const getProductById=(req,res)=>{
    const productId=req.params.id;
    res.send(`Fetching product with ID:${productId}`)
}

module.exports={
    getAllProducts,
    AddProduct,
    getProductById


}