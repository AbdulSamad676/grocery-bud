import React, { useState } from "react";
// import Header from "../../components/Header";
import { FaRegCheckCircle, FaRegStar } from "react-icons/fa";
import { FiShield, FiUsers } from "react-icons/fi";
import { IoIosSearch, IoMdTime } from "react-icons/io";
import { CiCirclePlus, CiMobile2, CiWallet } from "react-icons/ci";
import { LuStore } from "react-icons/lu";
import { GoShareAndroid } from "react-icons/go";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import {
  MdFormatListBulletedAdd,
  MdKeyboardVoice,
  MdOutlineLabel,
} from "react-icons/md";
import { HiArrowTrendingUp } from "react-icons/hi2";

const Hero = () => (
  <section className="text-center py-20 bg-emerald-50 ">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Smart Grocery Shopping,{" "}
      <span className="text-emerald-600">Made Simple</span>
    </h1>
    <p className="text:sm md:text-lg text-gray-600 mb-6 w-full mx-0  md:w-3/6 md:mx-auto">
      Organize your grocery lists, track prices, and save money with our
      intelligent shopping assistant. Join over 50,000 smart shoppers saving
      time and money every day.
    </p>
    <div className="space-x-1 md:space-x-6">
      <button className="bg-emerald-600 text-white px-2 md:px-6 py-2 rounded">
        Get Started Free
      </button>
      <button className="border border-emerald-600 text-emerald-600 px-2 md:px-6  py-2 rounded">
        Watch Demo
      </button>
      <div className="flex gap-5 md:gap-10 justify-center my-5">
        <div className="rating flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          <FaRegStar className="text-amber-300" size={24} />
          <p className="font-normal text-gray-700 text-sm">4.9/5 rating</p>
        </div>
        <div className="users  flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          <FiUsers className="text-emerald-600" size={24} />
          <p className="font-normal text-gray-700 text-sm">50K+ users</p>
        </div>
        <div className="security  flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          <FiShield className="text-emerald-600" size={24} />
          <p className="font-normal text-gray-700 text-sm">Secure & Private</p>
        </div>
      </div>
    </div>
  </section>
);

