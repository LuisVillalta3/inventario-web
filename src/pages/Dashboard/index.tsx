import { useLayoutStore } from "@/store";
import React, { useEffect } from "react";

const Dashboard = () => {
  const setAppTitle = useLayoutStore((state) => state.setAppTitle);

  useEffect(() => setAppTitle("Dashboard"), [setAppTitle]);

  return <div>Dashboard</div>;
};

export default Dashboard;
