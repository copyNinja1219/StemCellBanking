import React from "react";
import Content from "./Content";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const PatientDashboard = () => {
  return (
    <div className="pt-14 px-48 flex mb-14 ">
      {/* <Profile /> */}
      <Sidebar />
      <Content />
    </div>
  );
};

export default PatientDashboard;
