import React from 'react';
import { useNavigate } from 'react-router-dom';
import languageMap from '../../assets/language.jpg';

function LanguageSelection() {
  const navigate = useNavigate(); // Get the navigate function from React Router

  // Function to handle button click and navigate to AvatarIcon page
  const handleLanguageSelection = () => {
    navigate('/avatar'); // Navigate to the AvatarIcon page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Choose Your Language</h1>

      <img 
        src={languageMap} 
        alt="Language Map" 
        style={styles.languageMap}
      />

      <div style={styles.languagesContainer}>
        <button style={styles.languageButton} onClick={handleLanguageSelection}>தமிழ்</button>
        <button style={styles.languageButton} onClick={handleLanguageSelection}>English</button>
        <button style={styles.languageButton} onClick={handleLanguageSelection}>हिन्दी</button>
        <button style={styles.languageButton} onClick={handleLanguageSelection}>മലയാളം</button>
        <button style={styles.languageButton} onClick={handleLanguageSelection}>తెలుగు</button>
        <button style={styles.languageButton} onClick={handleLanguageSelection}>ಕನ್ನಡ</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#f0f9eb',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  languageMap: {
    width: '250px',
    marginBottom: '20px',
  },
  languagesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginBottom: '20px',
  },
  languageButton: {
    padding: '10px 20px',
    backgroundColor: '#f0f9eb',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default LanguageSelection;
