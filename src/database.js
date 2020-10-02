import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/company_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is Connected!'))
    .catch(error => console.log(error))