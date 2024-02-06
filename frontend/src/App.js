import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRegistration from './components/CustomerRegistration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerRegistration />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
};

export default App;
