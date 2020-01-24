import React from 'react';
import './Style.css';

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}
  
  onNameChange = (event) => {
  	this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
  	this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
  	this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
  	fetch('http://localhost:3000/register', {
  		method: 'post',
  		headers: {'Content-Type': 'application/json'},
  		body: JSON.stringify({
  			email: this.state.email,
  			password: this.state.password,
  			name: this.state.name
  		})
  	})
  	  .then(response => response.json())
  	  .then(user => {
  	  	if (user.id) {
  	  		this.props.loadUser(user);
			  	this.props.onRouteChange('home');	  		
  	  	}
  	  })
  }

	render() {
		return (
			<div className='form-container'>
			  <fieldset id='register'>
			    <legend className='text-color sign-in-text'>Register</legend>
			    <div>
			      <label className='text-color' htmlFor='name'>Name</label>
			      <input 
				      type='name' 
				      name='name' 
				      id='name'
				      onChange = {this.onNameChange}
				    />
			    </div>
			    <div>
			      <label className='text-color' htmlFor='email_address'>Email </label>
			      <input 
				      type='email' 
				      name='email_address' 
				      id='email_address'
				      onChange = {this.onEmailChange} 
				    />
			    </div>
			    <div>
			      <label className='text-color' htmlFor='password'>Password </label>
			      <input 
				      type='password' 
				      name='password' 
				      id='password'
				      onChange = {this.onPasswordChange}
				    />
			    </div>
			    
			    {/*<label className='box cursor text-color'><input type="checkbox" /> Remember me</label>*/}
			    
			  </fieldset>
			  <div>
			    <input onClick={this.onSubmitSignIn} type='submit' value='Register' className='text-color cursor btn-submit'/>
			  </div>
			</div>
		);
	}
}

export default Register;