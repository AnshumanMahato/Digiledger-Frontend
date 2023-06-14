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
import {
  getCurrentMonthStats,
  getTransactions,
} from "./services/transactionServices";
import { TransactionQueryProvider } from "./contexts/TransactionContext";

const dashboardLoader = async () => {
  const limit = 5,
    sort = "-timestamp";
  const { docs: transactions } = await getTransactions({ limit, sort });
  const { data: monthlyStats } = await getCurrentMonthStats();
  return { transactions, monthlyStats };
};

const router = createBrowserRouter([
  {
    element: <Layout />,
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
        path: "dashboard",
        loader: dashboardLoader,
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: (
          <TransactionQueryProvider>
            <Transactions />,
          </TransactionQueryProvider>
        ),
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
