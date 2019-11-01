module.exports = {
    port: process.env.PORT || 8081,
    db: {
    database: process.env.DB_NAME || 'mlversioning',
    user: process.env.DB_USER || 'root',
    password: null,
    options:{
    dialect: process.env.DIALECT || 'mysql',
    host: process.env.HOST || 'localhost',
    //storage: './mlversioning.mysql'
    
}
}
}
