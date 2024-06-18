import React from "react";
import './Contact.css'

const Contact = () => {
  return (
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
  )
}

export default Contact;