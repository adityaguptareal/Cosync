import { useState } from 'react';

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
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-700 mb-4">
            Have questions or feedback? We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-orange-600 mb-3">Our Office</h2>
            <p className="text-gray-700 mb-1">123 Collaboration Street</p>
            <p className="text-gray-700 mb-1">Suite 456</p>
            <p className="text-gray-700 mb-1">Tech City, TC 78910</p>
            <p className="text-gray-700 mb-4">United States</p>
            
            <h2 className="text-xl font-semibold text-orange-600 mb-3">Email</h2>
            <p className="text-gray-700 mb-1">info@cosync.example.com</p>
            
            <h2 className="text-xl font-semibold text-orange-600 mb-3 mt-4">Phone</h2>
            <p className="text-gray-700">(123) 456-7890</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;