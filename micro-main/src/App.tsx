
import Routes from 'router'
import { useInitConfig } from 'hooks'
import './App.css'

function App() {
  useInitConfig()
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App
