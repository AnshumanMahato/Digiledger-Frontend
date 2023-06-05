import useUserContext from "../hooks/useUserContext";
import Dashboard from "./Dashboard";
import Home from "./Home";

function Root() {
  const { user } = useUserContext();

  if (!user) return <Home />;
  return <Dashboard />;
}

export default Root;
