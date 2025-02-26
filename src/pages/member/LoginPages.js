import React from "react";
import BasicMenu from "../../components/menus/BasicMenu";

const LoginPages = () => {
  return (
    <div className="fixed top-0 left-0 z-{1055} flex flex-col h-full w-full">
      <BasicMenu />
      <div className="flex flex-wrap w-full h-full justify-center items-center border-2">
        <div className="text-2xl">로그인 페이지</div>
      </div>
    </div>
  );
};

export default LoginPages;
