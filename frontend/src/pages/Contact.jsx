import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Social icons
import X from '../assets/x.svg';
import LinkedIn from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import GitHub from '../assets/github.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    console.error(error);
    alert('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const socialLinks = [
    {
      icon: X,
      label: 'X',
      href: 'https://x.com/niteshsh34',
      color: 'hover:text-blue-400'
    },
    {
      icon: LinkedIn,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/niteshsh34/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/niteshsh34/',
      color: 'hover:text-pink-500'
    },
    {
      icon: GitHub,
      label: 'GitHub',
      href: 'https://www.github.com/niteshsh34/',
      color: 'hover:text-gray-300'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-90" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
            Let's Connect!
          </h2>
          <p className="text-xl text-gray-300">
            Ready to bring your ideas to life? Let&apos;s chat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-gray-800/80 p-8 rounded-2xl shadow-2xl border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h4 className="text-2xl font-bold text-green-400 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-300">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full p-4 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full p-4 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project"
                  required
                  className="w-full p-4 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="bg-gray-800/80 p-8 rounded-2xl shadow-2xl border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let&apos;s Connect
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-col items-center p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-10 h-10 mb-2 object-contain group-hover:animate-bounce"
                  />
                  <span className="text-sm font-medium text-center">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
