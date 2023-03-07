import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/index.module.css";
import { AwesomeButton } from "react-awesome-button";

export default function Login() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz Taker: Login</title>
      </Head>

      <main className={styles.login}>
        <h1>Login Page</h1>
        <p>Accepted email tags are @email.com, @gmail.com, @yahoo.com</p>
        <p>Password must be 6 characters long</p>
        <div>
          <p>Email</p>
          <input
            type="text"
            size="45"
            value={"email"}
            placeholder="email address"
          
            className={styles.input}
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="password"
            size="45"
            value={"password"}
            placeholder="password"
            //onChange={(event) => setPassword(event.target.value)}
            className={styles.input}
            // onKeyUp={handleKeyDown}
          />
        </div>

        <p className={styles.login_boxes}>
          <input
            type="checkbox"
            value={"newUser"}
            //onChange={() => setNewUser(!newUser)}
            className={styles.cbox}
          />{" "}
          New User
        </p>
        
        {/* Uncomment this to have the option to log in as a professor
        <p className={styles.login_boxes}>
          <input
            type="checkbox"
            value={prof}
            onChange={() => setProf(!prof)}
            className={styles.cbox}
          />{" "}
          Professor
        </p> */}
      </main>
    </div>
  );
}
