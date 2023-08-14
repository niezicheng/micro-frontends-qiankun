import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper';
import App from './App'
import './index.css'

const render = () => {
  const root = createRoot(document.getElementById('root') as HTMLElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

renderWithQiankun({
  mount(props) {
    console.log("[react18] props from main framework", props);
    render();
  },
  bootstrap() {
    console.log("[react18] react app bootstraped");
  },
  unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(
      container
        ? container.querySelector("#root")
        : document.querySelector("#root")
    );
  },
  update: function (): void | Promise<void> {
    throw new Error('Function not implemented.');
  }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
