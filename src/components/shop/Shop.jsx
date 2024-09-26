import React from "react";
import "./shop.css";
import images from "../../assets/images/GG.png";
import images1 from "../../assets/images/ger.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
const Shop = () => {
  return (
    <>
      <div className="bg-[#0D2613] w-full shop">
        <div className="container mx-auto flex items-center justify-between py-[24px]">
          <div>
            <img src={images} alt="" />
          </div>
          <div className="flex gap-3 items-center">
            <BsTelephoneForward className="text-[#fff]" />
            <p className="text-[14px] font-[500] text-[#fff]">+4904-049-950</p>
          </div>
          <div className="flex gap-3 items-center ">
            <p className="text-[14px] font-[500] text-[#fff]">
              Get 50% Off on the Selected items{" "}
            </p>
            <hr className=" w-[1px] h-[18px] bg-[#14FF00]" />
            <p className="text-[14px] font-[500] text-[#fff]">Shop now</p>
          </div>
          <div className="flex items-center gap-1">
            <select className=" outline-none bg-transparent text-[#fff]">
              <option value="">English </option>

              <option value="">Russin</option>
              <option value="">Arab</option>
              <option value="">Uzbek</option>
            </select>
            <img src={images1} alt="" />
          </div>
          <div className="flex gap-3 items-center">
            <AiOutlineGlobal className="text-[#fff]" />
            <p className="text-[14px] font-[500] text-[#fff]">Location</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
