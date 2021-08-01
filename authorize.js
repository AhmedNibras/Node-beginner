const authorize = (req,res, next) => {
    const { user } = req.query;

    if( user === 'nibras')
    { req.user = { 
        name: 'Nibras',
         id: 3}
    next()
    }
    else{
        res.status(401).send('Unauthorize')
    }
}

module.exports = authorize