export default function PriorityButtons({ priority, setPriority }) {
  return (
    <div className="priority-btn">
      {["Låg", "Medel", "Hög"].map(p => (
        <button
          type="button"
          key={p}
          className={`priority-button ${priority===p ? (p==="Låg"?"low-priority":p==="Medel"?"medium-priority":"high-priority") : ""}`}
          onClick={() => setPriority(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}