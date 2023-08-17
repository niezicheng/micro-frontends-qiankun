
const mainRoutes = {
  path: '/',
  element: null,
  children: [
    {
      path: '/micro/*',
      element: <div id="subapp-viewport"></div>,
    },
    // 路由追加，勿删此注释
    { path: '*', element: null },
  ],
}

export default mainRoutes