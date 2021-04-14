const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const Article = require('./models/article');
const methodoverride = require('method-override');
const app = express();
mongoose.connect('mongodb://localhost:27017/blog', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex:true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodoverride('_method'));


app.get('/', (req, res) => {
    res.render('landingPage');
})

app.get('/articles', async(req, res) => {

    const articles =  await Article.find().sort({ createdAt: 'desc' });  

    res.render('articles/index', {articles : articles});
})

app.use('/articles', articleRouter);

app.listen(3000, () => {
    console.log("Server Running at port 3000");
});