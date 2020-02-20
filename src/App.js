import React from 'react';
import Header from './header.jsx';
import Section1 from './section1.jsx';
import Section2 from './section2.jsx';
import Section3 from './section3.jsx';
import Section4 from './section4.jsx';
import Section5 from './section5.jsx';
import Footer from './footer.jsx';
import './App.css';
import './../node_modules/@fortawesome/fontawesome-free/js/all.js'
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Footer></Footer>
    </div>
  );
}

export default App;
