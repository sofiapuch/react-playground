import { Outlet } from 'react-router-dom';

import Navigation from '../layout/navigation/Navigation';

const DefaultTemplate = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default DefaultTemplate;