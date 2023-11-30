import React from "react";
import CompanyImage from "../common/assets/abc.png";
import IncImage from '../common/assets/IncImage.png'
import FastTagImage from "../common/assets/FastageImage.png"
import ElapisImage from '../common/assets/ElispseImage.png'

const dummyArr = [
  {
    companyName: FastTagImage,
  },
  {
    companyName: ElapisImage,
  },
  {
    companyName: IncImage,
  },
  {
    companyName: CompanyImage,
  },
  {
    companyName: CompanyImage,
  },
  {
    companyName: CompanyImage,
  },
];

function HomePage() {
  return (
    <div>
      <div className="pt-20  bg-[url('https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6320c6e2297b480e45fe9561_Grad-2.svg')] text-center pb-5">
        <h1 className="text-[72px] font-extrabold">
          Your browser is a mess.
          <br /> It’s not your fault.
        </h1>
        <p className="text-gray-500">
          Skeema is a new way to manage your tabs that helps declutter your
          browser and your mind.
        </p>

        <button
          type="button"
          className="bg-black text-white rounded-full p-5 mt-14 font-semibold"
        >
          Get Started
        </button>

        {/* secition 2 */}
      </div>
      <h4 className="text-center text-gray-400 my-5">AS FEATURED IN</h4>
      <div className="grid grid-cols-6 gap-2 px-12">
        {dummyArr.map((compName) => {
          return (
            <div>
              <img src={compName.companyName} alt="png" width="120" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
