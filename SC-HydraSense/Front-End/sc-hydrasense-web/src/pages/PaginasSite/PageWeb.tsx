import { HeaderPageWeb } from "./HeaderPageWeb";
import { SideBarPageWeb } from "./SideBarPageWeb";
import "./PageWeb.css";
import { Outlet } from "react-router-dom";

export function PageWeb() {
  return (
    <div className="pageweb">
      <HeaderPageWeb />
      <SideBarPageWeb />
      
      <main className="pageweb__main">
        <Outlet />
      </main>
    </div>
  );
}