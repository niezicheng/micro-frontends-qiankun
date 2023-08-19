import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="Layout">
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
