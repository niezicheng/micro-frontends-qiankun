// import { Counter } from 'components/counter';
// import { Pokemon } from 'components/pokemon';
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from 'store';
import { TMenuList } from 'types'
import menusList from 'mock/menusList'

const reactSubApps = ['reactApp', 'reactAppOne', 'reactAppTwo']
const vueSubApps = ['vueApp', 'vueAppOne', 'vueAppTwo']

const Layout = () => {
  const { currentApp } = useAppSelector((state) => state.common)

  let currentMenus: TMenuList = []

  if (currentApp?.name && reactSubApps?.includes(currentApp?.name)) {
    currentMenus = menusList.find((item) => item.path === '/micro/reactApp')?.children || []
  }

  if (currentApp?.name && vueSubApps?.includes(currentApp?.name)) {
    currentMenus = menusList.find((item) => item.path === '/micro/vueApp')?.children || []
  }

  console.log('%c👉  currentMenus: ',
    'background:#41b883;padding:1px; border-radius: 0 3px 3px 0;color: #fff', currentMenus) // 👈

  return (
    <div className="layout-container">
      {/* <Counter />
      <Pokemon /> */}
      {currentMenus?.map((item) => (
        <Link to={item.path} key={item.path}>{item.name}</Link>
      ))}
      <Outlet />
    </div>
  );
}

export default Layout;
