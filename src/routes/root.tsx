import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect } from "react";

function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/auth");
  }, [navigate]);
  
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}

export default Root;
