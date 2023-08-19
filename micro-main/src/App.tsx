import { initQiankun } from './microApp'
import Routes from './router'
import './App.css'

interface IAppProps {
  loading?: boolean;
}

function App(props: IAppProps) {
  console.log('%c👉  props: ', 'background:#41b883;padding:1px; border-radius: 0 3px 3px 0;color: #fff', props) // 👈

  initQiankun()

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App
