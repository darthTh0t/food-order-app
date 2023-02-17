import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <h1 className="text-rose-500 font-semibold text-5xl py-4">Oops!</h1>
      <p className="text-3xl font-bold py-3">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="text-2xl font-medium py-2">
          Page {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
