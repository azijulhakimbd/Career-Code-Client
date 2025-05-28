import React from "react";

const OurClient = () => {
  return (
    <section className="p-6 bg-base-100 text-base-content transition-colors duration-300">
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
            <p className="text-sm sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClient;
