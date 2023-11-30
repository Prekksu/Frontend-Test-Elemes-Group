import React from "react";
import menu from "../assets/menu 1.svg";

const MobileMenubar = () => {
	return (
		<div className="w-[480px] h-[89px] fixed bottom-0 left-0 right-0 mx-auto flex justify-around items-center bg-white z-50">
			<div className="flex flex-col items-center">
				<img alt="menubar" className="w-[39px] h-[39px]" src={menu} />
				<div className="text-neutral-500 text-sm font-normal font-['Rubik'] leading-normal">
					Home
				</div>
			</div>
			<div className="flex flex-col items-center">
				<img alt="menubar" className="w-[39px] h-[39px]" src={menu} />
				<div className="text-neutral-500 text-sm font-normal font-['Rubik'] leading-normal">
					Promotion
				</div>
			</div>
			<div className="flex flex-col items-center">
				<img alt="menubar" className="w-[39px] h-[39px]" src={menu} />
				<div className="text-neutral-500 text-sm font-normal font-['Rubik'] leading-normal">
					Other
				</div>
			</div>
		</div>
	);
};

export default MobileMenubar;
