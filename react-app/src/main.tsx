import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
// import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper';
// 处理热更新【控制台报错 [import-html-entry]: error occurs while executing normal script <script type="module"></script> 错误】
import { renderWithQiankun, qiankunWindow } from './plugins/qiankun/helper';
import App from './App'
import './index.css'

const render = (props) => {
  const { container } = props;
  const root = createRoot(container ?
    container.querySelector("#root") :
    document.getElementById('root') as HTMLElement
  )
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

renderWithQiankun({
  mount(props) {
    console.log("[react18] props from main framework", props);
    render(props);
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
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
