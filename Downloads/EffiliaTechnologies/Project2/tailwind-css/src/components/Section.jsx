import React from 'react';
import groupImage from '../asset/Group23.png';
import groupImage2 from '../asset/Group20.png';

const Section2 = () => {
  return (
    <div className="flex justify-center bg-[#D3D9D4] text-center relative">
      <div className="relative h-[500px] w-[430px] pt-[130px]">
        <img 
          src={groupImage} 
          alt="Group 23" 
          className="absolute w-[44.12px] h-[54px] left-[-30px] top-[90px]" 
        />
        <h1 className="text-[#124E66] text-left text-4xl font-medium">
          Vision and Mission
        </h1>
        <h1 className="text-[#124E66] text-left text-4xl font-medium">
          Mission <span className="font-bold">Comfort</span>
        </h1>
        <h1 className="text-[#124E66] text-left text-4xl font-medium">
          main line <span className="font-bold">Energy</span>
        </h1>
        <h1 className="text-[#124E66] text-left text-4xl font-medium">
          main <span className="font-bold">Sustainability</span>
        </h1>
        <img 
          src={groupImage2} 
          alt="Group 20" 
          className="absolute w-[44.12px] h-[54px] top-[330px] left-[250px]" 
        />
      </div>
      <div className="h-[500px] w-[430px] pt-[150px]">
        <p className="text-left text-[#212A31] font-normal">
          <span className="font-bold">Design-</span> Ensure to blend aesthetics, requirements of happy living and working with comfort and optimum use of space
        </p>
        <p className="text-left text-[#212A31] font-normal">
          <span className="font-bold">Develop-</span> Ensure seamless delivery with a plan on ground to suit the requirements with happy stakeholders, 'AT ALL TIMES
        </p>
        <p className="text-left text-[#212A31] font-normal">
          <span className="font-bold">Deliver-</span> Precision with focusing with attention to details, compliance to norms and regulations and adhere to timelines and achieving creation with efficiency
        </p>
      </div>
    </div>
  );
}

export default Section2;
