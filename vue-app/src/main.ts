import { App, createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper';
import './style.css'
import app from './App.vue'

let root: App;

function render(props: any) {
  const { container } = props;
  root = createApp(app)
  const c = container
    ? container.querySelector("#app")
    : document.getElementById("app")
  root.mount(c)
}

renderWithQiankun({
  mount(props) {
    console.log("vue3sub mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("vue3sub unmount", props);
    root.unmount();
  },
  update(props: any) {
    console.log("vue3sub update", props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
