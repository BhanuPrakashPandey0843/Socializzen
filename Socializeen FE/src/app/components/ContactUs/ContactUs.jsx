import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* LEFT SIDE - IMAGE + CONTACT DETAILS */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde4a?auto=format&fit=crop&w=900&q=80"
            alt="Contact"
            className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
            
            {/* Contact Info */}
            <div className="space-y-4 text-white text-sm">
              
              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 shadow-md">
                  <FiPhone className="text-white text-lg" />
                </span>
                <a href="tel:4706011911" className="hover:underline font-medium text-white">
                  470-601-1911
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 shadow-md">
                  <FiMail className="text-white text-lg" />
                </span>
                <a href="mailto:irish-geoff@veilmail.io" className="hover:underline font-medium text-white">
                  irish-geoff@veilmail.io
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 shadow-md">
                  <FiMapPin className="text-white text-lg" />
                </span>
                <p className="font-medium text-white">
                  654 Sycamore Avenue, Meadowville, WA 76543
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Have any questions or need support? Fill out the form and we’ll get back to you as soon as possible.
          </p>

          {/* FORM */}
          <form action="https://fabform.io/f/xxxxx" method="POST" className="space-y-4 text-sm">

            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="peer w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 placeholder-transparent text-sm"
                placeholder="Name"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-xs peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm transition-all">
                Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 placeholder-transparent text-sm"
                placeholder="Email"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-xs peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm transition-all">
                Email
              </label>
            </div>

            {/* PHONE */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                className="peer w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 placeholder-transparent text-sm"
                placeholder="Phone"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-xs peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm transition-all">
                Phone
              </label>
            </div>

            {/* PREFERRED METHOD */}
            <div>
              <h4 className="text-gray-700 font-medium mb-2 text-sm">Preferred Method</h4>
              <div className="flex gap-4 text-sm text-gray-700">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" name="preferred_contact" value="Email" className="text-indigo-600" />
                  Email
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" name="preferred_contact" value="Phone" className="text-indigo-600" />
                  Phone
                </label>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                required
                className="peer w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 placeholder-transparent h-24 resize-none text-sm"
                placeholder="Message"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-xs peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm transition-all">
                Message
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
