import React from 'react';
import './Style.css';

const Signin = ({ onRouteChange }) => {
	return (
		<div className='form-container'>
		  <fieldset id='sign_in'>
		    <legend className='text-color sign-in-text'>Sign In</legend>
		    <div>
		      <label className='text-color' htmlFor='email_address'>Email </label>
		      <input type='email' name='email_address' id='email_address' />
		    </div>
		    <div>
		      <label className='text-color' htmlFor='password'>Password </label>
		      <input type='password' name='password' id='password' />
		    </div>
		    
		    {/*<label className='box cursor text-color'><input type="checkbox" /> Remember me</label>*/}
		    
		  </fieldset>
		  <div>
		    <input onClick={() => onRouteChange('home')} type='submit' value='Sign In' className='text-color cursor btn-submit'/>
		  </div>
		  <div>
		    <p onClick={() => onRouteChange('register')} className='text-color cursor register'>Register</p>
		  </div>
		</div>
	);
}

export default Signin;