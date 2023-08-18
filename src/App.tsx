import { Navigate, Route, Routes } from "react-router-dom";
import { Offline, Online } from "react-detect-offline"; //https://www.npmjs.com/package/react-detect-offline //Cannot find module 'react-detect-offline' or its corresponding type declarations. // npm install --save-dev @types/react-detect-offline
import { defaultRoutes } from "./routes";
import { RouteTypes } from "./global/types/routeTypes";
import { UserRole } from "./global/types/userRoles";
import "./App.css";
import NoInternetPage from "./pages/NoInternetPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setToken, setUserType } from "./redux/authSlice";
import { RootState } from "./redux/store";

function getGuardedRoute(
  component: React.ReactNode | null,
  isRouteAccessible = false,
  redirectUrl = ""
) {
  if (isRouteAccessible) return component;
  return <Navigate to={redirectUrl} replace />;
}

function App() {
  const dispatch = useDispatch();
  const userType = useSelector((state: RootState) => state.auth.userType);

  console.log(userType);

  // Auto-fill token from local storage on initial render
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUserType = localStorage.getItem("userType");
    if (token) {
      dispatch(setToken(token));
      console.log("token", token);
    }
    if (savedUserType) {
      dispatch(setUserType(savedUserType as UserRole));
      console.log("userType", savedUserType);
    }
  }, [dispatch]);

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
                      route.userRole.includes(userType),
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
