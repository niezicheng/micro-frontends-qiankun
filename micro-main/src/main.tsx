import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  runAfterFirstMounted,
} from "qiankun";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const render = (props: { loading?: boolean; }) => {
  const { loading } = props
  const root = createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App loading={loading} />
      </BrowserRouter>
    </React.StrictMode>,
  )
}

render({ loading: true });

// const loader = (loading: boolean) => render({ loading });

const apps = [
  {
    name: "reactApp",
    entry: "//localhost:8888",
    activeRule: "micro/react",
    container: "#subapp-viewport",
    // loader,
  },
  {
    name: "vueApp",
    entry: "//localhost:9999",
    container: "#subapp-viewport",
    activeRule: "/micro/vue",
    // loader
  },
  // {
  //   name: "angularApp",
  //   entry: "//localhost:8787",
  //   container: "#subapp-viewport",
  //   activeRule: "/micro/angular",
  //   loader,
  // },
];

registerMicroApps(apps);

setDefaultMountApp("/micro/vue");

start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
