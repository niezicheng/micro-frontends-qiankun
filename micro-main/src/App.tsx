import Routes from './router'
import './App.css'

interface IAppProps {
  loading?: boolean;
}

function App(props: IAppProps) {
  console.log('props:', props)
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App
