"use client"
import Image from "next/image"
import TechSupport from "../assets/TechSupport.png"
function TechnicalSupport() {
	return (
		<div className=" flex flex-col-reverse md:flex-row justify-center items-center max-w-[1280px] mx-5 md:m-auto relative gap-5">
			<Image src={TechSupport} alt="TechSupport" layout="responsive"></Image>
			<div className="flex flex-col items-center md:items-start justify-center md:h-screen md:gap-6">
				<h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg text-[#C9B18F]">Technical Support</h1>
				<p className="text-[#6A6A6A] font-semibold">Creating the most prominent channels for brands to Show case their power legacy. </p>
				<p className="text-[#6A6A6A] font-semibold">We take care of their technical channel in every aspects , from User experience to Valuable reviews</p>
			</div>
		</div>
	)
}

export default TechnicalSupport
