import './App.css'
import React , { useState } from 'react'
import Input from './components/Input/Input'
import MyButton from './components/Button/Button'
import Cards from './components/Cards/Cards'
import taskIconLight from'./assets/taskIconLight.png'
import taskIconDark from'./assets/taskIconDark.png'
import goalIconLight from './assets/goalIconLight.png'
import goalIconDark from './assets/goalIconDark.png'





function App() {
  const [task , setTask] = useState ("");
  const [isDark , setIsDark] = useState (true);

  const handleSave = () => {
    console.log("Saving Task:", task);
    alert(`Task "${task}" saved!`);
  };

  const appStyle = {
    backgroundColor: isDark ? "#111827" : "#f9fafb",
    color: isDark ? "white" : "black",
    width: "100%" ,
    minHeight: "100vh",
    padding: "40px"
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows cards to move to next line on small screens
    gap: '20px',
    marginTop: '30px'
  };

  return (
    <div style={appStyle}>
      <h2>Optimize Your Workday</h2>
      
      <Input 
        label="Task Name"
        placeholder="What are you working on?"
        isDarkMode={isDark}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <div style={{ display: 'flex', gap: '10px', margin: 'auto', textAlign: 'center',}}>
        <MyButton isDarkMode={isDark} onClick={handleSave}>
          Save Work Block
        </MyButton>

        <MyButton 
          isDarkMode={isDark} 
          onClick={() => setIsDark(!isDark)}
          style={{ backgroundColor: 'transparent', border: '1px solid #6366f1', color: '#6366f1' }}
        >
          Toggle {isDark ? "Light" : "Dark"} Mode
        </MyButton>
        
      </div>
      <div style={rowStyle}>
        <Cards         
          title="0/0"
          icon={isDark ? taskIconDark : taskIconLight}
          description="uppgifter idag"
          isDarkMode={isDark}
        />
        
        <Cards         
          title="4"
          icon={isDark ? goalIconDark : goalIconLight}
          description="aktiva mål"
          isDarkMode={isDark}
        />
      </div>
    </div>
  );
}

export default App;
