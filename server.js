	
	const express = require('express'),
		  ejs = require('ejs'),
		  mongoose = require('mongoose'),
		  flash = require('connect-flash'),
		  session = require('express-session'),
		  app = express();

	
	app.set('view engine', 'ejs');
	app.use(express.urlencoded({extended: false}));
	app.use(express.json());
	app.use(express.static('public'));

	//BELOW WE CONNECT TO MONGO DATABASE
	mongoose.connect("mongodb+srv://Adebayo:welldone@cluster0.kjsnn.mongodb.net/ecommerce", {useNewUrlParser:true,useUnifiedTopology:true});


	//EXPRESS-SESSION MIDDLEWARE
		app.use(session({
			secret: 'secret',
			resave: true,
			saveUninitialized: true
		}))

	//CONNECT FLASH
	app.use(flash());

	app.use((req, res, next) => {
		res.locals.message = req.flash('message');
		res.locals.error_msg = req.flash('error_msg');
		next();

	})

	//WE IMPORT THE ROUTES FILES

	app.use('/', require('./routes/uRoutes'));
	app.use('/', require('./routes/mRoutes'));

	app.listen(process.env.PORT || 4040, () => {
		console.log("Server started on port 4040")
	})