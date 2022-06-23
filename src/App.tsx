import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Home setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
