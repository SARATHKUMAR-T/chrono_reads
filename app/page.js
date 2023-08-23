"use client";
import PasswordModal from "@components/PasswordModal";
import SignupModal from "@components/SignupModal";
import LoginModal from "@components/loginModal";
import { useSelector } from "react-redux";

function LandingPage() {
  const { signupForm, loginForm, forgotForm } = useSelector(
    state => state.form
  );

  if (signupForm) {
    return <SignupModal />;
  }
  if (forgotForm) {
    return <PasswordModal />;
  }

  if (loginForm) {
    return <LoginModal />;
  }

  return (
    <div className="z-10 w-full mt-16 min-h-screen h-full text-black">
      landingpage
    </div>
  );
}

export default LandingPage;
