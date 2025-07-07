import React from "react";

function NotFound() {
  return (
    <div className="w-[100vw] flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-9xl text-secondary2-100 font-[monospace]">
        404 Not Found
      </h1>
      <p className="text-2xl text-secondary2-100">
        oops... looks like the page you were searching for does not exist
      </p>
    </div>
  );
}

export default NotFound;
