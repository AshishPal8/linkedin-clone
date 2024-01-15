import React, { useState } from "react";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Enter your name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="grid place-items-center mx-auto py-24">
      <img
        className="object-contain my-5 h-16"
        src="https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG5.png"
        alt="Linkedin Logo"
      />
      <form className="flex flex-col">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 w-80 text-lg mb-2 rounded border border-black pl-2"
          type="text"
          placeholder="Full Name"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          className="w-80 h-12 text-lg mb-2 rounded border border-black pl-2"
          type="text"
          placeholder="Profile Pic (Optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-80 h-12 text-lg mb-2 rounded border border-black pl-2"
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-80 h-12 text-lg mb-2 rounded border border-black pl-2"
          type="password"
          placeholder="Password"
        />
        <button
          className="w-80 h-12 text-lg text-white bg-[#00598C] rounded "
          onClick={loginToApp}
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Not a member{" "}
        <span className="text-[#0177b7] cursor-pointer" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
