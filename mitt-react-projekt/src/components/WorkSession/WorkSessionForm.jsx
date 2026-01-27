import { useState } from "react";
import PriorityButtons from "./PriorityButtons";

export default function WorkSessionForm({ onAddSession }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Arbete");
  const [sessionType, setSessionType] = useState("🎯 Deep Work");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [priority, setPriority] = useState("Låg");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSession = { id: crypto.randomUUID(), title, category, sessionType, date, startTime, endTime, priority };
    onAddSession(newSession);
    setTitle(""); setCategory("Arbete"); setSessionType("🎯 Deep Work");
    setDate(""); setStartTime(""); setEndTime(""); setPriority("Låg");
  };

  return (
    <form className="worksession-form" onSubmit={handleSubmit}>
      <input placeholder="Titel" value={title} onChange={e => setTitle(e.target.value)} required />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Arbete</option><option>Personligt</option><option>Lärande</option><option>Övrigt</option>
      </select>
      <select value={sessionType} onChange={e => setSessionType(e.target.value)}>
        <option>🎯 Deep Work</option><option>👥 Möte</option><option>📋 Planering</option>
      </select>
      <PriorityButtons priority={priority} setPriority={setPriority} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} required />
      <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} required />
      <button className="worksession-button" type="submit">Spara</button>
    </form>
  );
}
