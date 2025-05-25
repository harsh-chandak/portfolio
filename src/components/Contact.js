import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(email)) newErrors.email = "Enter a valid email";
    if (message.trim().length < 10) newErrors.message = "Message must be at least 10 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    const formData = { name, email, message };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setStatus('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-white relative">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        <span className="relative inline-block">
          Get In Touch
          <span className="absolute left-0 -bottom-1 h-1 w-full bg-red-500"></span>
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 bg-gray-900 p-8 rounded-xl shadow-lg">
        {/* Contact Info Card */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="font-medium text-white">Email:</p>
              <a href="mailto:harshnchandak@gmail.com" className="hover:underline">
                harshnchandak@gmail.com
              </a>
            </div>
            <div>
              <p className="font-medium text-white">Phone:</p>
              <a href="tel:+14804064666" className="hover:underline">
                +1 480 406 4666
              </a>
            </div>
            <div>
              <p className="font-medium text-white">LinkedIn:</p>
              <a
                href="https://www.linkedin.com/in/hnchandak/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/hnchandak
              </a>
            </div>
            <div>
              <button
                onClick={() => setShowResume(true)}
                className="inline-block mt-10 px-6 py-2 border border-red-400 bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold rounded-md flex items-center justify-center"
              >
                📄 View My Resume
              </button>
            </div>

            {showResume && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
                <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl h-[90vh] relative">
                  <button
                    onClick={() => setShowResume(false)}
                    className="absolute top-1 right-1 text-black hover:text-red-500 text-xl"
                  >
                    ✖
                  </button>

                  <div className="w-full h-full">
                    <iframe
                      src="/Harsh_Chandak_Resume.pdf"
                      className="w-full h-full hidden sm:block"
                      frameBorder="0"
                    ></iframe>

                    {/* Mobile fallback */}
                    <div className="sm:hidden flex flex-col justify-center items-center h-full p-4 text-center">
                      <p className="text-gray-800 mb-4">
                        PDF preview isn't supported on some mobile devices.
                      </p>
                      <a
                        href="/Harsh_Chandak_Resume.pdf"
                        download
                        className="px-6 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600"
                      >
                        📄 Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Email Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold rounded-md flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-sm mt-2 text-center text-green-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
