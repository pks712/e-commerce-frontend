import React from "react";
import product1 from "../../assets/products1.jpg";
import product11 from "../../assets/product11.jpg";
import "./productItem.css";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ProductItemViewList = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div className="productItem">
      <div className="border-2 border-[rgba(0,0,0,0.1)] rounded-md ml-1 shadow-md bg-white overflow-hidden flex flex-row items-center">
        {/* Image Section */}
        <div className="imgWrapper w-[25%] min-w-[150px] overflow-hidden relative group">
          <Link to="/">
            <img
              src={product1}
              className="w-full h-[300px]  absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              alt="product"
            />
            <img src={product11} className="w-full h-[300px] " alt="product" />
          </Link>

          <span className="discount absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-md p-1">
            10%
          </span>

          <div className="action absolute top-[15px] right-[10px] z-50 flex flex-col items-center gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 ease-in-out transition-all">
            <Button
              className="!w-[30px] !h-[30px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white"
              sx={{ minWidth: "unset" }}
            >
              <IoMdHeartEmpty />
            </Button>
            <Button
              className="!w-[30px] !h-[30px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white"
              sx={{ minWidth: "unset" }}
            >
              <IoIosGitCompare />
            </Button>
            <Button
              className="!w-[30px] !h-[30px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white"
              sx={{ minWidth: "unset" }}
            >
              <AiOutlineFullscreen />
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <div className="info w-[75%] p-4 px-8 bg-white flex flex-col justify-between">
          <div>
            <h6 className="text-[15px]">
              <Link to="/inkCLAFOUTIS" className="link text-gray-500">
                inkCLAFOUTIS
              </Link>
            </h6>
            <h3 className="text-[18px] font-[500] mt-2">
              <Link to="/inkMen" className="link">
                inkMen Alias-N Regular ...
              </Link>
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <Box
            sx={{ width: 200, display: "flex", alignItems: "center", mt: 1 }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => setValue(newValue)}
              onChangeActive={(event, newHover) => setHover(newHover)}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>

          <div className="flex items-center gap-4 mt-2">
            <span className="line-through text-gray-500 text-[14px]">
              $58.00
            </span>
            <span className="text-red-500 font-bold">$55.00</span>
          </div>
          <Button
            sx={{
              backgroundColor: "#ff5252",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#000",
                boxShadow: `
  0 2px 6px rgba(0, 0, 0, 0.4),
  0 2px 12px rgba(0, 0, 255, 0.3),
  0 2px 18px rgba(255, 105, 180, 0.3),
  0 2px 24px rgba(255, 0, 0, 0.2)
`,
              },
              width: "250px",
              marginTop: "10px",
            }}
          >
            <MdOutlineShoppingCart className="mr-5 text-[20px]"/> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemViewList;
