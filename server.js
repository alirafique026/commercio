const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const dotenv = require("dotenv")

dotenv.config()

// Connecting to Database
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})


app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))



// Home Page
app.get('/',async (req, res) => {
  res.render('home')
})

// For error page
app.get("*",function(req,res)
	{
		res.render("error.ejs");
	});

console.log("server has started...")
const port = process.env.PORT || 4000
app.listen(port)
