import React from "react";
import './Timeline.css'

const Timeline = () => {
  return (
    <div className="aboutme">
      <h2>Über mich</h2>
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="title">Ausbildung</h3>
              <p>Nach meiner mittleren Reife habe ich im September 2020 eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung begonnen. Diese habe ich im Juli 2023 mit guten Ergebnissen absolviert.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">Arbeit</h3>
              <p>Seither arbeite ich in meinem Ausbildungsbetrieb als Softwareentwickler und bin neben der Entwicklung von Webanwendungen mit React, TypeScript und Java auch für die Arbeit im BI mit QlikSense zuständig.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">Privates</h3>
              <p>Neben meinem Beruf interessiere ich mich auch privat für die Informatik. Dazu zählen unter anderem Hard- und Softwareprojekte mit dem Raspberry Pi und Linux-Servern.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">Hobbys</h3>
              <p>Wenn ich gerade nicht am Computer sitze, spiele ich gerne Tennis im Verein. Außerdem besuche ich regelmäßig das Fitnessstudio und spiele Geige im Orchester.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;