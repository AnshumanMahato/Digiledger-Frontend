const LandingPage = () => {
  return (
    <div className="text-primary min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">Digiledger</h1>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li className="text-gray-600 hover:text-gray-800">Features</li>
                <li className="text-gray-600 hover:text-gray-800">Pricing</li>
                <li className="text-gray-600 hover:text-gray-800">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Take Control of Your Finances
            </h2>
            <p className="text-lg mb-8">
              Track your expenses, manage your budget, and save money.
            </p>
            <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Expense Tracking
              </h3>
              <p className="text-gray-600">
                Keep track of your spending with our intuitive expense tracking
                feature. Categorize your expenses and see where your money goes.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Budget Management
              </h3>
              <p className="text-gray-600">
                Set and manage your budget easily. Get insights into your
                spending habits and make informed financial decisions.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Goal Setting
              </h3>
              <p className="text-gray-600">
                Define your financial goals and track your progress. Stay
                motivated and achieve your desired financial milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Basic
              </h3>
              <p className="text-gray-600">Free</p>
              <ul className="text-gray-600 mt-4">
                <li>Expense Tracking</li>
                <li>Budget Management</li>
                <li>1 Financial Goal</li>
              </ul>
              <button className="mt-8 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                Get Started
              </button>
            </div>
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Premium
              </h3>
              <p className="text-gray-600">$9.99/month</p>
              <ul className="text-gray-600 mt-4">
                <li>Expense Tracking</li>
                <li>Budget Management</li>
                <li>Unlimited Financial Goals</li>
                <li>Customizable Reports</li>
              </ul>
              <button className="mt-8 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                Get Started
              </button>
            </div>
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Business
              </h3>
              <p className="text-gray-600">Contact us for pricing</p>
              <ul className="text-gray-600 mt-4">
                <li>Expense Tracking</li>
                <li>Budget Management</li>
                <li>Advanced Analytics</li>
                <li>Team Collaboration</li>
              </ul>
              <button className="mt-8 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or need support? Contact our friendly team.
          </p>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 block w-full p-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 block w-full p-3 rounded-md"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 block w-full p-3 mt-4 rounded-md"
              rows="4"
            ></textarea>
            <button className="mt-6 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            &copy; 2023 Digiledger. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
