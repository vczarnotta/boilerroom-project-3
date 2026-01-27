export default function SessionCard({ session }) {
  return (
    <div className={`session-card ${session.priority==="Låg"?"low-priority":session.priority==="Medel"?"medium-priority":"high-priority"}`}>
      <div className="priority-badge">
        <span className={`priority-dot ${session.priority==="Låg"?"low":session.priority==="Medel"?"medium":"high"}`} />
        <span className="priority-text">{session.priority}</span>
      </div>
      <h4>{session.title}</h4>
      <p>{session.date} | {session.startTime} – {session.endTime}</p>
      <p>{session.sessionType} | {session.category}</p>
    </div>
  );
}