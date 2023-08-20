import { Outlet, Link } from 'react-router-dom'
import { qiankunWindow } from 'plugins/qiankun/helper';
import { menusList } from 'config'
import 'layout/index.scss'

const Layout = () => {
  return (
    <div className="layout-container">
      // qiankunWindow.__POWERED_BY_QIANKUN__ 为 true 时，不显示菜单
      {!qiankunWindow.__POWERED_BY_QIANKUN__ && (
        <div className='layout-left'>
          {menusList.map((item, index) => (
            <Link key={item?.id || index} to={item.path}>{item.name}</Link>
          ))}
        </div>
      )}
      <div className='layout-right'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
