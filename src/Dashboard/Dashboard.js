/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../Images/logonobel.png";
import "./Dashboard.scss";

import { FaCog } from "react-icons/fa";
import logo1 from "../Images/logo.png";
import { HiOutlineFolderRemove } from "react-icons/hi";
import dashboard from '../Images/icon.png'
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const navigateRoute =(e)=>{
    let res = e.target.__reactProps$ehuk7ne43zp.name;
    console.log(res);
    navigate(res)
  }

  const dashleft = [
    { imgSrc:dashboard, title: "Dashboard", link:'/Dashboard' },

    { imgSrc: dashboard, title: "UserManagement" ,link:'/UserManagement'},

    { imgSrc: dashboard, title: "Academics", link:'/Academics' },

    { imgSrc: dashboard, title: "Notice Board" ,link:'/NoticeBoard'},

    { imgSrc: dashboard, title: "Inbox", link:'/Inbox' },
    { icons: <FaCog />, setting: "Settings" },
  ];

  const dashright = [
    { icon: <HiOutlineFolderRemove />, title: "Faculty" },
    { icon: <HiOutlineFolderRemove />, title: "Program" },
    { icon: <HiOutlineFolderRemove />, title: "Students" },
    { icon: <HiOutlineFolderRemove />, title: "Employee" },
    { icon: <HiOutlineFolderRemove />, title: "others" },
  ];
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <div className="logo" >
          <img src={logo}></img>

          <div className="text">Nobel College</div>
        </div>

        {dashleft.map((v, key) => (
          <div className="dashleft-cards" key={key}>
            <div to={v.link} className="dashleft" onClick={(e)=>navigateRoute(e)}>
              <img src={v.imgSrc} style={{paddingRight:"10px"}}></img>
              <div name ={v.link}>{v.title}</div>
            </div>
            <div className="settings">
              <div className="setting-text">{v.icons}
              <div>{v.setting}</div>
              </div>
            </div>
         
          </div>
        ))}
      </div>
      <div className="dashboard-right">
        <div className="navlinks">
          <div className="logos">
            <img src={logo1}></img>
         
          <div className="navlink">Dashboard</div>
          </div>
          <div className="navlink">
            <select className="selection">
              <option>Admin</option>
            </select>
          </div>
          <div className="navlink">Notification</div>
          <div className="navlink">UserName</div>
        </div>
        <div className="dashright-cards">
        {dashright.map(function (a, key) {
          return (
            <div className="dashright-card" key={key}>
             
                <div className="dashright">
                  <div className="icon">{a.icon}</div>
                  <div>{a.title}</div>
                </div>
              </div>
            
          );
        })}
        </div>
      </div>
    </div>
  );
};
