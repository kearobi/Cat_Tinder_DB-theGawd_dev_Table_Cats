import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {catAdd} from '../CatActions'

class CatAdd extends Component {
  constructor(props) {
    super(props)
    //**(DATA FLOW COMMENTS) :3000/add; this.state.cat holds values for form input. Currently there is nothing stored in the state.
    this.state={
      cat: {
        color: "",
        breed: "",
        gender: "",
        habitat: "",
        personality: "",
        age: ""
      },
      message: ''
    }
  }

  //**(1) :300/add; TARGET is selected by user, each TARGET is represeted by an object propery in above, 'cat'.
  //**(2) When a user begins to input a VALUE into our TARGET we handleChange, or handle the changes made by our user.
  handleChange(e){
    //** e.target is the user EVENT(e) of selecting a TARGET ie: 'color', 'breed') of 'cat'.
    let target = e.target
    //** we assight a variable to represent the user input data.
    let cat = this.state.cat
    //** So we have the EVENT(e), TARGET and the variable cat.
    //** cat[target.name]= this.state.cat.age (or .color..)
    //** this.state.cat.age = 4(for example)
    cat[target.name] = target.value
    //** this.state.cat.age has an updated VALUE of '4'
    //** We set this.state.cat and render.
    this.setState({
      cat:cat
      //** DRAWN OUT:
      //**color: "",
      //** breed: "",
      //** gender: "",
      //**habitat: "",
      //** personality: "",
      //** age: ****"4"*****
    })
  }

  handleSubmit(e){
    e.preventDefault()
      catAdd(this.state.cat)
    }
  //**(3) :3000/add; Once the form as been completly filled out the user will click the "SUBMIT" button which will trigger the handleSubmit(e) function.
  //** handleSubmit() reacts to a user event.

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-xs-6 col-xs-offset-3'>
            <div className='panel'>
              <div className='panel-body'>
                <h3>Add a Cat</h3>
                <div className='catHome'>
                  <div className="catLink">
                  <Link to={`/`}><h3>List Cats</h3></Link>
                  </div>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className='row' alt='tablerows'>
                    <label className='col-sm-2 col-form-label'>Color</label>
                      <div className='col-xs-12'>
                        <input
                          type='text'
                          name='color'
                          value={this.state.cat.color}
                          onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                      <div>
                        <label>Breed</label>
                        <br />
                        <input
                          type='text'
                          name='breed'
                          value={this.state.cat.breed}
                          onChange={this.handleChange.bind(this)}
                        />
                      </div>

                      <div>
                        <label>Gender</label>
                        <br />
                        <select name='gender' value={this.state.cat.gender} onChange={this.handleChange.bind(this)}>
                          <option></option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>

                      <div>
                        <label>Habitat</label>
                        <br />
                        <select name='habitat' value={this.state.cat.habitat} onChange={this.handleChange.bind(this)}>
                          <option></option>
                          <option>Inside</option>
                          <option>Outside</option>
                          <option>Wildcat</option>
                        </select>
                      </div>

                      <div>
                        <label>Personality</label>
                        <br />
                        <input
                          type='text'
                          name='personality'
                          value={this.state.cat.personality}
                          onChange={this.handleChange.bind(this)}
                        />
                      </div>

                      <div>
                        <label>Age</label>
                        <br />
                        <input
                          type='number'
                          name='age'
                          value={this.state.cat.age}
                          onChange={this.handleChange.bind(this)}
                        />
                      </div>

                      <div>
                        <br />
                        <input
                          type='submit'
                          value='Submit'
                          className = 'btn btn-primary'
                        />
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    }
  }

  export default CatAdd;
