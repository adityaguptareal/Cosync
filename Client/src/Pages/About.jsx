const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">About CoSync</h1>
      <p className="text-lg text-gray-700 mb-4">
        CoSync is a collaborative workspace platform designed to help teams work together more efficiently.
        Our mission is to streamline communication and project management for organizations of all sizes.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-orange-600 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            We believe in creating tools that make collaboration seamless and intuitive. 
            Our platform is built with the modern workplace in mind, supporting both in-office and remote teams.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-orange-600 mb-3">Our Team</h2>
          <p className="text-gray-700">
            Our diverse team of developers, designers, and product specialists work together 
            to create the best possible experience for our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;