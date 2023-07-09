import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Logout from "./pages/Logout";
import { TransactionQueryProvider } from "./contexts/TransactionContext";
import Analytics from "./pages/Analytics";
import Protected from "./components/Protected";
import Configure from "./pages/Configure";
import Settings from "./pages/Settings";
import { UtilityProvider } from "./contexts/UtilityContext";

const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <UtilityProvider>
          <Layout />
        </UtilityProvider>
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "logout", element: <Logout /> },
      {
        path: "configure",
        element: (
          <Protected>
            <Configure />
          </Protected>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "transactions",
        element: (
          <Protected>
            <TransactionQueryProvider>
              <Transactions />
            </TransactionQueryProvider>
          </Protected>
        ),
      },
      {
        path: "analytics",
        element: (
          <Protected>
            <Analytics />
          </Protected>
        ),
      },
      {
        path: "settings",
        element: (
          <Protected>
            <Settings />
          </Protected>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
