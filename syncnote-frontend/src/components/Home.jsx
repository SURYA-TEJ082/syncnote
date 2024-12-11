import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Nav />
      </div>
      <div className="bg1">
        <div className="container" style={{ opacity: 0.9 }}>
          <p className="text-4xl font-semibold text-black flex justify-center items-center">
            <span className="text-black">Welcome to</span>{" "}
            <span className="homep">SyncNote</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
