index.js =>

const session=require ('express-session')
const sessionconfig={
    secret:"c'est un deckbuilder",
    cookie:{},
    resave:false,
    saveUninitialized:true,
    cards:[],
}
app.use(session(sessionConfig))

