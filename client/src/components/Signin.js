import React from 'react';
import Cookies from 'js-cookie'



function Signin() {
  
    const handleGoogleSignIn = async () => {
        try {
          window.location.href = 'http://localhost:4000/api/v1/auth/google';
    
          // const data = await response.json();
    
          // if (response.ok) {
          //   console.log('Google Sign in successful:', data);
          //   Cookies.set('authToken', data.token); // Store the token in cookies
          //   window.location.href = '/feed'; // Redirect to feed page
          // } else {
          //   alert('Google Sign in failed.');
          // }
        } catch (error) {
          console.error('Error during Google sign in:', error);
          alert('An error occurred during Google sign in. Please try again.');
        }
      };

    return (
      <button onClick={handleGoogleSignIn} className="google-sign-in">
        Sign in with Google
      </button>
  )
}

export default Signin
