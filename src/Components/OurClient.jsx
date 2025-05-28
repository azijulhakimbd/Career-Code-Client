import React from "react";

const OurClient = () => {
  return (
    <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
      <h1 className="py-10 text-green-500 text-center text-4xl">Our Client</h1>
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 gap-4">
        {[
          { number: "50+", label: "Clients" },
          { number: "89K", label: "Followers on social media" },
          { number: "3", label: "Published books" },
          { number: "8", label: "TED talks" },
          { number: "22", label: "Years of experience" },
          { number: "10+", label: "Workshops" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">{item.number}</p>
            <p className="text-sm text-success sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClient;
