import React from 'react';
import MainImage from '../asset/Maskgroup.png';
import MainLogo from '../asset/Group36.png';
import MainBack from '../asset/background.jpg';

const MainPage = () => {
  return (
    <div className="mainsec bg-cover bg-center bg-no-repeat h-screen w-full flex gap-24" style={{ backgroundImage: `url(${MainBack})` }}>
      <div className="main-img flex justify-center items-center flex-1">
        <img src={MainImage} alt="Main Background" className="w-[1000px] h-[930px]" />
      </div>
      <div className="vertical-navbar w-[100px] bg-black flex flex-col items-center h-[600px] p-5 rounded-2xl pt-20">
        <img src={MainLogo} alt="Main Logo" className="mb-12" />
        <a href="#link1" className="text-white no-underline py-2.5 w-full text-center pt-12">Goals</a>
        <a href="#link2" className="text-white no-underline py-2.5 w-full text-center pt-12">About Us</a>
        <a href="#link3" className="text-white no-underline py-2.5 w-full text-center pt-12">Product</a>
        <a href="#link4" className="text-white no-underline py-2.5 w-full text-center pt-12">Contact</a>
      </div>
    </div>
  );
}

export default MainPage;
