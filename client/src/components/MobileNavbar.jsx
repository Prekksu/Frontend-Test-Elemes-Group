import React from "react";
import logo from "../assets/elemes logo.png";

const MobileNavbar = () => {
	return (
		<div className="w-[480px] h-[89px] flex justify-around items-center mx-auto">
			<img className="w-[150px] h-9 left-[33px]" src={logo} alt="logo" />
			<div className="w-[147px] h-[42px] bg-lime-500 rounded-[100px] text-white text-sm font-medium font-['Rubik'] leading-snug text-center flex items-center justify-center">
				Daftar Sekarang
			</div>
		</div>
	);
};

export default MobileNavbar;
