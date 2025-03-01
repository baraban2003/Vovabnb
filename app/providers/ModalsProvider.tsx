'use client';

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import RentModal from "../components/modals/RentModal";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <RentModal />
    </>
  );
}

export default ModalsProvider;