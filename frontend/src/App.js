// import { useState } from "react";
// import { useRouter } from "next/router";

export default function Login() {
  

  return (
    <div>
      <main>
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
            // onKeyUp={handleKeyDown}
          />
        </div>

        <p>
          <input
            type="checkbox"
            value={"newUser"}
            //onChange={() => setNewUser(!newUser)}
          />
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
