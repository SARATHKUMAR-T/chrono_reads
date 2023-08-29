"use client";
import Contact from "@sections/Contact";
import Hero from "@sections/Hero";
import HowItWorks from "@sections/HowItWorks";
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
    <div className=" w-full  bg-white min-h-screen  h-full text-black overflow-hidden">
      <Hero />
      <HowItWorks />
      <Contact />
    </div>
  );
}

export default LandingPage;
