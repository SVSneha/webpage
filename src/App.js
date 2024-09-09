import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './features/components/SplashScreen';
import LanguageSelection from './features/components/LanguageSelector';
import AvatarIcon from './features/components/AvatarIcon';
import LoginForm from './features/components/LoginForm'; // Import your LoginForm component

function App() {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  // Simulate splash screen duration, after which LanguageSelection is shown
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanguageSelector(true);
    }, 3000); // 3 seconds splash screen time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={showLanguageSelector ? <LanguageSelection /> : <SplashScreen />} />
          <Route path="/avatar" element={<AvatarIcon />} />
          <Route path="/login-farmer" element={<LoginForm />} /> {/* New route for LoginForm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
