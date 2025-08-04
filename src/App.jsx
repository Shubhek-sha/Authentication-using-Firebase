import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

import Header from "./Components/Header";
import Home from "./Components/Home";

import { AuthProvider } from "./context/AuthContext.jsx";

import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
      {routesArray}
    </AuthProvider>
  );
}

export default App;
