import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Kitties from './Kitties';
import catStore from '../Stores/CatStores'


class CatIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: catStore.getCats()
    }
  }
  //when the CatStore EMITS 'change' CatIndex catches the changes in CatStore and triggers the this.updateCats.bind(this) JS:20
  componentWillMount(){
    catStore.on('change', this.updateCats.bind(this))
    }
    updateCats(){
  //** We .setState and assign the object 'cats' a value of catStore.getCats()
      this.setState({
  //** catStore.getCats() calls the getCats() function in CatStores JS:14
  //** getCats() is called by CatIndex when setting the state. The store has been updated with a response from the DB and stored that response in an array of objects.
  //** cats: set to the requested DB TABLE data.
        cats: catStore.getCats()})
    }

  renderCats(){
    let renderedCats = []
    for(var i=0; i < this.state.cats.length; i++){
      let catId = "cat-" + i;
      renderedCats.push(
        <Kitties key={catId}
          cat={this.state.cats[i]}>

        </Kitties>
        )
      }

    return renderedCats
  }

  render(){
    return(
      <div className='container'>
        <div className="catLink">
          <Link to={`/add`}> <h3>ADD CAT</h3></Link>
        </div>
        <div>
          {this.renderCats()}
        </div>
      </div>
    )
  }
}


export default CatIndex
