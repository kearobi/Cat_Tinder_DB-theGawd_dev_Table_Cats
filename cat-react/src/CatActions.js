import Dispatcher from './Dispatcher/Dispatcher'
import './App.css';

export function updateStoreCat(){
  const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }
  //API call originally used in CatIndex, now CatIndex has no API call.
 //** CatAction API call FETCH notifies app.js (express) there is a 'GET' request.
  fetch("http://localhost:4000/cats", params).then(function(response){
  //** response is an awaited promise until it is returned by the server.
  //** when IF conditional is met the our response.json() will resolve and be passed into the dispatcher function as (body)
    if(response.status === 200){
      response.json().then(function(body){
  //** when we dispatch a listener has been established in our store, so that CatStores can updateCats(). GO TO STORE JS:39
        Dispatcher.dispatch({
          //in our store we are listening to in the store in handleChange.
          type: 'UPDATE_CAT',
          //the cats are stored in body.cats (how does the body.cats get into CatActions)
  //**  body is our parsed resopnse.
          cats: body.cats
        })
      })
    }
  }).catch(function(error){
  })
}


export function catAdd(attributes){
//** e.preventDefault() keeps the page from doing what ever is default

//** PARAMS give a detail regarding our FETCH. We provide paramiters for the
//** METHOD: HEADERS: BODY: are
  const params = {
//** 'Post' to the server as opposed to 'Get' or whatever
    method: 'POST',
//** setting the file type to json
    headers: {'Content-Type': 'application/json'},
//** we set the body of our POST to the object this.state.
//** JSON.stringify converts our JS object into a JSON string for the server.
    body: JSON.stringify(attributes)
  }
//** We make a succesfull connection or not.
//** :4000/create_cat coresponds to the app.js express route.
//** NEXT STEP ON 'app.js' in 'cat-express' JS:23
  fetch("http://localhost:4000/create_cat", params).then(function(response){

//** IF there is a successful connection pass the response through.
//** response = the awaited promise from the server. In this case it is the JSON string instance of the JS object 'cat'
    if(response.status === 200){
//** The response.status ==== 200 condition is met
//** The RESPONSE.json() takes the response and reads it to return a promise.
//** The new promise is then parsed into text and used to resolve RESPONSE.
//** body is the result of the .json() and is passed into .setState.
      response.json().then(function(body){
//** We will dispatch 'CREATE_CAT'
//** We passed in (body) which is the result of the response.json()
//**
      Dispatcher.dispatch({
        type: 'CREATE_CAT',
        cat: body.cat,
        message: 'Cat Created!'
      })
    })
    } else {
      this.setState({
        message: 'error'
      })
      // else update the message to say there was a failure
    }
  }).catch(function(error){
    this.setState({
      message: 'there was an error: ' + error.errors.join("\n")
    })
  })
}


  export function userAdd(userInput){
    debugger

  //** e.preventDefault() keeps the page from doing what ever is default
  //** PARAMS give a detail regarding our FETCH. We provide paramiters for the
  //** METHOD: HEADERS: BODY: are
    const params = {
  //** 'Post' to the server as opposed to 'Get' or whatever
      method: 'POST',
  //** setting the file type to json
      headers: {'Content-Type': 'application/json'},
  //** we set the body of our POST to the object this.state.
  //** JSON.stringify converts our JS object into a JSON string for the server.
      body: JSON.stringify({user: userInput})
    }
  //** We make a succesfull connection or not.
  //** :4000/create_cat coresponds to the app.js express route.
  //** NEXT STEP ON 'app.js' in 'cat-express' JS:23
    fetch("http://localhost:4000/create_user", params).then(function(response){

  //** IF there is a successful connection pass the response through.
  //** response = the awaited promise from the server. In this case it is the JSON string instance of the JS object 'cat'
      if(response.status === 200){
  //** The response.status ==== 200 condition is met
  //** The RESPONSE.json() takes the response and reads it to return a promise.
  //** The new promise is then parsed into text and used to resolve RESPONSE.
  //** body is the result of the .json() and is passed into .setState.
        response.json().then(function(body){
  //** We will dispatch 'CREATE_CAT'
  //** We passed in (body) which is the result of the response.json()
  //**
        Dispatcher.dispatch({
          type: 'CREATE_USER',
          user: body.user,
          message: 'User Created!'
        })
      })
      } else {
        this.setState({
          message: 'error'
        })
        // else update the message to say there was a failure
      }
    }).catch(function(error){

    })

}
