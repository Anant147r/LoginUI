import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <form>
        <div className={`${styles.userName} ${styles.inputTag}`}>
          <div className={`${styles.tag}`}>Email</div>
          <div>
            <input
              type="email"
              className={`${styles.input} form-control`}
            ></input>
          </div>
        </div>
        <div className={`${styles.password} ${styles.inputTag}`}>
          <div className={`${styles.tag}`}>Password</div>
          <div>
            <input
              type="password"
              className={`${styles.input} form-control`}
            ></input>
          </div>
        </div>
        <div
          className={`${styles.loginButton} ${styles.inputTag}`}
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            // border: "1px solid black",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: ".1fr 1fr",
              //   border: "1px solid black",
              width: "7rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                // marginTop: "1rem",
                display: "inline-block",
              }}
            >
              <input type="checkbox"></input>
            </div>
            <div
              style={{
                display: "inline-block",
                fontSize: ".8rem",
                marginLeft: ".2rem",
                marginTop: ".1rem",
              }}
            >
              Remember Me{" "}
            </div>
          </div>

          <button
            type="button"
            className="btn"
            style={{
              //   border: "1px solid red",
              backgroundColor: "#4886FF",
              color: "white",
              marginTop: "1rem",
              maxWidth: "10rem",
            }}
          >
            Login
          </button>
        </div>
      </form>
      <div
        className={`${styles.extraOptions} ${styles.inputTag}`}
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          fontSize: ".8rem",
          marginTop: "1rem",
        }}
      >
        <div className={`${styles.hover}`} style={{ color: "#4886ff" }}>
          Register Now
        </div>
        <div className={`${styles.hover}`}>Forgot Password</div>
      </div>
      <div className={`${styles.inputTag}`} style={{ marginTop: "2rem" }}>
        <hr
          className={`${styles.extraOptions} ${styles.inputTag}`}
          style={{ width: "40%", display: "inline-block" }}
        ></hr>{" "}
        <span>or</span>
        <hr
          className={`${styles.extraOptions} ${styles.inputTag}`}
          style={{ width: "40%", display: "inline-block" }}
        ></hr>
      </div>
      <div className={`${styles.otherLoginOptions} ${styles.inputTag}`}>
        <div
          class="input-group flex-nowrap"
          style={{ marginTop: "1rem", color: "white" }}
        >
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">
              <i class="fab fa-facebook"></i>
            </span>
          </div>
          <button
            type="text"
            class="form-control"
            placeholder="Facebook"
            aria-label="Facebook"
            aria-describedby="addon-wrapping"
            style={{ backgroundColor: "#3A5999", color: "white" }}
          >
            Facebook
          </button>
        </div>

        <div
          class="input-group flex-nowrap"
          style={{ marginTop: "1rem", color: "white" }}
        >
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">
              <i class="fab fa-linkedin-in"></i>
            </span>
          </div>
          <button
            type="text"
            class="form-control"
            placeholder="LinkedIn"
            aria-label="LinkedIn"
            aria-describedby="addon-wrapping"
            style={{ backgroundColor: "#06ABED", color: "white" }}
          >
            LinkedIn
          </button>
        </div>
        <div
          class="input-group flex-nowrap"
          style={{ marginTop: "1rem", color: "white" }}
        >
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">
              <i class="fab fa-google"></i>
            </span>
          </div>
          <button
            type="text"
            class="form-control"
            placeholder="Google"
            aria-label="Google"
            aria-describedby="addon-wrapping"
            style={{ backgroundColor: "#F54133", color: "white" }}
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
