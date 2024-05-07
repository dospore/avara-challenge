import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Landing from "./pages/Landing";

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
        element: <Landing />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
