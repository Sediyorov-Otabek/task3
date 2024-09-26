import React from "react";
import img from "../../assets/images/url.png";
import img1 from "../../assets/images/url1.png";
import img2 from "../../assets/images/uurl2.png";
const New = () => {
  return (
    <>
      <div className="bg-[#0D2612]  pt-[50px] pb-[70px]">
        <div className="container">
          <div>
            <p className="text-[24px] lg:text-[30px] sm:text-[26px] font-[600] text-[#fff] text-center mb-[65px]">
              Discover news and innovations
            </p>
            <div className="grid lg:grid-cols-3 gap-4 m-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 sm:gap-3 gap-2 lg:gap-6">
              <div>
                <div>
                  <img src={img} alt="" />
                </div>
                <div className="">
                  <p className="lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] font-[500] text-[#fff] mb-[16px]  mt-[14px]">
                    Always in the Game
                  </p>
                  <p className="lg:text-[16px] md:text-[15px] text-[14px] text-[#fff]">
                    Stay ahead of the latest and greatest gaming tech, featuring
                    new releases, exclusive deals, and exciting pre-orders.
                  </p>
                  <button className="border-l-[0] border-r-[0] border-b border-t-0 text-[#fff]">
                    See More
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p className="lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] font-[500] text-[#fff] mb-[16px]  mt-[14px]">
                    Always in the Game
                  </p>
                  <p className="lg:text-[16px] md:text-[15px] text-[14px] text-[#fff]">
                    Stay ahead of the latest and greatest gaming tech, featuring
                    new releases, exclusive deals, and exciting pre-orders.
                  </p>
                  <button className="border-l-[0] border-r-[0] border-b border-t-0 text-[#fff]">
                    See More
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img src={img2} alt="" />
                </div>
                <div>
                  <p className="lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] font-[500] text-[#fff] mb-[16px] mt-[14px]">
                    Always in the Game
                  </p>
                  <p className="lg:text-[16px] md:text-[15px] text-[14px] text-[#fff]">
                    Stay ahead of the latest and greatest gaming tech, featuring
                    new releases, exclusive deals, and exciting pre-orders.
                  </p>
                  <button className="border-l-[0] border-r-[0] border-b border-t-0 text-[#fff]">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
