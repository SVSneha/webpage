import React from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../../assets/user.jpg';
import farmer from '../../assets/farmer.jpg';

const AvatarIcon = () => {
  const navigate = useNavigate();

  const handleFarmerClick = () => {
    navigate('/login-farmer');
  };

  const handleUserClick = () => {
    navigate('/login-user'); // Assuming you might add a user login page as well
  };

  const styles = {
    avatarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
    rolesContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      maxWidth: '500px',
    },
    roleCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    roleImage: {
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '2px solid #ddd',
      marginBottom: '10px',
    },
    roleText: {
      fontSize: '16px',
      color: '#333',
    },
    roleCardHover: {
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.avatarContainer}>
      <h2 style={styles.heading}>Select your role</h2>
      <div style={styles.rolesContainer}>
        <div
          style={styles.roleCard}
          onClick={handleUserClick}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={user}
            alt="Login as User"
            style={styles.roleImage}
          />
          <p style={styles.roleText}>Login as User</p>
        </div>

        <div
          style={styles.roleCard}
          onClick={handleFarmerClick}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={farmer}
            alt="Login as Farmer"
            style={styles.roleImage}
          />
          <p style={styles.roleText}>Login as Farmer</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarIcon;
