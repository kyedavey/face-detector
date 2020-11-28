import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f6 link dim ph3 pv2 mb2 dib white bg-black-50 pa3 ma3 pointer'> Sign Out </p>
      </nav>
    );
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f6 link dim ph3 pv2 mb2 dib white bg-black-50 pa3 ma3 pointer'> Sign In </p>
        <p onClick={() => onRouteChange('register')} className='f6 link dim ph3 pv2 mb2 dib white bg-black-50 pa3 ma3 pointer'> Register</p>
      </nav>
    );
  }  
}

export default Navigation;