import History from "./pages/History.jsx";
import EnergyLogger from './components/EnergyLogger/EnergyLogger';
import Timer from "./components/Timer/Timer";
import './App.css';

function App() {

    return (
        <>
            <History />
            <EnergyLogger />
            <Timer />
        </>
    )
}

export default App