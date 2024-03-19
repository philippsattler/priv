import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="CMD-Style">Hello, World</h1>
      </header>
      <main className="App-main">
        <section className="about-section">
          <div className="about-content">
            <h2>Über mich</h2>
            <p>Mein Name ist Philipp Sattler und ich bin ein begeisterter Softwareentwickler mit Leidenschaft für React und TypeScript.</p>
          </div>
        </section>
        <section className="contact-section">
          <div className="contact-content">
            <h2>Kontakt</h2>
            <p>
              Du kannst mich über meine <a href="mailto:philipp.sattler@web.de">E-Mail</a>-Adresse erreichen.
            </p>
            <p>Weitere Kontaktmöglichkeiten:</p>
            <ul className="contact-list">
              <li>LinkedIn: <a href="https://www.linkedin.com/in/philipp-sattler-98a973247/">Philipp Sattler</a></li>
              <li>GitHub: <a href="https://github.com/philippsattler/">philippsattler</a></li>
              <li>Discord: <a href="https://discord.com/users/philipp_sattler">philipp_sattler</a></li>
            </ul>

          </div>
        </section>
      </main>
      <footer className="App-footer">
        &copy; 2024 Philipp Sattler
      </footer>
    </div>
  );
};

export default App;
