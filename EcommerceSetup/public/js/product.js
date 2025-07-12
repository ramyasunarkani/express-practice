const onSubmitHandler=(e)=>{
    e.preventDefault();
    const product=e.target.productName.value;
    const obj={
        "productName":product
    }
    axios.post('http://localhost:4000'+'/api/products',obj).then(res=>{
        console.log("value returned from post request:"+res.data.value )
    })
}