import React from "react";
import food from "../assets/Food.png";
import foodSmall from "../assets/Image Small.png";
import starFill from "../assets/favorite 4.svg";
import star from "../assets/favorite 5.svg";

const HeroPic = () => {
	return (
		<div className="w-[651px] h-[653px] relative">
			<div className="w-[480px] h-[530.88px] left-[109px] top-[66px] absolute">
				<div className="w-[480px] h-[530.88px] left-0 top-0 absolute" />
				<img
					className="w-[412.90px] h-[414.75px] left-[11.98px] top-[49.77px] absolute"
					src={food}
					alt="food"
				/>
			</div>
			<div className="w-[292px] h-[93px] left-0 top-[466px] absolute">
				<div className="w-[292px] h-[93px] left-0 top-0 absolute rounded-[17px] shadow backdrop-blur-[11px]" />
				<div className="w-[69.30px] h-[10.66px] left-[94.70px] top-[60px] absolute">
					<img
						src={starFill}
						alt="star"
						className="w-[10.66px] h-[10.66px] left-0 top-0 absolute flex-col justify-start items-start inline-flex"
					/>
					<img
						src={starFill}
						alt="star"
						className="w-[10.66px] h-[10.66px] left-[14.66px] top-0 absolute flex-col justify-start items-start inline-flex"
					/>
					<img
						src={starFill}
						alt="star"
						className="w-[10.66px] h-[10.66px] left-[29.32px] top-0 absolute flex-col justify-start items-start inline-flex"
					/>
					<img
						src={starFill}
						alt="star"
						className="w-[10.66px] h-[10.66px] left-[43.98px] top-0 absolute flex-col justify-start items-start inline-flex"
					/>
					<img
						src={star}
						alt="star"
						className="w-[10.66px] h-[10.66px] left-[58.64px] top-0 absolute flex-col justify-start items-start inline-flex"
					/>
				</div>
				<img
					className="w-[53px] h-[53px] left-[23px] top-[18px] absolute"
					src={foodSmall}
					alt="foodSmall"
				/>
				<div className="w-36 h-[29px] left-[95px] top-[12px] absolute text-black text-sm font-semibold font-['Open Sans'] leading-snug">
					Green Salad Tomato
				</div>
				<div className="w-[113px] h-[15px] left-[95px] top-[36px] absolute text-neutral-500 text-xs font-normal font-['Open Sans'] leading-[14px]">
					Tomato
				</div>
			</div>
		</div>
	);
};

export default HeroPic;
