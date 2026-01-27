import { useState } from "react";
import WorkSessionForm from "./WorkSessionForm";
import SessionCard from "./SessionCard";
import './WorkSession.css';

export default function WorkSession() {
  const [sessions, setSessions] = useState([]);

  const addSession = (session) => setSessions(prev => [...prev, session]);

  return (
    <div className="worksession-container">
      <h2 className="worksession-title">Ny arbetssession</h2>
      <WorkSessionForm onAddSession={addSession} />
      <div className="sessions-grid">
        {sessions.map(s => <SessionCard key={s.id} session={s} />)}
      </div>
    </div>
  );
}