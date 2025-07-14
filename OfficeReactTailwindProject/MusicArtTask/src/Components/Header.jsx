import React from 'react';

const Header = (props) => (
<div className=" min-w-full min-h-[30px]  bg-[#2e0052] text-white text-sm z-50 relative" >
    <div id="headercontent" className="flex flex-row items-baseline justify-between h-full p-2 px-4">
        <a className="" herf="#" >📞912121131313</a>
        <div className="flex items-center justify-center gap-3">
            <a className="" herf="#">Get 50% off on selected items</a>
            <span className="">|</span>
            <a className="" herf="#">Shop Now</a>
        </div>
        <a className="" herf="#">{props.log}</a>

    </div>
</div>
);

export default Header;
