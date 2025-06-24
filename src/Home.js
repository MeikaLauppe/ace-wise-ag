import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="text-center py-12">
    <h2 className="text-4xl font-bold mb-4 text-green-800">Smarter Agriculture Starts Here</h2>
    <p className="text-lg mb-6 max-w-2xl mx-auto">
      ACE Wise Ag helps farmers, ranchers, and agricultural businesses make informed decisions using AI-powered tools. Ask questions, plan nutrition, optimize land, and manage records — all in one place.
    </p>
    <Link to="/ask-ai" className="inline-block bg-green-700 text-white text-lg px-6 py-3 rounded shadow hover:bg-green-800 transition">
      Ask the AI Assistant
    </Link>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-xl mb-2 text-green-700">Livestock Plans</h3>
        <p>Create feed schedules and nutrition plans tailored to your animals.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-xl mb-2 text-green-700">Land Use Insights</h3>
        <p>Maximize productivity with crop rotation and grazing suggestions.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-xl mb-2 text-green-700">Business Tracking</h3>
        <p>Record sales, manage inventory, and track deliveries with ease.</p>
      </div>
    </div>
  </section>
);

export default Home;