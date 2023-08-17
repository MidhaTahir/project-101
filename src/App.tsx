import { Navigate, Route, Routes } from "react-router-dom";
import { Offline, Online } from "react-detect-offline"; //https://www.npmjs.com/package/react-detect-offline //Cannot find module 'react-detect-offline' or its corresponding type declarations. // npm install --save-dev @types/react-detect-offline
import { defaultRoutes } from "./routes";
import { RouteTypes } from "./global/types/routeTypes";
import { UserRole } from "./global/types/userRoles";
import "./App.css";
import NoInternetPage from "./pages/NoInternetPage";

function getGuardedRoute(
  component: React.ReactNode | null,
  isRouteAccessible = false,
  redirectUrl = ""
) {
  console.log({ isRouteAccessible });
  if (isRouteAccessible) return component;
  return <Navigate to={redirectUrl} replace />;
}

function App() {
  const userRole = UserRole.ADMIN;

  return (
    <>
      <Online>
        <Routes>
          {defaultRoutes.map((route) => {
            return (
              <Route
                key={route.name}
                path={route.path}
                element={
                  route.info === RouteTypes.PRIVATE ? (
                    getGuardedRoute(
                      <route.element />,
                      route.userRole.includes(userRole),
                      route.redirectUrl
                    )
                  ) : route.info === RouteTypes.PUBLIC ? (
                    <route.element />
                  ) : null
                }
              />
            );
          })}
        </Routes>
      </Online>
      <Offline>
        <NoInternetPage />
      </Offline>
    </>
  );
}

export default App;
