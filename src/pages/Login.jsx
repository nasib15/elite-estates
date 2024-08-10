/* eslint-disable react/no-unescaped-entities */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaGithub } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";

export function Login() {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signInUser(email, pass)
      .then(() => {
        toast.success("User logged in successfully");
        return;
      })
      .catch(async (error) => {
        console.log(error);
        await setLoginError(error.message);
        await toast.error(loginError);
        return;
      });
  };

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then(() => {
        console.log("User logged in successfully");
        return;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="flex justify-center mt-6"
    >
      <Helmet>
        <title>Login | Elite Estates</title>
      </Helmet>
      <Card className="shadow-xl p-14" color="transparent" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to login.
        </Typography>
        <form
          onSubmit={handleSignIn}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type={showPassword ? "text" : "password"}
              name="pass"
              size="lg"
              icon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              }
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="my-4 flex justify-between items-center">
            <p>Don't Have an Account?</p>
            <Link to="/register">
              <Button className="bg-[#1abc9c]" size="sm">
                Register
              </Button>
            </Link>
          </div>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="my-4 flex w-full gap-2 items-center justify-center  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
            >
              <FcGoogle className="text-2xl"></FcGoogle>Continue with Google
            </button>
          </div>
          <div>
            <button
              onClick={handleGithubSignIn}
              className="my-4 flex w-full gap-2 items-center justify-center  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
            >
              <FaGithub className="text-2xl"></FaGithub>Continue with Github
            </button>
          </div>
          <Button type="submit" className="mt-6 bg-[#1abc9c]" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
