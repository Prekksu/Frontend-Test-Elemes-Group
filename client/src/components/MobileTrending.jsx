import React from "react";
import product1 from "../assets/product/pexels-brett-jordan-842519 1.png";
import product2 from "../assets/product/pexels-daria-shevtsova-1260968 1.png";
import product3 from "../assets/product/pexels-nishant-aneja-2955819 1.png";
import product4 from "../assets/product/pexels-olga-lioncat-7245464 1.png";
import ratefill from "../assets/favorite 4.svg";
import rate from "../assets/favorite 5.svg";

const MobileTrending = () => {
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
	];

	return (
		<div className="w-[480px] flex justify-around items-center mx-auto flex-col gap-5 pb-36">
			<div className="w-[383px] pb-5">
				<span className="text-zinc-800 text-2xl font-medium font-['Rubik'] leading-[30px]">
					Browser Our Trending <br />
				</span>
				<span className="text-lime-500 text-2xl font-medium font-['Rubik'] leading-[30px]">
					Receipt
				</span>
			</div>
			{products.map((val) => {
				return (
					<div className="w-[402px] h-[292px] relative rounded-xl">
						<div className="w-[402px] h-[292px] left-0 top-0 absolute rounded-xl">
							<div
								className="w-[402px] h-[292px] left-0 top-0 absoluterounded-[17px] shadow rounded-xl"
								style={{
									backgroundColor: val.bgColor,
								}}
							/>
							<img
								alt="product"
								src={val.photo}
								className="w-[118.15px] h-[114.31px] left-[20.68px] top-[31.44px] absolute rounded-md"
							/>
							<div className="w-[205px] h-[47.63px] left-[25px] top-[163.85px] absolute text-black text-[26px] font-medium font-['Rubik'] leading-[50px]">
								{val.name}
							</div>
							<div className="w-[46.28px] h-5 left-[24.61px] top-[211.48px] absolute text-lime-500 text-lg font-medium font-['Rubik']">
								{val.category}{" "}
							</div>
						</div>
						<div>
							<img
								alt="rate"
								src={ratefill}
								className="w-[10.50px] h-[10.66px] left-[25px] top-[252px] absolute flex-col justify-start items-start inline-flex"
							/>
							<img
								alt="rate"
								src={ratefill}
								className="w-[10.50px] h-[10.66px] left-[40px] top-[252px] absolute flex-col justify-start items-start inline-flex"
							/>
							<img
								alt="rate"
								src={ratefill}
								className="w-[10.50px] h-[10.66px] left-[55px] top-[252px] absolute flex-col justify-start items-start inline-flex"
							/>
							<img
								alt="rate"
								src={ratefill}
								className="w-[10.50px] h-[10.66px] left-[70px] top-[252px] absolute flex-col justify-start items-start inline-flex"
							/>
							<img
								alt="rate"
								src={rate}
								className="w-[10.50px] h-[10.66px] left-[85px] top-[252px] absolute flex-col justify-start items-start inline-flex"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MobileTrending;
