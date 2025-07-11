const getAllProducts=(req,res)=>{
    res.send('Fetching all products')
}

const AddProduct=(req,res)=>{
    res.send('Adding a new product')
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