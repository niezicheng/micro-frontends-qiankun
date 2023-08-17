import { useRoutes } from 'react-router-dom'
import mainRoutes from './mainRoutes'

export default () => {
  return useRoutes([mainRoutes])
}