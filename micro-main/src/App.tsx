
import Routes from 'router'
import { useInitConfig } from 'hooks'
import './App.css'

function App() {
  useInitConfig()
  return (<Routes />);
}

export default App
