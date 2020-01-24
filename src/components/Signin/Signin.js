import React from 'react';
import './Style.css';

class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
  
  onEmailChange = (event) => {
  	this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
  	this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
  	fetch('http://localhost:3000/signin', {
  		method: 'post',
  		headers: {'Content-Type': 'application/json'},
  		body: JSON.stringify({
  			email: this.state.signInEmail,
  			password: this.state.signInPassword
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
		const { onRouteChange } = this.props;
		return (
			<div className='form-container'>
			  <fieldset id='sign_in'>
			    <legend className='text-color sign-in-text'>Sign In</legend>
			    <div>
			      <label className='text-color' htmlFor='email_address'>Email </label>
			      <input 
				      type='email' 
				      name='email_address' 
				      id='email_address' 
				      onChange={this.onEmailChange} />
			    </div>
			    <div>
			      <label className='text-color' htmlFor='password'>Password </label>
			      <input 
				      type='password' 
				      name='password' 
				      id='password' 
				      onChange={this.onPasswordChange} />
			    </div>
			    
			    {/*<label className='box cursor text-color'><input type="checkbox" /> Remember me</label>*/}
			    
			  </fieldset>
			  <div>
			    <input onClick={this.onSubmitSignIn} type='submit' value='Sign In' className='text-color cursor btn-submit'/>
			  </div>
			  <div>
			    <p onClick={() => onRouteChange('register')} className='text-color cursor register'>Register</p>
			  </div>
			</div>
		);
	}
}

export default Signin;