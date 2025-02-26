import React from "react";

const initState = {
  email: "",
  pw: "",
};

const LoginComponent = () => {
  const [loginParam, setLoginParam] = useState(initState);
  return <div>LoginComponent</div>;
};

export default LoginComponent;
