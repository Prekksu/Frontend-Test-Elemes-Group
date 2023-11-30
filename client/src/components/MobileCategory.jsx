import React from "react";
import cat1 from "../assets/categories/Frame.svg";
import cat2 from "../assets/categories/pizza 1.svg";
import cat3 from "../assets/categories/kebab 1.svg";
import cat4 from "../assets/categories/salmon 1.svg";
import cat5 from "../assets/categories/doughnut 1.svg";

const MobileCategory = () => {
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
		<div className="w-[480px] flex justify-around items-center mx-auto flex-col gap-5 pb-10">
			<div className="w-[383px] pb-5">
				<span className="text-zinc-800 text-2xl font-medium font-['Rubik'] leading-[30px]">
					Browser Our Category <br />
				</span>
				<span className="text-lime-500 text-2xl font-medium font-['Rubik'] leading-[30px]">
					Receipt
				</span>
			</div>
			<div className="mobile-category-container">
				<div className="w-[480px] flex flex-row gap-5">
					{products.map((val) => {
						return (
							<div
								className="w-[200px] h-[172px] px-[61px] py-[30px] rounded-lg justify-start items-start gap-2.5"
								style={{
									backgroundColor: val.bgColor,
								}}
							>
								<div className="w-[81px] h-28 relative">
									<img
										alt="cat"
										src={val.photo}
										className="w-[47px] h-[47px] left-[10px] top-0 absolute"
									/>
									<div className="w-[68px] left-0 top-[70px] absolute text-center text-zinc-800 text-base font-medium font-['Rubik'] leading-snug">
										{val.category}
									</div>
									<div className="w-[57.85px] left-[5.08px] top-[96px] absolute text-center text-zinc-800 text-sm font-normal font-['Rubik'] leading-none">
										{val.items}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MobileCategory;
