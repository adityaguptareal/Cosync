import { useState } from "react";

const sections = [
  "Terms",
  "Privacy",
  "Community",
  "Merchant",
  "Advertising",
  "Developers",
  "Copyright",
  "Trademark",
];

const sectionContent = {
  Privacy: {
    title: "🔒 Privacy",
    content:
      "We respect your privacy and are committed to protecting your personal information. Please review our Privacy Policy to understand how we collect, use, and safeguard your data when using CoSync.",
  },
  Community: {
    title: "🌐 Community",
    content:
      "CoSync fosters a respectful and collaborative community. We encourage users to engage constructively and adhere to community guidelines to maintain a positive and inclusive environment.",
  },
  Merchant: {
    title: "🛒 Merchant",
    content:
      "For merchants using CoSync, we offer tools to manage and scale your business efficiently. Ensure that your use of the platform complies with applicable commercial laws and our merchant policies.",
  },
  Advertising: {
    title: "📢 Advertising",
    content:
      "Advertising content on CoSync must be transparent and relevant. All advertisers must follow our advertising guidelines to ensure non-intrusive, appropriate, and honest campaigns.",
  },
  Developers: {
    title: "💻 Developers",
    content:
      "Our platform offers APIs and integrations for developers to extend functionality. Use of developer tools must comply with CoSync’s developer terms and maintain the integrity and security of the service.",
  },
  Copyright: {
    title: "© Copyright",
    content:
      "All content and materials on CoSync are protected by copyright. Unauthorized reproduction or distribution of content is prohibited. Respect the intellectual property rights of CoSync and other users.",
  },
  Trademark: {
    title: "™️ Trademark",
    content:
      "“CoSync” and associated logos are trademarks of CoSync Inc. You may not use our trademarks without prior written permission, except as permitted by law.",
  },
};

const Terms = () => {
  const [activeSection, setActiveSection] = useState("Terms");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Top circular nav */}
      <nav className="flex justify-center space-x-4 overflow-x-auto mb-10">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`flex-shrink-0 w-30 h-30 rounded-full flex items-center justify-center cursor-pointer font-semibold text-sm transition-colors duration-300 transform hover:shadow-lg ${
              activeSection === section
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-gray-300 text-gray-700 hover:bg-orange-200"
            }`}
          >
            {section}
          </button>
        ))}
      </nav>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <h1 className="text-4xl text-center font-bold text-orange-600 mb-6 ml-20 ">
            Terms of service
          </h1>
          <h2 className="text-xl text-center font-semibold mb-4 ml-20">Thank you for using CoSync!</h2>
          <p className="text-gray-700 ml-25">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the CoSync platform, including all services and features. Please read these Terms carefully, and contact us if you have any questions. By accessing or using CoSync, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl">
          {activeSection === "Terms" && (
            <>
              <h3 className="text-lg font-semibold text-orange-600 mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-4">
                By accessing or using CoSync services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h3 className="text-lg font-semibold text-orange-600 mb-3">2. Description of Service</h3>
              <p className="text-gray-700 mb-4">
                CoSync provides a collaborative workspace platform designed for team communication and project management. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
              </p>

              <h3 className="text-lg font-semibold text-orange-600 mb-3">3. User Accounts</h3>
              <p className="text-gray-700 mb-4">
                To access certain features of CoSync, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>

              <h3 className="text-lg font-semibold text-orange-600 mb-3">4. Privacy Policy</h3>
              <p className="text-gray-700 mb-4">
                Our Privacy Policy explains how we collect, use, and protect your personal information. By using CoSync, you consent to the data practices described in our Privacy Policy.
              </p>

              <h3 className="text-lg font-semibold text-orange-600 mb-3">5. Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of CoSync, including but not limited to text, graphics, logos, and software, are owned by CoSync and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-lg font-semibold text-orange-600 mb-3">6. Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                CoSync shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>

              <h3 className="text-lg font-semibold text-orange-600 mb-3">7. Changes to Terms</h3>
              <p className="text-gray-700">
                We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of CoSync after any changes indicates your acceptance of the new terms.
              </p>
            </>
          )}

          {activeSection !== "Terms" && (
            <>
              <h3 className="text-lg font-semibold text-orange-600 mb-3">{sectionContent[activeSection].title}</h3>
              <p className="text-gray-700">{sectionContent[activeSection].content}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terms;