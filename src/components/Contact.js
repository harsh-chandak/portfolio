'use client';
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
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email';
    if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
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
    <section id="contact" className="bg-[#1e1e1e] font-mono text-sm text-gray-300">
      {/* VS Code Editor Shell */}
      <div className="border border-[#3c3c3c] rounded-md overflow-hidden shadow-lg">
        {/* File tab */}
        <div className="bg-[#2d2d2d] text-gray-300 px-4 py-2 flex items-center gap-2 border-b border-[#3c3c3c]">
          <span className="text-green-400">//</span>
          <span className="text-white">contact.js</span>
          <span className="animate-pulse text-white">▍</span>
        </div>

        {/* Code Editor Background */}
        <div className="bg-[#1e1e1e] px-4 py-6 grid grid-cols-[2rem_1fr]">
          {/* Line Numbers */}
          <div className="text-right pr-4 text-[#555] select-none">
            {[...Array(25)].map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code Content */}
          <div className="space-y-4">
            {/* Contact Info Card */}
            <div>
              <span className="text-[#569CD6]">const</span>{' '}
              <span className="text-[#9CDCFE]">contactInfo</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-white">{'{'}</span>
            </div>

            <div className="pl-6">
              <div>
                <span className="text-[#DCDCAA]">email</span>
                <span className="text-white">: </span>
                <a href="mailto:harshnchandak@gmail.com" className="text-[#CE9178] underline hover:text-[#d69d85]">
                  "harshnchandak@gmail.com"
                </a>
                <span className="text-white">,</span>
              </div>

              <div>
                <span className="text-[#DCDCAA]">phone</span>
                <span className="text-white">: </span>
                <a href="tel:+14804064666" className="text-[#CE9178] underline hover:text-[#d69d85]">
                  "+1 480 406 4666"
                </a>
                <span className="text-white">,</span>
              </div>

              <div>
                <span className="text-[#DCDCAA]">linkedin</span>
                <span className="text-white">: </span>
                <a
                  href="https://www.linkedin.com/in/hnchandak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CE9178] underline hover:text-[#d69d85]"
                >
                  "linkedin.com/in/hnchandak"
                </a>
              </div>
            </div>

            <div>
              <span className="text-white">{'}'}</span>
            </div>



            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 font-mono text-sm text-[#d4d4d4] space-y-4">
              <div>
                <span className="text-[#569CD6]">function</span>{' '}
                <span className="text-[#DCDCAA]">sendMessage</span>
                <span className="text-white">()</span>{' '}
                <span className="text-white">{'{'}</span>
              </div>

              <div className="pl-6 space-y-4">
                <input
                  placeholder="// Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white px-4 py-2 rounded focus:ring-2 ring-red-500"
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}

                <input
                  placeholder="// Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white px-4 py-2 rounded focus:ring-2 ring-red-500"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}

                <textarea
                  placeholder="// Your Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white px-4 py-2 rounded focus:ring-2 ring-red-500"
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-[#007acc] hover:bg-[#005f99] text-white font-semibold rounded w-full"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              <div>
                <span className="text-white">{'}'}</span>
              </div>

              {status && (
                <p className="text-green-400 text-sm text-center">{status}</p>
              )}
            </form>

          </div>
        </div>
      </div>

      {/* Resume Modal */}
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
              />
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
    </section>
  );
}
