const getUsers=(req,res)=>{
    res.send('Fetching all users')
}

const postUser=(req,res)=>{
    res.send('Adding a new user')
}

const getUserById=(req,res)=>{
    const userId=req.params.id;
    res.send(`Fetching user with ID:${userId}`)
}

module.exports={
    getUsers,
    postUser,
    getUserById


}