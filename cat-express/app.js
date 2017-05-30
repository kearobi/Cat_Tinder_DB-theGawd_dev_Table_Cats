var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Cat = require('./models').Cat
var User = require('./models').User
var cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

//** app.get gets called by the CatAdd function updateStoreCat().
//** updateStoreCat() initiates an api 'GET' REQUEST.
app.get('/cats', function(request, response){
//** Cat.findall() gathers the rows of cats from the DB TABLE. .findall() returns a set of JSON objects, which get passed into the RESPONSE function(cats)
  Cat.findAll().then(function(cats){
//** Again our response.status(200) allows CatAction to compete its function.
    response.status(200)
//** The promise is returned as the RESPONSE.
//** RESPONSE.json resolves the promise with the params status: and cats: cats)
    response.json({status: 'success', cats: cats})
  })
})

//**(4) :4000/create_cat;  We recieve our PARAMS from the CatAdd FETCH function as a REQUEST.
app.post('/create_cat', function(request, response){
//** our PARAMS provide this.state from CatAdd
//** Assign our REQUEST(this.state).BODY(form input data).cat(all data from each input on SUBMIT) to a variable.
  let catParams = request.body.cat
//** We REQUIRED 'Cat' from the models file 'cats'
//** LOOK AT MODELS 'CATS' to reference CAT.CREATE
//** Cat is a model of our DB TABEL.
//** We pass an argument(catParams) into Cat.create and run the SEQUELIZE.DEFINE function so our JSON string can be interpreted by SEQUELIZE.
//** The result of our Cat.create(catParams) is .THEN passed into our RESPONSE function as a promise 'cat'.
  Cat.create(catParams).then(function(cat){
//** We set the .status(200) to fulfil the IF  conditional CatAdd JS: 66:
    //if(response.status === 200)
//**FETCH request from CatAdd will continue.
    response.status(200)
//** cat: cat; is we recieved body.cat on the request. We now have the RESPONSE that 'cat' has been recieved by the server and CatAdd will recieve 'cat'.
    response.json({status: 'success', cat: cat})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

app.post('/create_user', function(request, response){
//** our PARAMS provide this.state from CatAdd
//** Assign our REQUEST(this.state).BODY(form input data).cat(all data from each input on SUBMIT) to a variable.
  let userParams = request.body.user
//** We REQUIRED 'Cat' from the models file 'cats'
//** LOOK AT MODELS 'CATS' to reference CAT.CREATE
//** Cat is a model of our DB TABEL.
//** We pass an argument(catParams) into Cat.create and run the SEQUELIZE.DEFINE function so our JSON string can be interpreted by SEQUELIZE.
//** The result of our Cat.create(catParams) is .THEN passed into our RESPONSE function as a promise 'cat'.
  User.create(userParams).then(function(user){
//** We set the .status(200) to fulfil the IF  conditional CatAdd JS: 66:
    //if(response.status === 200)
//**FETCH request from CatAdd will continue.
    response.status(200)
//** cat: cat; is we recieved body.cat on the request. We now have the RESPONSE that 'cat' has been recieved by the server and CatAdd will recieve 'cat'.
    response.json({status: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})



app.listen(4000, function () {
 console.log('Example app listening on port 4000!');
});
