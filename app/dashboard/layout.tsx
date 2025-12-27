import Sidebar from '../components/Sidebar';
import MobileSidebar from '../components/MobileSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white">
      <MobileSidebar />
      <Sidebar />
      <main className="flex-1 overflow-y-auto md:ml-64 pt-16 md:pt-0">
        {children}
      </main>
    </div>
  );
}

