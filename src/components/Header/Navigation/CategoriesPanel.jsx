import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseOutline } from "react-icons/io5";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CategoryCollapse from "../../CategroyCollapse";

function CategoriesPanel(props) {


  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <h2 className=" flex items-center ml-4 gap-11 font-bold mt-5 mb-4">
        Shop By Categories{" "}
        <IoCloseOutline
          className="text-2xl cursor-pointer hover:bg-gray-400 rounded"
          onClick={() => props.OpenCategoriesPanel(false)}
        />
      </h2>

     <CategoryCollapse></CategoryCollapse>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenPanel} onClose={() => props.OpenCategoriesPanel(false)}>{DrawerList}</Drawer>
    </div>
  );
}

export default CategoriesPanel;
