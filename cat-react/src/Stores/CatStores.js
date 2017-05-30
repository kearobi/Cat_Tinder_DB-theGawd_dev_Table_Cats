
import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher/Dispatcher'

class CatStore extends EventEmitter{
  constructor(){
    super()
    this.cats = {
    }

    this.newCat = {}
  }
//** getCats() is called by CatIndex when setting the state. The store has been updated with a response from the DB and stored that response in an array of objects.
//** t
  getCats(){
    return this.cats
  }

  getNewCat(){
    return this.newCat
  }

  updateNewCat(attributes){
//** push the newCat into the index of the all "Cats" in CatIndex
    this.newCat = attributes
    this.emit('change')
  }
  //** attributes = the passed in parsed body.cat
  updateCat(attributes){
  //** this.cats = the parsed body.cat
    this.cats = attributes
  // emit 'change' for listening parties (CatIndex) JS:15
    this.emit('change')
  }
//dispatched events (cases)
  handleActions(action){
    //action.type?
    switch(action.type){
      case("CREATE_CAT"):{
        this.updateNewCat(action.attributes)
        break
      }
      case("UPDATE_CAT"): {
//** the case of UPDATE_CAT calls the function updateCat(). JS: 27
      this.updateCat(action.cats)
      break
    }
      default:{}
    }
  }
}
//store instance
const store = new CatStore()

Dispatcher.register(store.handleActions.bind(store))
window.store = store
export default store
