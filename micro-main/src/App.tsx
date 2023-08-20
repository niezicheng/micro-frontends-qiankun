
import Routes from 'router'
import { useInitConfig } from 'hooks'

function App() {
  useInitConfig()
  return (
    <div className="micro-app">
      <Routes />
    </div>
  );
}

export default App
