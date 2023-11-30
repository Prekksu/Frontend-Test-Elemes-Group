import React from "react";
import product1 from "../assets/product/pexels-brett-jordan-842519 1.png";
import product2 from "../assets/product/pexels-daria-shevtsova-1260968 1.png";
import product3 from "../assets/product/pexels-nishant-aneja-2955819 1.png";
import product4 from "../assets/product/pexels-olga-lioncat-7245464 1.png";
import product5 from "../assets/product/pexels-oleg-magni-1908674 1.png";
import product6 from "../assets/product/pexels-alena-shekhovtcova-6940978 1.png";
import product7 from "../assets/product/pexels-karley-saagi-2064449 1.png";
import product8 from "../assets/product/pexels-polina-tankilevitch-6419736 1.png";
import ratefill from "../assets/favorite 4.svg";
import rate from "../assets/favorite 5.svg";

const Trending = () => {
	const products = [
		{
			photo: product1,
			name: "Pizza Paperoni",
			category: "Pizza",
			bgColor: "#E6F3F5", // sky-100
		},
		{
			photo: product2,
			name: "Pizza Meat",
			category: "Pizza",
			bgColor: "#E6F3F5", // sky-100
		},
		{
			photo: product3,
			name: "Doner Kebab",
			category: "Kebab",
			bgColor: "#EAEEFA", // violet-100
		},
		{
			photo: product4,
			name: "Salmon Roll",
			category: "Salmon",
			bgColor: "#F9EEF3", // red-50
		},
		{
			photo: product5,
			name: "Cupcake Choco",
			category: "Cupcake",
			bgColor: "#EFFEEB", // lime-50
		},
		{
			photo: product6,
			name: "Doughnut Milk",
			category: "Doughnut",
			bgColor: "#F2F7D9", // lime-100
		},
		{
			photo: product7,
			name: "Doughnut Unicorn",
			category: "Doughnut",
			bgColor: "#F2F7D9", // lime-100
		},
		{
			photo: product8,
			name: "Kathi Kebab",
			category: "Kebab",
			bgColor: "#EAEEFA", // violet-100
		},
	];

	const ratings = {
		"Pizza Paperoni": 4,
		"Pizza Meat": 4,
		"Doner Kebab": 5,
		"Salmon Roll": 4,
		"Cupcake Choco": 4,
		"Doughnut Milk": 5,
		"Doughnut Unicorn": 4,
		"Kathi Kebab": 4,
	};

	return (
		<div className="w-[1440px] relative mx-auto flex flex-col gap-16">
			<div className="w-[730px] left-[518.50px] ml-[116px]">
				<span className="text-zinc-800 text-[38px] font-medium font-['Rubik'] leading-[50px]">
					Browser Our Trending <br />
				</span>
				<span className="text-lime-500 text-[38px] font-medium font-['Rubik'] leading-[50px]">
					Receipt
				</span>
			</div>
			<div className="flex flex-wrap gap-5 justify-center">
				{products.map((val, index) => {
					return (
						<div
							key={index}
							className="w-[287.50px] h-[306px] relative rounded-[17px] shadow"
							style={{ backgroundColor: val.bgColor }}
						>
							<div className="w-[287.50px] h-[306px] left-0 top-0 absolute " />
							<div className="w-[118.15px] h-[120px] left-[20.68px] top-[33px] absolute">
								<img
									src={val.photo}
									alt="trending"
									className="w-[118.15px] h-[120px] left-0 top-0 absolute bg-stone-300 rounded-md"
								/>
							</div>
							<div className="w-[205px] left-[25px] top-[172px] absolute text-black text-[26px] font-medium font-['Rubik'] leading-[50px]">
								{val.name}
							</div>
							<div className="w-[46.28px] left-[24.61px] top-[222px] absolute text-lime-500 text-lg font-medium font-['Rubik']">
								{val.category}
							</div>
							<div>
								<img
									src={ratefill}
									className="w-[10.50px] h-[10.66px] left-[25px] top-[272px] absolute flex-col justify-start items-start inline-flex"
								/>
								<img
									src={ratefill}
									className="w-[10.50px] h-[10.66px] left-[40px] top-[272px] absolute flex-col justify-start items-start inline-flex"
								/>
								<img
									src={ratefill}
									className="w-[10.50px] h-[10.66px] left-[55px] top-[272px] absolute flex-col justify-start items-start inline-flex"
								/>
								<img
									src={ratefill}
									className="w-[10.50px] h-[10.66px] left-[70px] top-[272px] absolute flex-col justify-start items-start inline-flex"
								/>
								<img
									src={rate}
									className="w-[10.50px] h-[10.66px] left-[85px] top-[272px] absolute flex-col justify-start items-start inline-flex"
								/>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex flex-wrap gap-5 justify-center">
				<div className="w-40 h-[50px] bg-lime-500 rounded-[100px] flex items-center justify-center">
					<div className="text-white text-base font-medium font-['Rubik']">
						ALL Receipt
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trending;
