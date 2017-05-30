import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher/Dispatcher'

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.user = {
    }

    this.newUser = {}
  }
//** getCats() is called by CatIndex when setting the state. The store has been updated with a response from the DB and stored that response in an array of objects.
//** t
  // getUsers(){
  //   return this.user
  // }
  //
  // getNewUser(){
  //   return this.user
  // }

  updateNewUser(userInput){
//** push the newCat into the index of the all "Cats" in CatIndex
    this.newUser = userInput
    this.emit('change')
  }
  // //** attributes = the passed in parsed body.cat
  // updateCat(attributes){
  // //** this.cats = the parsed body.cat
  //   this.cats = attributes
  // // emit 'change' for listening parties (CatIndex) JS:15
  //   this.emit('change')
  // }
//dispatched events (cases)
  handleActions(action){
    //action.type?
    switch(action.type){
      case("CREATE_USER"):{
        this.updateNewUser(action.userInput)
        break
      }
      default:{}
    }
  }
}
//store instance
const userStore = new UserStore()

Dispatcher.register(userStore.handleActions.bind(userStore))
window.userStore = userStore
export default userStore
