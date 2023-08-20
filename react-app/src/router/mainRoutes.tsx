import Layout from "layout"

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/home',
      element: <div>home</div>,
    },
    {
      path: '/about',
      element: <div>about</div>,
    },
    { path: '*', element: null },
  ],
}

export default mainRoutes
