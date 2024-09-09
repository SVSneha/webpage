import React from 'react';
import logo from '../../assets/images.jpg';

function SplashScreen() {
  return (
    <div style={styles.container}>
      <img 
        src={logo}
        alt="Harvest Hub Logo" 
        style={styles.logo} 
      />
      <h1 style={styles.heading}>Welcome to Harvest Hub</h1>
      <p style={styles.tagline}>Your Purchase, Their Future</p>
      <button style={styles.googleButton} onClick={() => console.log('Google login clicked')}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" 
          alt="Google logo" 
          style={styles.googleLogo} 
        />
        Continue with Google
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#f0f9eb',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '10px',
  },
  tagline: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  googleLogo: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  }
};

export default SplashScreen;
