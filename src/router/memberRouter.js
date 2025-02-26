import React, { Suspense, lazy } from "react";

const Loading = <div>Loading</div>;
const Login = lazy(() => import("../pages/member/LoginPages"));

const memberRouter = () => {
  return [
    {
      path: "login",
      Element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
      ),
    },
  ];
};

export default memberRouter;
