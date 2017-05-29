import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateStoreCat } from '../CatActions'
import '../App.css';

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

  //**(1) :300/add; Feild is selected by user, each feild is represeted by an object propery in above, 'cat'.
  //**(2) When a user begins to input values we handleChange, or handle the changes made by our user.
  handleChange(e){
    //** e.target is the user EVENT(e) of selecting a property((TARGET) ie: 'color', 'breed') of 'cat'.
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
  //**(3) :3000/add; Once the form as been completly filled out the user will click the "SUBMIT" button which will trigger the handleSubmit(e) function.
  //** handleSubmit() reacts to a user event.
  handleSubmit(e){

    var appScope = this
  //** e.preventDefault() keeps the page from doing what ever is default
    e.preventDefault()

  //** PARAMS give a detail regarding our FETCH. We provide paramiters for the
  //** METHOD: HEADERS: BODY: are
    const params = {


  //** 'Post' to the server as opposed to 'Get' or whatever
      method: 'POST',
  //** setting the file type to json
      headers: {'Content-Type': 'application/json'},
  //** we set the body of our POST to the object this.state.
  //** JSON.stringify converts our JS object into a JSON string for the server.
      body: JSON.stringify(this.state)
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
  //** we assign the scope of app.js (react) becasue we will ultimately update the state of CatAdd, CatIndex and CatStores.
  //** We passed in (body) which is the result of the response.json()
  //** Set the state of cat: by assigning our (body) to the cat object.
          appScope.setState({
            cat: body.cat,
            message: 'successfully created cat profile'
          })
  //** The state of our form data has been successfully updated to our DB TABLE with a new cat.
            updateStoreCat()
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
