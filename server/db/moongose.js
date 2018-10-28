let mongoose = require('mongoose');

mongoose.Promise = global.Promise; //para poder manejar promises
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp', {
    useNewUrlParser: true
});

module.exports = {
    mongoose
};