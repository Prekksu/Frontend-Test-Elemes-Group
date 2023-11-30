import React from "react";
import HeroPic from "./HeroPic";

const Hero = () => {
	return (
		<div className="w-[1440px] h-[653px] relative mx-auto flex items-center justify-around">
			<div className="w-[482px] h-[286.92px] flex-col gap-8 inline-flex">
				<div className="self-stretch text-lime-500 text-[64px] font-medium font-['Rubik'] leading-[64px]">
					Good Food Us Good Mood
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
			<div className="">
				<HeroPic />
			</div>
		</div>
	);
};

export default Hero;
