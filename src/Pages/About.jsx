import React from "react";
import { FaUsers, FaBullseye, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-base-100 py-10 lg:py-25 text-base-content">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-green-500 mb-6">
          About Job Hunter
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-base-content/80">
          At <span className="font-semibold text-green-500">Job Hunter</span>,
          we connect talented individuals with the best career opportunities.
          Since our founding in 2018, we’ve been dedicated to helping job seekers
          achieve their dreams and enabling companies to build outstanding teams.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition">
          <FaBullseye className="text-4xl text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p>
            To bridge the gap between job seekers and employers by providing a
            transparent, efficient, and user-friendly job platform that empowers
            both applicants and recruiters.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition">
          <FaLaptopCode className="text-4xl text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p>
            To become the most trusted career platform in Bangladesh and beyond,
            where opportunities and talent meet to create a brighter future.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">10k+ Jobs Posted</h3>
              <p>Fresh jobs updated daily to help you land your dream role.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">5k+ Companies</h3>
              <p>Trusted by top recruiters and companies nationwide.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>Our team is always ready to assist job seekers and employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-6">Meet Our Team</h2>
        <p className="max-w-2xl mx-auto mb-12">
          Behind Job Hunter is a passionate group of developers, recruiters, and
          strategists working together to make job hunting simpler and smarter.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Team Card */}
          <div className="p-6 bg-base-100 shadow rounded-xl">
            <img
              src="https://i.postimg.cc/sgLdKYQp/MAH-TECH-20220313-004420.png"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-success"
            />
            <h3 className="text-lg font-bold">Md. Azijul Hakim</h3>
            <p className="text-sm text-base-content/70">Founder & CEO</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>
    </div>
  );
};

export default About;
