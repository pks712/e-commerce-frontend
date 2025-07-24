import React from "react";
import blogImage from "../../assets/blogImage.jpg";
import { IoMdTime } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogSlider = () => {
  return (
    <div className="blogItem w-[300px] ml-5 group">
      <div className="imageWrapper  overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={blogImage}
          className="w-full h-auto transition-all group-hover:scale-110"
        ></img>
        <span className="flex items-center justify-center text-white absolute bottom-[10px] left-[10px] z-50 bg-red-500 rounded-md p-1 text-[14px]">
          <IoMdTime />
          <span className="ml-1"> 5 Apirl 2025</span>
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[18px] font-[600] text-black link cursor-pointer">
          Explore sustainable living through cutting-edge prefabricated homes
        </h2>
        <p className="text-[12px] font-[400] text-gray-500 mb-4">
          Give lady of they such they sure it. Me contained explained my
          education. Vulgar as hearts by g...
        </p>

        <Link
          to="/"
          className="link cursor-pointer font-[400] text-gray-700 flex items-center gap-1"
        >
          Read More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogSlider;
