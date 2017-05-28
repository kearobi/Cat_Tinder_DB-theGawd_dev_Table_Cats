import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCat } from '../CatActions'
import '../App.css';

class CatAdd extends Component {
  constructor(props) {
    super(props)
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

  //e is the click
  //target is where you click/type
  //attribute refers to the name of that input which should match the state field
  handleChange(e){
    let target = e.target
    let cat = this.state.cat
    cat[target.name] = target.value
    this.setState({
      cat:cat
    })
  }

  handleSubmit(e){
    var appScope = this
    e.preventDefault()
    // set up the headers and request
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }
    // send state to the backend server
    fetch("http://localhost:4000/create_cat", params).then(function(response){
      // if post is successful update the message to be successful
      // and update the state to equal what we get back from the server
      if(response.status === 200){
        response.json().then(function(body){
          appScope.setState({
            cat: body.cat,
            message: 'successfully created cat profile'
          })
          updateCat()
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
