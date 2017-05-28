import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Kitties from './Kitties';
import store from '../Stores/CatStores'


class CatIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: store.getFields()
    }
  }

  updateCats(){
    this.setState({cats: store.getFields()})
  }
  componentWillMount(){
    const StoreScope = store
    store.on('change', StoreScope.updateCat.bind(StoreScope))
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
