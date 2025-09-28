import { Routes, Route, useNavigate } from "react-router";
import LoginScreen from "./pages/LoginScreen.jsx";
import RegisterScreen from "./pages/RegisterScreen.jsx";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/config-firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { finishChecking, login } from "./actions/auth.js";
import { useEffect } from "react";
import AppScreen from "./pages/AppScreen.jsx";
import AuthRouter from "./routers/AuthRouter.jsx";
import { loadData } from "./helpers/loadData.js";
import { leerRegistros } from "./actions/nomina.js";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        navigate("/app", { replace: true });
        const nominaData = await loadData(user.uid);
        dispatch(leerRegistros(nominaData));
      } else {
        dispatch(finishChecking());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route element={<AuthRouter />}>
          <Route path="/app" element={<AppScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
