import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 md:text-5xl">
        About Our Recipe App
      </h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3 md:text-4xl">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed md:text-xl">
          Our mission is to make cooking accessible and enjoyable for everyone.
          We believe that everyone should have the opportunity to create
          delicious meals, regardless of their cooking skills or experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3 md:text-4xl">
          Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed md:text-xl">
          <li>Extensive database of recipes from various cuisines.</li>
          <li>Search and filter recipes by ingredients, ratings, and more.</li>
          <li>User-friendly interface for easy navigation.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
