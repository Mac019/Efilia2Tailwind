import React from 'react';
import Section from './components/Section';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Section5 from './components/Section5'; // Renamed this import to avoid conflict

function App() {
  return (
    <div className="App">
      <Section />
      <Section5 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
