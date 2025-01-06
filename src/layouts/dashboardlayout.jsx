import Sidebar from '@/components/sidebar';
import { Outlet } from 'react-router';

  function DashboardLayout(){
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;

