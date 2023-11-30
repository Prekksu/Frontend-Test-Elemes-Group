import React from "react";
import food from "../assets/Food.png";
import foodSmall from "../assets/Image Small.png";
import starFill from "../assets/favorite 4.svg";
import star from "../assets/favorite 5.svg";

const MobileHero = () => {
	return (
		<div className="w-[480px] flex justify-center mx-auto">
			<div className="w-[480px] h-[724px] flex-col justify-start items-start gap-8 inline-flex px-10">
				<div className="self-stretch text-lime-500 text-5xl font-medium font-['Rubik'] leading-[64px]">
					Good Food Us Good Mood
				</div>
				<div className="w-[412px] h-[319.16px] relative">
					<div className="w-[290px] h-[319.16px] left-0 top-0 absolute">
						<img
							className="w-[249.46px] h-[249.34px] left-[7.24px] top-[29.92px] absolute"
							src={food}
							alt="food"
						/>
					</div>

					<div className="w-[292px] h-[93px] left-[120px] top-[220px] absolute">
						<div className="w-[292px] h-[93px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[17px] shadow backdrop-blur-[11px]" />
						<div className="w-[69.30px] h-[10.66px] left-[94.70px] top-[60px] absolute">
							<div className="w-[10.66px] h-[10.66px] left-0 top-0 absolute flex-col justify-start items-start inline-flex" />{" "}
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
							alt="food"
						/>
						<div className="w-36 h-[29px] left-[95px] top-[12px] absolute text-black text-sm font-semibold font-['Open Sans'] leading-snug">
							Green Salad Tomato
						</div>
						<div className="w-[113px] h-[15px] left-[95px] top-[36px] absolute text-neutral-500 text-xs font-normal font-['Open Sans'] leading-[14px]">
							Tomato
						</div>
					</div>
				</div>
				<div className="self-stretch text-neutral-500 text-lg font-normal font-['Rubik'] leading-[29px]">
					I would think that conserving our natural resources should be a
					conservative position: Not to waste food, and not to throw away a lot
					of the food that we buy.
				</div>
				<div className="self-stretch justify-start items-start gap-4 inline-flex">
					<div className="px-[18px] py-2.5 bg-lime-500 rounded-[100px] shadow justify-start items-center gap-2.5 flex">
						<div className="text-white text-sm font-medium font-['Rubik'] leading-snug">
							Daftar Sekarang
						</div>
					</div>
					<div className="px-[18px] py-2.5 bg-zinc-100 rounded-[100px] justify-start items-center gap-2.5 flex">
						<div className="text-zinc-800 text-sm font-medium font-['Rubik'] leading-snug">
							About Us
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileHero;
