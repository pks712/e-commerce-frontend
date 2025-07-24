import React from 'react'


const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden group rounded-lg ">
      <img src={props.img} className="group-hover:scale-110 group-hover:rotate-2 cursor-pointer " alt="ad" />
    </div>
  );
};


export default BannerBox