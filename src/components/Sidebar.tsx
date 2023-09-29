import React from "react";
import Avatar from "@mui/material/Avatar";
import "./sidebar.css";

const Sidebar = () => {

  const recentItem=(topic:string):React.ReactElement=>(
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjA3NzQ4Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="gradient"
        />
        <Avatar className="sidebar_avatar" />
        <h2>Ritik Upadhyay</h2>
        <h4>ritik.ritik11@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNumber">2500</p>
        </div>
        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statNumber">3500</p>
        </div>
      </div>

      <div className="sidebar_button">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engering')}
        {recentItem('developer')}
      </div>
    </div>
  );
};

export default Sidebar;
