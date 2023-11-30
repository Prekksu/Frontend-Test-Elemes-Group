import React from "react";

const Category = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="w-[1440px] h-[573px] relative">
				<div className="w-[1440px] h-[573px] left-0 top-0 absolute bg-white" />
				<div className="w-[1333px] h-[215px] p-2.5 left-[107px] top-[197px] absolute justify-start items-start gap-2.5 inline-flex">
					<div className="h-[175px] px-[81px] py-[30px] bg-lime-50 rounded-lg justify-start items-start gap-2.5 flex">
						<div className="grow shrink basis-0 h-[115px] relative">
							<div className="w-[47px] h-[52px] left-[9.99px] top-0 absolute">
								<div className="w-[14.93px] h-[23.64px] left-[6.41px] top-[7.09px] absolute"></div>
							</div>
							<div className="w-[68px] left-0 top-[73px] absolute text-center text-zinc-800 text-base font-medium font-['Rubik'] leading-snug">
								Cupcake
							</div>
							<div className="w-[57.85px] left-[5.08px] top-[99px] absolute text-center text-zinc-800 text-sm font-normal font-['Rubik'] leading-none">
								22 Items
							</div>
						</div>
					</div>
					<div className="h-[195px] pl-px bg-sky-100 rounded-lg justify-center items-center flex">
						<div className="w-[229px] h-[229px] relative">
							<img
								className="w-[229px] h-[229px] left-0 top-0 absolute"
								src="https://via.placeholder.com/229x229"
							/>
							<div className="w-[47px] h-[47px] left-[89.99px] top-[31px] absolute">
								<div className="w-[23.51px] h-[27.77px] left-[4.32px] top-[12.82px] absolute"></div>
							</div>
							<div className="w-[68px] left-[80px] top-[104px] absolute text-center text-zinc-800 text-base font-medium font-['Rubik'] leading-snug">
								Pizza
							</div>
							<div className="w-[57.85px] left-[85.01px] top-[130px] absolute text-center text-zinc-800 text-sm font-normal font-['Rubik'] leading-none">
								25 Items
							</div>
						</div>
					</div>
					<div className="h-[173px] px-[81px] py-[30px] bg-indigo-50 rounded-lg justify-start items-start gap-2.5 flex">
						<div className="grow shrink basis-0 h-[113px] relative">
							<div className="w-[47px] h-[47px] left-[9px] top-0 absolute">
								<div className="w-[40.59px] h-8 left-[1.03px] top-[14.95px] absolute"></div>
							</div>
							<div className="w-[68px] left-0 top-[71px] absolute text-center text-zinc-800 text-base font-medium font-['Rubik'] leading-snug">
								Kebab
							</div>
							<div className="w-[57.85px] left-[5.08px] top-[97px] absolute text-center text-zinc-800 text-sm font-normal font-['Rubik'] leading-none">
								12 Items
							</div>
						</div>
					</div>
					<div className="h-[172px] px-[81px] py-[30px] bg-red-50 rounded-lg justify-start items-start gap-2.5 flex">
						<div className="grow shrink basis-0 h-28 relative">
							<div className="w-[47px] h-[47px] left-[10px] top-0 absolute">
								<div className="w-[25.59px] h-8 left-[2.18px] top-[4.35px] absolute"></div>
							</div>
							<div className="w-[68px] left-0 top-[70px] absolute text-center text-zinc-800 text-base font-medium font-['Rubik'] leading-snug">
								Salmon
							</div>
							<div className="w-[57.85px] left-[5.08px] top-[96px] absolute text-center text-zinc-800 text-sm font-normal font-['Rubik'] leading-none">
								22 Items
							</div>
						</div>
					</div>
					<div className="w-[243px] h-[172px] px-[81px] py-[30px] bg-lime-50 rounded-lg justify-center items-center flex">
						<div className="w-[81px] h-28 relative">
							<div className="w-[51.84px] h-[47px] left-[11.03px] top-0 absolute">
								<div className="w-[42.41px] h-8 left-[4.71px] top-[2.14px] absolute"></div>
							</div>
							<div className="w-[81px] left-0 top-[70px] absolute text-center text-zinc-800 text-base font-medium font-['Rubik'] leading-snug">
								Doughnut
							</div>
							<div className="w-[63.81px] left-[5.60px] top-[96px] absolute text-center text-zinc-800 text-sm font-normal font-['Rubik'] leading-none">
								11 Items
							</div>
						</div>
					</div>
					<div className="h-[172px] px-[81px] py-[30px] bg-lime-50 rounded-lg" />
				</div>
				<div className="w-[730px] left-[116px] top-[64.22px] absolute">
					<span className="text-zinc-800 text-[38px] font-medium font-['Rubik'] leading-[50px]">
						Browser Our Category <br />
					</span>
					<span className="text-lime-500 text-[38px] font-medium font-['Rubik'] leading-[50px]">
						Receipt
					</span>
				</div>
			</div>
		</div>
	);
};

export default Category;
