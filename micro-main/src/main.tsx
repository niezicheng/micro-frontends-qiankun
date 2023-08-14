import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  registerMicroApps,
  start,
} from "qiankun";
import App from './App'
import './index.css'

const render = () => {
  const root = createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

render()

const apps = [
  {
    name: "reactApp",
    entry: "//localhost:8888",
    activeRule: "/react",
    container: "#subapp-viewport",
  },
  {
    name: "vueApp",
    entry: "//localhost:8686",
    container: "#subapp-viewport",
    activeRule: "/vue",
  },
  {
    name: "angularApp",
    entry: "//localhost:8787",
    container: "#subapp-viewport",
    activeRule: "/angular",
  },
];

registerMicroApps(apps);

start();


