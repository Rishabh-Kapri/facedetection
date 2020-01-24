import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				  <p onClick={() => onRouteChange('signin')} className='f3 pointer nav-button'>Sign Out</p>
				</nav>
			);
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				  <p onClick={() => onRouteChange('signin')} className='f3 pointer nav-button'>Sign In</p>
				  <p onClick={() => onRouteChange('register')} className='f3 pointer nav-button'>Register</p>
				</nav>
			);
		}
}

export default Navigation;