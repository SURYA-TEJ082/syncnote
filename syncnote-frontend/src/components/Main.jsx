import React from "react";
import MainNav from "./MainNav";

const Main = () => {
  return (
    <div>
      <div className="hero">
        <MainNav />
      </div>
      <div className="bg1">
        <div className="container" style={{ opacity: 0.9 }}>
          <p className="text-4xl font-semibold text-black flex justify-center items-center">
            <span className="text-black">Welcome to</span> <span className="homep">SyncNote</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
