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
            <img className="round" src="image.jpg" alt="myself" />
            <h3>Philipp Sattler</h3>
            <p>Development Operator</p>
            <p>Ich bin ein begeisteter Softwareentwickler, mit dem Ziel, mich stetig weiterzubilden.</p>
            <br />
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
                <li>SQL</li>
                <li>PL/SQL</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="contact-content">
            <h2>Kontakt</h2>
            <p>
              Grundsätzlich bin ich per <a href="mailto:philipp.sattler@web.de">E-Mail</a> erreichbar. Alternativ können Sie mich auch über die hier aufgeführten Netzwerke kontaktieren:
            </p>
            <ul className="contact-list">
              <li><img className="icon" alt="linkedin icon" src="icons/linkedin.svg" /><a href="https://www.linkedin.com/in/philipp-sattler-98a973247/">LinkedIn</a></li>
              <li><img className="icon" alt="github icon" src="icons/github.svg" /><a href="https://github.com/philippsattler/">GitHub</a></li>
              <li><img className="icon" alt="discord icon" src="icons/discord.svg" /><a href="https://discord.com/users/philipp_sattler">Discord</a></li>
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
