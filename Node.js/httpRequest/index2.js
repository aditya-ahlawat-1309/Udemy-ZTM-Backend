const express = require("express");
const path = require("path");
const friendsRouter = require("./router/friendsRouter");
const generalRouter = require("./router/generalRouter");
const messagesRouter = require("./router/messagesrouter");

var hbs = require("express-handlebars");

const app = express();
const PORT = 8000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// app.use ---> middlesware -------- app.get ------> final destination
app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});


app.use('/site', express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req,res) => {
    res.render('index', {
        title: 'My Friends Are Very Clever',
        caption: "Let's go Skiing!"
    })
})

//app.use('/', generalRouter);
app.use('/messages', messagesRouter);
app.use('/friends', friendsRouter);
app.listen(PORT, (req,res) => {
    console.log(`Server is running on ${PORT}`);
});