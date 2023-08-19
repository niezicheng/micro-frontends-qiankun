

import { TMicroApps } from './types'

export const microApps: TMicroApps = [
  {
    name: "reactApp",
    entry: "//localhost:8888",
    activeRule: "micro/react",
    container: "#subapp-viewport",
    props: {
      basename: '/micro/react',
    },
  },
  {
    name: "vueApp",
    entry: "//localhost:9999",
    container: "#subapp-viewport",
    activeRule: "/micro/vue",
    props: {
      basename: '/micro/vue',
    },
  },
];