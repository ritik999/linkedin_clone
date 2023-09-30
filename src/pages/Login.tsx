import React, { useState } from "react";
import "./login.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { storeDetail } from "../redux/reducer";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const dispatch = useDispatch();

  const register = (): void => {
    if (!name) alert("Please enter a full name");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("start update");
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          console.log("run dispatch update");
          const registerDetail = {
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: name,
            photoURL: profilePic,
          };

          dispatch(storeDetail(registerDetail));
        });
      })
      .catch((err) => alert(err.message));
  };

  const loginToApp = (e:React.MouseEvent): void => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const registerDetail = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
          photoUrl: userCredential.user.photoURL,
        };

        dispatch(storeDetail(registerDetail));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt="linkedin"
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="full name required if registering"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optional)"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
