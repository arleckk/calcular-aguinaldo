import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-md-10 mx-auto">
          <Home />
        </div>
      </div>

      <footer id="footer">
        <Footer /> 
      </footer>

    </div>
  );
}

export default App;
