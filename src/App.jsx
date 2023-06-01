import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
