const moongose = require('mongoose');

const dbConfig = 'mongodb+srv://fgrdz:12345@cluster0.wqvosv6.mongodb.net/annotations?retryWrites=true&w=majority';



const connection = moongose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

module.exports = connection;
