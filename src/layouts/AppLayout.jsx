import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-10 select-none overflow-x-hidden">
      <Header />

      <Outlet />
    </div>
  );
}

export default AppLayout;