// Features Section
const Features = () => (
  <section className="py-12 bg-emerald-50">
    <h2 className="text-3xl font-bold text-center mb-8">
      Everything you need to shop smarter
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-3 px-5">
      {[
        {
          icon: <FaRegCheckCircle size={24} />,
          title: "Smart Lists",
          desc: "Create and manage multiple shopping lists with smart categorization.",
        },
        {
          icon: <IoMdTime size={24} />,
          title: "Price History",
          desc: "Track price changes and get notified when items go on sale.",
        },
        {
          icon: <CiMobile2 size={24} />,
          title: "Mobile Ready",
          desc: "Access your lists anywhere with our mobile-friendly design.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="hover:scale-105 transition-transform duration-300 flex flex-col gap-3 p-6 bg-white shadow-md rounded text-center md:text-left"
        >
          <span className="text-emerald-600 p-3 rounded bg-emerald-100 mx-auto md:mx-0 w-fit">
            {feature.icon}
          </span>
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Interactive section that has navigations
const HowItWorks = () => {
  const steps = [
    {
      stepIcon: <MdFormatListBulletedAdd />,
      title: "Create Lists",
      description:
        "Create custom shopping lists for different stores or occasions.",
      items: [
        {
          icon: <LuStore />,
          labelText: "Organized by Store",
        },
        {
          icon: <GoShareAndroid />,
          labelText: "Share with Family",
        },
        {
          icon: <PiBellSimpleRingingBold />,
          labelText: "Organized by Store",
        },
      ],
    },
    {
      stepIcon: <CiCirclePlus />,
      title: "Add Items",
      description:
        "Easily add items to your lists and categorize them as needed.",
      items: [
        {
          icon: <IoIosSearch />,
          labelText: "Smart search",
        },
        {
          icon: <MdOutlineLabel />,
          labelText: "Auto-categorize",
        },
        {
          icon: <MdKeyboardVoice />,
          labelText: "Voice Input",
        },
      ],
    },
    {
      stepIcon: <HiArrowTrendingUp />,
      title: "Track Prices",
      description:
        "Monitor prices for your listed items and find the best deals.",
      items: [
        {
          icon: <PiBellSimpleRingingBold />,
          labelText: "Price Alert",
        },
        {
          icon: <LuStore />,
          labelText: "Compare stores",
        },
        {
          icon: <GoShareAndroid />,
          labelText: "Deal finder",
        },
      ],
    },
    {
      stepIcon: <CiWallet />,
      title: "Save Money",
      description:
        "Optimize your purchases to save money on every shopping trip.",
      items: [
        {
          icon: <LuStore />,
          labelText: "Organized by Store",
        },
        {
          icon: <GoShareAndroid />,
          labelText: "Share with Family",
        },
        {
          icon: <PiBellSimpleRingingBold />,
          labelText: "Organized by Store",
        },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="py-12 bg-white px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        How GrocerySave Works
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Steps Sidebar */}
        <ul className="space-y-4 col-span-1 lg:col-span-5">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex items-center space-x-2 cursor-pointer ${
                currentStep === index
                  ? "shadow-lg border-l-4 border-emerald-600"
                  : ""
              } p-2 rounded-md`}
              onClick={() => setCurrentStep(index)}
            >
              <span className="bg-emerald-100 text-emerald-700 rounded-sm w-10 h-10 text-xl flex items-center justify-center">
                {step.stepIcon}
              </span>
              <p className="text-gray-800 font-medium">{step.title}</p>
            </li>
          ))}
        </ul>

        {/* Step Content */}
        <div className="p-6 bg-white shadow-md rounded col-span-1 lg:col-span-7">
          <h3 className="text-xl font-bold mb-2">{steps[currentStep].title}</h3>
          <p className="text-gray-600">{steps[currentStep].description}</p>
          <div className="flex flex-col md:flex-row my-5 gap-5 justify-between">
            {steps[currentStep].items?.map((item) => {
              return (
                <div
                  className="stepCard hover:scale-105 transition-transform duration-300
                  w-full p-4 rounded bg-gray-100 flex gap-3 flex-col items-center hover:bg-emerald-50"
                >
                  <span className="text-emerald-600 text-2xl">{item.icon}</span>
                  <p className="text-sm font-semibold text-gray-700">
                    {item.labelText}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              className={`px-5 py-1 rounded bg-gray-200 ${
                currentStep === 0 ? "cursor-not-allowed" : "hover:bg-gray-300"
              }`}
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              className={`px-5 py-1 rounded bg-emerald-600 text-white ${
                currentStep === steps.length - 1
                  ? "cursor-not-allowed"
                  : "hover:bg-emerald-700"
              }`}
              onClick={() =>
                setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
              }
              disabled={currentStep === steps.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => (
  <section className="py-12 px-5 md:px-20 bg-white">
    <h2 className="text-3xl font-bold text-center mb-8">Loved by Shoppers</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: "Sarah Johnson",
          position: "Busy Mom",
          feedback:
            "GrocerySave has completely transformed how I shop for my family.",
        },
        {
          name: "Mike Chen",
          position: "Budget Conscious",
          feedback:
            "The price tracking feature is amazing. I've saved over $200!",
        },
        {
          name: "Emily Davis",
          position: "Health Enthusiast",
          feedback: "I love how I can organize my shopping lists by category.",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="hover:scale-105 transition-transform duration-300 p-10 flex flex-col gap-3 bg-white shadow-md rounded"
        >
          <div className="flex items-center gap-2">
            <span className="font-extrabold w-12 h-12 bg-emerald-100 text-emerald-600 flex justify-center items-center rounded-full">
              {testimonial.name.charAt(0).toUpperCase()}
            </span>
            <div>
              <h4 className=" font-semibold  text-normal">
                {testimonial.name}
              </h4>
              <p className="text-gray-800 text-sm">{testimonial.position}</p>
            </div>
          </div>
          <p className="italic text-gray-600">"{testimonial.feedback}"</p>
        </div>
      ))}
    </div>
  </section>
);

export const SavingsSection = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800">
          Calculate Your Savings
        </h2>
        <p className="text-gray-600 mt-2">
          See how much you could save with GrocerySave
        </p>

        {/* Card */}
        <div className="bg-white mt-8 p-8 rounded-lg shadow-lg ">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-6">
            {/* Monthly Grocery Spend */}
            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Monthly Grocery Spend
              </h3>
              <p className="text-2xl font-bold text-emerald-600">$600</p>
              <p className="text-gray-500">Average household spend</p>
            </div>

            {/* Potential Savings */}
            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Potential Savings
              </h3>
              <p className="text-2xl font-bold text-emerald-600">$180</p>
              <p className="text-gray-500">30% average savings</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-2 md:mt-5">
            <button className="my-3 w-full bg-emerald-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-emerald-700 transition">
              Start Saving Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => (
  <div>
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <SavingsSection />
  </div>
);

export default LandingPage;
