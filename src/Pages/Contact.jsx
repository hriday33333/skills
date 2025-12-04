import Swal from "sweetalert2";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show SweetAlert popup
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting SkillSwap. We will get back to you soon.',
      confirmButtonColor: '#3b82f6', // blue-500
    });

    // Optionally, reset the form
    e.target.reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 w-11/12 mx-auto">
      {/* Header Section */}
      <header className="text-center mb-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 text-center p-2 rounded-2xl">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto ">
          Have questions or want to collaborate? Send us a message and we’ll get back to you as soon as possible.
        </p>
      </header>

      {/* Contact Form & Info */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className=" text-white px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 text-center  rounded-lg hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-700">
            <strong>Email:</strong> support@skillswap.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> 123 SkillSwap St, Learning City, USA
          </p>
          <p className="text-gray-700">
            We’re here to answer your questions and help you get started with SkillSwap!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
