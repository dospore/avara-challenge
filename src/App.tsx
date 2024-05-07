import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Race from "./pages/Race";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    // TODO error element
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Race />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
