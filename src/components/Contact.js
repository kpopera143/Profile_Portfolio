"use client";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-10 border-mainColor border-2"
    >
      <form className="space-y-3">
        {/* Full Name */}
        <div>
          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-mainColor transition duration-300 ease-in-out"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-mainColor transition duration-300 ease-in-out"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full resize-none p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-mainColor transition duration-300 ease-in-out"
            rows="3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-1/2 py-2 px-4 bg-mainColor border-black text-white text-sm font-semibold rounded-md transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
