import React from "react";
import Login from "../login/Login";
import loginImage from "../../Assets/Images/minecraftImage.png";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={`${styles.main} container`}>
      <div className={styles.grid1}>
        <Login />
      </div>
      <div className={styles.grid2}>
        <img
          src={loginImage}
          alt=""
          style={{ margin: "0 auto", display: "block" }}
        ></img>{" "}
      </div>
    </div>
  );
};
export default Main;
