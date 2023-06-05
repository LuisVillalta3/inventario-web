import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Tooltip } from "@mui/material";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { useLayoutStore } from "@/store";

const menuOptions = [
  {
    icon: <HomeIcon fontSize="large" />,
    label: "Inicio",
  },
  {
    icon: <GroupIcon fontSize="large" />,
    label: "Proveedores",
  },
  {
    icon: <PersonIcon fontSize="large" />,
    label: "Empleados",
  },
  {
    icon: <ApartmentIcon fontSize="large" />,
    label: "Bodegas",
  },
  {
    icon: <InventoryIcon fontSize="large" />,
    label: "Productos",
  },
];

const AppAside = () => {
  const location = useLocation();
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);

  return (
    <nav
      className={classNames({
        "navbar-open": isSidebarOpen,
      })}
    >
      <div
        className={classNames("menu-items", {
          "menu-items-no--collapsed": isSidebarOpen,
        })}
      >
        {menuOptions.map(({ icon, label }) => (
          <Tooltip title={label} key={label} placement="right">
            <Button
              className={classNames({
                current: location.pathname === "/" && label === "Inicio",
              })}
            >
              {icon}
              <p>{label}</p>
            </Button>
          </Tooltip>
        ))}
      </div>
      <Tooltip title="Configuración" key="Configuración" placement="right">
        <Button className="config-btn">
          <SettingsIcon fontSize="large" />
          <p>Configuración</p>
        </Button>
      </Tooltip>
    </nav>
  );
};

export default AppAside;
