import React from 'react';
import Cookies from 'js-cookie'



function Signin() {
  
    const handleGoogleSignIn = async () => {
        try {
          const response = await fetch('http://localhost:5000/auth/google', {
            method: 'GET',
            credentials: 'include', // Include cookies in the request
          });
    
          const data = await response.json();
    
          if (response.ok) {
            console.log('Google Sign in successful:', data);
            Cookies.set('authToken', data.token); // Store the token in cookies
            window.location.href = '/feed'; // Redirect to feed page
          } else {
            alert('Google Sign in failed.');
          }
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
