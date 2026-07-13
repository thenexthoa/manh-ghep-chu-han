import { Outlet } from "react-router-dom";

import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Header />

      <Outlet />
    </div>
  );
}

export default AppLayout;