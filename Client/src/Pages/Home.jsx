

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Welcome to CoSync</h1>
      <p className="text-lg text-gray-700 mb-4">
        Your collaborative workspace solution for teams of all sizes.
      </p>
      <div className="mt-8">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition duration-300 mr-4">
          Get Started
        </button>
        <button className="border border-orange-600 text-orange-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-50 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;