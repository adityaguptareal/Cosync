import React from "react";

import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="w-full justify-center">
        <motion.h1
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-4xl md:text-5xl font-extrabold text-orange-600 text-center mb-6"
        >
          About CoSync
        </motion.h1>
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.6}}
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
        >
          CCoSync connects people with the right co-working spaces—quickly, simply, and smartly.
          We sync your work style with the perfect place to thrive.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
            To connect professionals, freelancers, startups, and remote teams with the perfect co-working spaces—bridging the gap between online convenience and offline productivity.
            We strive to empower work communities by making inspiring, flexible, and accessible workspaces available to everyone, everywhere.
            </p>
            <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Reduction in booking errors</li>
              <li>Faster reservation time</li>
              <li>No waiting time and standing in the queue</li>
              <li>Transparent revenue tracking for admin</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <img
              src="/About.jpeg"
              alt="Modern co-working space"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;