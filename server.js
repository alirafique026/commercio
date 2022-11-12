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

app.get('/index',async (req, res) => {
	res.render('home')
  })

// Account Page
app.get('/account',async (req, res) => {
	res.render('account')
  })

// Collection Page
app.get('/collection',async (req, res) => {
	res.render('collection')
  })


// Contact Page
app.get('/contact',async (req, res) => {
	res.render('contact')
  })

// Create-account Page
app.get('/create-account',async (req, res) => {
	res.render('create-account')
  })


// Login Page
app.get('/login',async (req, res) => {
	res.render('login')
  })

// Product Page
app.get('/product',async (req, res) => {
	res.render('product')
  })

// Shop Page
app.get('/shop',async (req, res) => {
	res.render('shop')
  })

// Single Page
app.get('/single',async (req, res) => {
	res.render('single')
  })

// Cart Page
app.get('/cart',async (req, res) => {
	res.render('cart')
  })

// Collection Page
app.get('/collection',async (req, res) => {
	res.render('collection')
  })

  // Contact Page
app.get('/contact',async (req, res) => {
	res.render('contact')
  })

// Blog Page
app.get('/blog',async (req, res) => {
	res.render('blog')
  })

// For error page
app.get("*",function(req,res)
	{
		res.render("error.ejs");
	});

console.log("server has started...")
const port = process.env.PORT || 4000
app.listen(port)
