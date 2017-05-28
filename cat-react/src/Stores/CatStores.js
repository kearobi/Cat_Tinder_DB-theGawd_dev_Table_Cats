
import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher'

class CatStore extends EventEmitter{
  constructor(){
    super()
    this.fields = [{
    }
  ]
    this.newCat = {}
  }

  getFields(){
    return this.fields
  }

  getNewCat(){
    return this.newCat
  }

  updateNewCat(attributes){
    this.newCat = attributes
    this.emit('change')
  }

  updateCat(attributes){
    this.fields = attributes
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("CREATE_CAT"):{
        this.updateNewCat(action.attributes)
        break
      }
      case("UPDATE_CAT"):{
      this.updateCat(action.cats)
      break
      }
      default:{}
    }
  }
}

const store = new CatStore()
Dispatcher.register(store.handleActions.bind(store))
window.store = store
export default store
