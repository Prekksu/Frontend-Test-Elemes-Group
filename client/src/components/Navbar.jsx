import React from "react";
import logo from "../assets/elemes logo.png";

const Navbar = () => {
	return (
		<div className="w-[1440px] h-24 relative mx-auto flex items-center justify-between">
			<div className="left-[518.50px] top-[37px] absolute justify-end items-center gap-8 inline-flex">
				<div className="justify-start items-center flex">
					<div className="text-neutral-500 text-sm font-medium font-['Rubik'] leading-snug">
						Home
					</div>
				</div>
				<div className="justify-start items-center flex">
					<div className="text-neutral-500 text-sm font-medium font-['Rubik'] leading-snug">
						About
					</div>
				</div>
				<div className="justify-start items-center flex">
					<div className="text-neutral-500 text-sm font-medium font-['Rubik'] leading-snug">
						Promotions{" "}
					</div>
				</div>
				<div className="justify-start items-center flex">
					<div className="text-neutral-500 text-sm font-medium font-['Rubik'] leading-snug">
						Blogs
					</div>
				</div>
				<div className="text-neutral-500 text-sm font-medium font-['Rubik'] leading-snug">
					Contact Us
				</div>
			</div>
			<div className="left-[1095px] top-[27px] absolute justify-end items-center gap-6 inline-flex">
				<div className="justify-center items-center flex">
					<div className="text-zinc-800 text-sm font-medium font-['Rubik'] leading-snug">
						Masuk
					</div>
				</div>
				<div className="px-[18px] py-2.5 bg-lime-500 rounded-[100px] justify-start items-center gap-2.5 flex">
					<div className="text-white text-sm font-medium font-['Rubik'] leading-snug">
						Daftar Sekarang
					</div>
				</div>
			</div>
			<img
				className="w-[207px] h-[50px] left-[116px] top-[19px] absolute"
				alt="logo"
				src={logo}
			/>
			<div className="w-9 h-[19px] left-[703px] top-[22px] absolute">
				<div className="w-9 h-[19px] left-0 top-0 absolute bg-red-500 rounded-lg" />
				<div className="left-[9px] top-[3px] absolute text-center text-white text-[8px] font-bold font-['Open Sans'] leading-[14px]">
					HOT
				</div>
			</div>
		</div>
	);
};

export default Navbar;
