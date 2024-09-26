import React, { useEffect, useRef } from "react";
import "./products.css";
import { IoCartOutline } from "react-icons/io5";
import Skeleton from "../skeleton/skeleton";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/api/slice/cartSilice";
const Products = ({ data, isLoading, brands, colors }) => {
  const link = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const clickLink = () => link.current.click();
    setTimeout(clickLink, 10);
    // return () => {
    //   clearTimeout(clickLink);
    // };
  }, [location.pathname]);

  return (
    <>
      <a href="#products" className="hidden" ref={link}></a>
      <div className=" w-full  lg:gap-4 grid grid-cols-1   sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 gap-3 container mx-auto">
        {data?.map((el) => {
          return (
            <div key={el.id} className=" ">
              <div className="bg-[#F4F4F4] p-[6px] flex items-center justify-center mb-[20px]">
                <img
                  className="w-[168px] h-[185px] object-contain bg-[#F4F4F4] "
                  src={el.image_url}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 pr-4">
                <Link to={`/products/${el.id}`}>
                  <p className="text-[#190D26] text-[19px] font-[600]">
                    {el.name}
                  </p>
                </Link>
                <p className="text-[16px] text-[#190D26] font-[400]">
                  {el.description.slice(1, 42)}...
                </p>
                <div className="flex gap-2">
                  {el?.color_options?.map((color, exs) => (
                    <div key={exs}>
                      <button
                        className="w-[25px] border rounded-full h-[25px]"
                        style={{ background: color }}
                      ></button>
                    </div>
                  ))}
                </div>
                <p className="text-[#000000] text-[21px] font-[600]">
                  ${el.price}
                </p>
                <button
                  onClick={() => dispatch(addToCart(el))}
                  className="border gap-4  py-[3px] px-[10px] text-[#fff] w-[60%] bg-[#0BA42D] flex items-center justify-center rounded-[4px]"
                >
                  <IoCartOutline className="text-[#fff]" />{" "}
                  <p className="text-[13px] text-[#fff] font-[500]">Add</p>
                </button>
              </div>
            </div>
          );
        })}
        {isLoading &&
          new Array(20).fill().map((_, idx) => <Skeleton key={idx} />)}
      </div>
    </>
  );
};

export default Products;
