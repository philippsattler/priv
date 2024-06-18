import React from 'react';
import './App.css';
import Timeline from './sections/aboutme/Timeline.tsx'
import Card from './sections/card/Card.tsx';
import Contact from './sections/contact/Contact.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="CMD-Style">hello, world</h1>
      </header>
      <main className="App-main">
        <section className="card-section">
          <Card />
        </section>
        <section>
          <Timeline />
        </section>
        <section className="contact-section">
          <Contact />
        </section>
      </main>
      <footer className="App-footer">
        &copy; 2024 Philipp Sattler
      </footer>
    </div>
  );
};

export default App;
