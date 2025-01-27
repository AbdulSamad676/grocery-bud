import React from "react";
import Header from "../../components/Header";

// Header Component
// const Header = () => (
//   <header className="flex justify-between items-center p-4 bg-white shadow-md">
//     <div className="text-2xl font-bold text-emerald-600">GrocerySave</div>
//     <nav className="space-x-4">
//       <button className="text-gray-700">Sign In</button>
//       <button className="bg-emerald-600 text-white px-4 py-2 rounded">
//         Sign Up
//       </button>
//     </nav>
//   </header>
// );

// Hero Section
const Hero = () => (
  <section className="text-center py-12 bg-green-50">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Smart Grocery Shopping,{" "}
      <span className="text-emerald-600">Made Simple</span>
    </h1>
    <p className="text-lg text-gray-600 mb-6">
      Organize your grocery lists, track prices, and save money with our
      intelligent shopping assistant.
    </p>
    <div className="space-x-4">
      <button className="bg-emerald-600 text-white px-6 py-2 rounded">
        Get Started Free
      </button>
      <button className="border border-green-600 text-emerald-600 px-6 py-2 rounded">
        Watch Demo
      </button>
    </div>
  </section>
);

// Features Section
const Features = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center mb-8">
      Everything you need to shop smarter
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Smart Lists",
          desc: "Create and manage multiple shopping lists with smart categorization.",
        },
        {
          title: "Price History",
          desc: "Track price changes and get notified when items go on sale.",
        },
        {
          title: "Mobile Ready",
          desc: "Access your lists anywhere with our mobile-friendly design.",
        },
      ].map((feature, index) => (
        <div key={index} className="p-6 bg-white shadow-md rounded">
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// How It Works Section
const HowItWorks = () => (
  <section className="py-12 bg-green-50">
    <h2 className="text-3xl font-bold text-center mb-8">
      How GrocerySave Works
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ul className="space-y-4">
        {["Create Lists", "Add Items", "Track Prices", "Save Money"].map(
          (step, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-gray-800">{step}</p>
            </li>
          )
        )}
      </ul>
      <div className="p-6 bg-white shadow-md rounded">
        <h3 className="text-xl font-bold mb-2">Create Lists</h3>
        <p className="text-gray-600">
          Create custom shopping lists for different stores or occasions.
        </p>
      </div>
    </div>
  </section>
);

// Testimonials Section
const Testimonials = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center mb-8">Loved by Shoppers</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: "Sarah Johnson",
          feedback:
            "GrocerySave has completely transformed how I shop for my family.",
        },
        {
          name: "Mike Chen",
          feedback:
            "The price tracking feature is amazing. I've saved over $200!",
        },
        {
          name: "Emily Davis",
          feedback: "I love how I can organize my shopping lists by category.",
        },
      ].map((testimonial, index) => (
        <div key={index} className="p-6 bg-white shadow-md rounded">
          <p className="italic text-gray-600">"{testimonial.feedback}"</p>
          <h4 className="mt-4 font-bold text-emerald-600">
            - {testimonial.name}
          </h4>
        </div>
      ))}
    </div>
  </section>
);

// import React from "react";

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
        <div className="bg-white mt-8 p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-6">
          {/* Monthly Grocery Spend */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              Monthly Grocery Spend
            </h3>
            <p className="text-4xl font-bold text-emerald-600">$600</p>
            <p className="text-gray-500">Average household spend</p>
          </div>

          {/* Potential Savings */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              Potential Savings
            </h3>
            <p className="text-4xl font-bold text-emerald-600">$180</p>
            <p className="text-gray-500">30% average savings</p>
          </div>

          {/* Button */}
          <div>
            <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
              Start Saving Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer CTA Section
// const FooterCTA = () => (
//   <footer className="text-center py-12 bg-emerald-600 text-white">
//     <h2 className="text-3xl font-bold mb-4">Start saving on groceries today</h2>
//     <div className="space-x-4">
//       <button className="bg-white text-emerald-600 px-6 py-2 rounded">
//         Sign Up Now
//       </button>
//       <button className="border border-white px-6 py-2 rounded">
//         Schedule a Demo
//       </button>
//     </div>
//   </footer>
// );

const LandingPage = () => (
  <div>
    {/* <Header /> */}
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <SavingsSection />
    {/* <FooterCTA /> */}
  </div>
);

export default LandingPage;
