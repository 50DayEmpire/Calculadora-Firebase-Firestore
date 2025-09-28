import { useNavigate } from "react-router";

import { useSelector } from "react-redux";

import { useEffect } from "react";
import { Outlet } from "react-router";

const AuthRouter = () => {
  const { uid, checking } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!checking && !uid) {
      navigate("/login", { replace: true });
    }
  }, [checking, uid, navigate]);

  return <Outlet />;
};

export default AuthRouter;
