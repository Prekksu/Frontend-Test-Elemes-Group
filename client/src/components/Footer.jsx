import React from "react";

const Footer = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="w-[1239px] h-[423px] relative">
				<div className="left-[469px] top-[407px] absolute text-neutral-500 text-xs font-normal font-['Rubik'] uppercase leading-none tracking-wide">
					© 2021 Elemes id. All rights reserved
				</div>
				<div className="w-[1239px] h-[359px] left-0 top-0 absolute">
					<div className="w-[1239px] h-[359px] left-0 top-0 absolute bg-stone-50 rounded-[20px]" />
					<div className="w-[102px] h-[137px] left-[716px] top-[79px] absolute">
						<div className="left-0 top-0 absolute text-zinc-800 text-lg font-medium font-['Rubik'] leading-normal">
							About Us
						</div>
						<div className="w-[102px] h-20 left-0 top-[57px] absolute flex-col justify-start items-start gap-4 inline-flex">
							<div className="text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
								About Us
							</div>
							<div className="text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
								FAQ
							</div>
							<div className="text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
								Report Problem
							</div>
						</div>
					</div>
					<div className="w-[245px] h-[105px] left-[921px] top-[79px] absolute">
						<div className="left-0 top-0 absolute text-zinc-800 text-lg font-medium font-['Rubik'] leading-normal">
							Newsletter
						</div>
						<div className="w-[245px] h-12 left-0 top-[57px] absolute flex-col justify-start items-start gap-4 inline-flex">
							<div className="w-[245px] text-neutral-500 text-sm font-normal font-['Rubik'] leading-normal">
								Get now free 50% discount for alll products on your first order
							</div>
						</div>
					</div>
					<div className="w-[95px] h-[213px] left-[506px] top-[79px] absolute">
						<div className="left-0 top-0 absolute text-zinc-800 text-lg font-medium font-['Rubik'] leading-normal">
							Categories
						</div>
						<div className="left-0 top-[92px] absolute text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
							Pizza
						</div>
						<div className="left-0 top-[127px] absolute text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
							Kebab
						</div>
						<div className="left-0 top-[57px] absolute text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
							Cupcake
						</div>
						<div className="left-0 top-[162px] absolute text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
							Salmon
						</div>
						<div className="left-0 top-[197px] absolute text-neutral-500 text-sm font-normal font-['Rubik'] leading-none">
							Dougnut
						</div>
					</div>
					<div className="w-[136px] h-10 left-[62px] top-[239px] absolute flex-col justify-start items-start gap-8 inline-flex">
						<div className="justify-start items-start gap-2 inline-flex">
							<div className="p-2.5 bg-lime-500 rounded-3xl justify-start items-start gap-2.5 flex">
								<div className="w-5 h-5 relative" />
							</div>
							<div className="p-2.5 bg-white rounded-3xl justify-start items-start gap-2.5 flex">
								<div className="w-5 h-5 relative" />
							</div>
							<div className="p-2.5 bg-white rounded-3xl justify-start items-start gap-2.5 flex">
								<div className="w-5 h-5 relative" />
							</div>
						</div>
					</div>
					<div className="w-[335px] h-[127px] left-[62px] top-[79px] absolute flex-col justify-start items-start gap-4 inline-flex">
						<div className="pb-[5.70px] justify-end items-center inline-flex">
							<img
								className="w-[207px] h-[50px]"
								src="https://via.placeholder.com/207x50"
							/>
						</div>
						<div className="text-neutral-500 text-sm font-normal font-['Rubik'] leading-tight">
							Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br />
							Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
							Daerah Khusus Ibukota Jakarta 12950
						</div>
					</div>
					<div className="w-[250px] h-10 left-[922px] top-[202px] absolute rounded-lg border border-black" />
					<div className="w-32 h-7 left-[937px] top-[210px] absolute text-black text-sm font-normal font-['Rubik'] leading-normal">
						Your email address
					</div>
					<div className="w-[177px] h-6 left-[921px] top-[261px] absolute">
						<div className="w-5 h-5 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
						<div className="w-[157px] h-6 left-[20px] top-0 absolute text-black text-sm font-normal font-['Rubik'] leading-normal">
							{" "}
							elemesid@gmail.com
						</div>
					</div>
					<div className="w-[178px] h-6 left-[920px] top-[295px] absolute">
						<div className="w-5 h-5 left-0 top-[2px] absolute justify-center items-center inline-flex">
							<div className="w-5 h-5 relative flex-col justify-start items-start flex" />
						</div>
						<div className="w-[157px] h-6 left-[21px] top-0 absolute text-black text-sm font-normal font-['Rubik'] leading-normal">
							{" "}
							0888 1111 2222{" "}
						</div>
					</div>
					<div className="w-[60px] h-10 left-[1112px] top-[202px] absolute bg-lime-500 rounded-tr-lg rounded-br-lg" />
					<div className="w-[41px] h-[23px] left-[1123px] top-[210px] absolute text-white text-sm font-medium font-['Rubik'] leading-normal">
						SEND
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
