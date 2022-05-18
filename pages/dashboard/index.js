import { getLayout } from "components/layout/Navbar";

const Dashboard = () => {
  return (
    <div className="w-full h-screen">
      <div>
        Halaman Utama, jumlah order saat ini, jumlah product, jumlah category
      </div>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = getLayout;
