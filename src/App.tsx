import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="CMD-Style">hello, world</h1>
      </header>
      <main className="App-main">
        <section className="about-section">
          <div className="card-container">
            <img src="https://github.com/philippsattler/priv/blob/main/src/image.jpg" alt="myself" />
            <h3>Philipp Sattler</h3>
            <p>Softwareentwickler</p>
            <br/>
            <p>Ich bin ein begeisteter Softwareentwickler</p>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Python</li>
                <li>QlikView</li>
                <li>QlikSense</li>
                <li>Git</li>
              </ul>
            </div>
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
