import React from "react";

const AccountDetails = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl text-cyan-700">
          Hello, {sessionStorage.getItem("firstName")}
        </h1>
      </div>
    </>
  );
};

export default AccountDetails;
