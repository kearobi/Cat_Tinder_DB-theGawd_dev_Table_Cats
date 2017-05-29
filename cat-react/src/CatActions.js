import Dispatcher from './Dispatcher/Dispatcher'

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
