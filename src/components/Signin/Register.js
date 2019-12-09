import React from 'react';
import './Style.css';

const Register = ({ onRouteChange }) => {
	return (
		<div className='form-container'>
		  <fieldset id='register'>
		    <legend className='text-color sign-in-text'>Register</legend>
		    <div>
		      <label className='text-color' htmlFor='name'>Name</label>
		      <input type='name' name='name' id='name' />
		    </div>
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
		    <input onClick={() => onRouteChange('home')} type='submit' value='Register' className='text-color cursor btn-submit'/>
		  </div>
		</div>
	);
}

export default Register;