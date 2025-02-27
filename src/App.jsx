import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ],
  { basename: "/Portfolio" }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
