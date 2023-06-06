import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "signin", element: <Signup /> },
      { path: "logout" },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
