import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Images } from "../assets/image";
import {Star} from 'lucide-react'
const Home = () => {
    const features = [
        { title: "Flights", desc: "Budget-friendly travel", img: Images.flightImg },
        { title: "Staking", desc: "Minimum 30% p.a.", img: Images.flightImg },
        { title: "Hotel", desc: "Book affordable stays", img: Images.flightImg },
        { title: "Rewards", desc: "Win a foreign trip", img: Images.flightImg },
        { title: "Buy YTP", desc: "Purchase YTP coins", img: Images.flightImg },
        { title: "Referrals", desc: "Invite friends, earn YTP", img: Images.flightImg },
        { title: "Sell YTP", desc: "Convert YTP to fiat", img: Images.flightImg },
        { title: "Withdraw", desc: "Transfer to your bank", img: Images.flightImg },
        { title: "Wallet", desc: "Receive and Send YTP", img: Images.flightImg },
        { title: "Transactions", desc: "Track your transactions", img: Images.flightImg },
    ];

    const buttons = ["Withdraw", "Buy YTP"];

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-green-900 text-white flex flex-col items-center p-6">
            {/* Header */}
            <div className="w-full flex justify-between items-center px-4 md:px-12">
                <h1 className="text-yellow-400 font-bold text-xl md:text-2xl">YatriPay</h1>
                <button className="flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
                    <FaUserCircle size={22} className="mr-2" /> Profile
                </button>
            </div>

            {/* Staking Card */}
            <div className="relative mt-12 bg-white/10 backdrop-blur-md p-8 rounded-xl text-center w-11/12 md:w-2/5 shadow-lg border border-white/20">
                {/* Stars positioned around the card */}
                <Star className="absolute top-2 left-4 text-white opacity-70 w-4 h-4" />
                <Star className="absolute top-10 right-6 text-yellow-300 opacity-80 w-5 h-5" />
                <Star className="absolute bottom-6 left-10 text-white opacity-60 w-3 h-3" />
                <Star className="absolute bottom-2 right-4 text-yellow-400 opacity-75 w-4 h-4" />

                <h2 className="text-sm md:text-base opacity-80 text-white">Highest return on</h2>
                <h1 className="text-3xl md:text-4xl font-bold text-white">STAKING</h1>
                <h1 className="text-5xl md:text-6xl font-bold mt-2 text-yellow-300">30% p.a.</h1>
                <p className="mt-2 text-sm md:text-lg text-white">
                    Annual return with <span className="text-yellow-400 font-semibold">YatriPay</span>
                </p>
                <button className="mt-4 bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg transition font-semibold text-white">
                    Add Funds
                </button>
                <p className="mt-2 text-xs md:text-sm opacity-75 text-white">*Minimum 7 days locking period</p>
            </div>

            {/* Card Image */}
            <img src={Images.cardImg} alt="Credit Card" className="mt-12 w-80 md:w-96 shadow-xl rounded-lg" />

            {/* Action Buttons */}
            <div className="flex gap-6 mt-6">
                {buttons.map((btn, index) => (
                    <button key={index} className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg transition font-semibold">
                        {btn}
                    </button>
                ))}
            </div>

            {/* Features Section */}
            {/* Features Section */}
            <div className="grid grid-cols-2 gap-6 mt-12">
                {features.map(({ title, desc, img }, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 px-10 py-3 rounded-lg text-center shadow-md flex flex-col items-center justify-center border border-gray-700 
      transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl max-w-[180px]"
                    >
                        <img src={img} alt={title} className="w-14 h-14 mb-2 rounded-lg" />
                        <h3 className="text-base font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            {title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">{desc}</p>
                    </div>
                ))}
            </div>

            {/* Banner Section */}
            {/* Banner Section */}
            <div className="bg-white text-black text-center px-6 py-20 rounded-lg mt-8 w-8/12 md:w-2/5">
                <h2 className="text-lg font-bold">Banner</h2>
            </div>

            {/* Referral Section */}
            <div className="text-center mt-4">
                <div className="flex justify-center space-x-2 mb-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-green-500 rounded-full"></div>
                    ))}
                </div>
                <p className="text-sm">Invite a friend and get ₹100 worth YTP</p>
                <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg mt-2">Invite Now</button>
            </div>

            {/* Video Cards */}
            <div className="grid grid-cols-4 gap-4 mt-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-800 text-center p-6 rounded-lg">Vid</div>
                ))}
            </div>

            {/* Chart Section */}
            <div className="bg-white text-black text-center px-6 py-20 rounded-lg mt-8 w-8/12 md:w-2/5">
                <h2 className="text-lg font-bold">Chart</h2>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-400 mt-12 text-sm">
                <p>
                    <span className="text-yellow-400 font-bold text-xl md:text-2xl">YatriPay</span> is <span className="text-white font-bold text-xl">100%</span>
                </p>
                <p className="text-white font-bold">Safe and Decentralized!</p>
                <p className="mt-4">Your Assets and Transactions are secured without YVM Blockchain.</p>
                <p>You can check entire YatriPay transactions on the explorer.</p>
                <p className="mt-4">Copyright © 2025 YatriPay. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Home;
