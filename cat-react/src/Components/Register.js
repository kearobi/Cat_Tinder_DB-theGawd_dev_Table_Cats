import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {userAdd} from '../CatActions'

class UserAdd extends Component {
  constructor(props) {
    super(props)
    //**(DATA FLOW COMMENTS) :3000/add; this.state.cat holds values for form input. Currently there is nothing stored in the state.
    this.state={
      user: {
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        password: ""
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
    let user = this.state.user
    //** So we have the EVENT(e), TARGET and the variable cat.
    //** cat[target.name]= this.state.cat.age (or .color..)
    //** this.state.cat.age = 4(for example)
    user[target.name] = target.value
    //** this.state.cat.age has an updated VALUE of '4'
    //** We set this.state.cat and render.
    this.setState({
      user: user
    })
  }

  handleSubmit(e){
    e.preventDefault()
      userAdd(this.state.user)
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
                <h3>Register User Name and Password</h3>
                <div className='catHome'>
                  <div className="catLink">
                  <Link to={`/`}><h3>List Cats</h3></Link>
                  </div>
                </div>
                <form action='/register' onSubmit={this.handleSubmit.bind(this)}>
                  <div className='row' alt='tablerows'>
                    <label className='col-sm-2 col-form-label'>First Name</label>
                      <div className='col-xs-12'>
                        <input
                          type='text'
                          name='first_name'
                          value={this.state.user.firstName}
                          onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                      <div>
                        <label>Last Name</label>
                        <br />
                        <input
                          type='text'
                          name='last_name'
                          value={this.state.user.lastName}
                          onChange={this.handleChange.bind(this)}
                        />
                      </div>

                      <div>
                        <label>User Name</label>
                        <br />
                        <input name='user_name'
                          value={this.state.user.userName}
                          onChange={this.handleChange.bind(this)}>
                        </input>
                      </div>

                      <div>
                        <label>Email</label>
                        <br />
                        <input
                          name='email'
                          value={this.state.user.email}
                          onChange={this.handleChange.bind(this)}>
                        </input>
                      </div>

                      <div>
                        <label>Password</label>
                        <br />
                        <input
                          type='password'
                          name='password'
                          value={this.state.user.password}
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

  export default UserAdd;
