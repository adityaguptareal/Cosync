import {useState} from 'react';
import {motion} from 'framer-motion';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{opacity: 0, x: -30}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          <img
            src="/Contact.jpeg"
            alt="Contact support"
            className="rounded-2xl w-full h-[400px] object-cover bg-red-500 opacity-100"
          />
          <div className="mt-6 space-y-2 text-gray-700">
            <p><strong>📞 Phone:</strong> +91 987654XXXX</p>
            <p><strong>✉️ Email:</strong> support@cosync.com</p>
            <p><strong>📍 Address:</strong> Knowledge Park - III, Greater Noida, Uttar Pradesh </p>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 30}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-6">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;