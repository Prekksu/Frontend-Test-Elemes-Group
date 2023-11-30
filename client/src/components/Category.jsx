import React from "react";
import cat1 from "../assets/categories/Frame.svg";
import cat2 from "../assets/categories/pizza 1.svg";
import cat3 from "../assets/categories/kebab 1.svg";
import cat4 from "../assets/categories/salmon 1.svg";
import cat5 from "../assets/categories/doughnut 1.svg";
import prev from "../assets/next 1 (1).svg";
import next from "../assets/next 1.svg";
import bg from "../assets/115.png";

const Category = () => {
	const products = [
		{
			photo: cat1,
			items: 22,
			category: "Cupcake",
			bgColor: "#EFFEEB", // lime-50
		},
		{
			photo: cat2,
			items: 25,
			category: "Pizza",
			bgColor: "#E6F3F5", // sky-100
		},
		{
			photo: cat3,
			items: 12,
			category: "Kebab",
			bgColor: "#EAEEFA", // violet-100
		},
		{
			photo: cat4,
			items: 22,
			category: "Salmon",
			bgColor: "#F9EEF3", // red-50
		},
		{
			photo: cat5,
			items: 11,
			category: "Doughnut",
			bgColor: "#EFFEEB", // lime-50
		},
	];

	return (
		<div className="flex justify-center items-center flex-col pb-16">
			<div className="w-[1440px] h-[430px] relative">
				<div className="w-[1440px] p-2.5 top-[197px] absolute justify-center items-start gap-2.5 inline-flex">
					{products.map((val, index) => {
						return (
							<div
								key={index}
								className="w-[243px] h-[172px] px-[81px] py-[30px] rounded-lg justify-center items-center flex transition-transform transform hover:scale-125 hover:z-50"
								style={{
									backgroundImage: `url(${bg})`,
									backgroundSize: "cover",
									position: "relative",
								}}
							>
								<div
									className="w-[243px] h-[172px] px-[81px] py-[30px] rounded-lg justify-center items-center flex hover:opacity-90"
									style={{
										backgroundColor: val.bgColor,
										position: "relative",
										zIndex: 1,
									}}
								>
									<div className="w-[81px] h-28 relative">
										<img
											alt="cat"
											src={val.photo}
											className="w-[51.84px] h-[47px] left-[11.03px] top-0 absolute"
										/>
										<div className="w-[81px] left-0 top-[70px] absolute text-center text-zinc-800 text-base font-medium font-['Rubik'] leading-snug">
											{val.category}
										</div>
										<div className="w-[63.81px] left-[5.60px] top-[96px] absolute text-center text-zinc-800 text-sm font-normal font-['Rubik'] leading-none">
											{val.items} Items
										</div>
									</div>
								</div>
							</div>
						);
					})}
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
			<div className="w-[1440px] flex gap-3 justify-end pr-[116px]">
				<div className="w-[113px] h-[50px] relative">
					<div className="w-[113px] h-[50px] left-0 top-0 absolute bg-lime-500 rounded-[100px]" />
					<div className="w-[82px] h-[33px] left-[13px] top-[9px] absolute">
						<div className="w-[33px] h-[33px] left-0 top-0 absolute">
							<div className="w-[33px] h-[33px] left-0 top-0 absolute bg-white rounded-[100px]" />
							<img
								alt="prev"
								src={prev}
								className="w-[18.15px] h-[18.15px] left-[7.43px] top-[7.43px] absolute"
							/>
						</div>
						<div className="left-[40px] top-[7px] absolute text-center text-white text-base font-medium font-['Rubik']">
							PREV
						</div>
					</div>
				</div>
				<div className="w-[113px] h-[50px] relative">
					<div className="w-[113px] h-[50px] left-0 top-0 absolute bg-lime-500 rounded-[100px]" />
					<div className="w-[87px] h-[33px] left-[17px] top-[9px] absolute">
						<div className="w-[33px] h-[33px] left-[54px] top-0 absolute">
							<div className="w-[33px] h-[33px] left-0 top-0 absolute bg-white rounded-[100px]" />
							<img
								alt="next"
								src={next}
								className="w-[18.15px] h-[18.15px] left-[7.43px] top-[7.43px] absolute"
							/>
						</div>
						<div className="left-0 top-[8px] absolute text-center text-white text-base font-medium font-['Rubik']">
							NEXT
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
