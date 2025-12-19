import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-8 md:p-10 transform hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Envoyez-nous un message
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
      </div>

      <form className="space-y-6">
        <div className="form-group">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none resize-none"
            placeholder="Dites-nous comment nous pouvons vous aider..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
