<<<<<<< HEAD
import { useState } from "react";

const emptyForm = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = `Hello, I am ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918826297238?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormData(emptyForm);
  };

  const inputClass = (field) =>
    `w-full border bg-[#0d1218] px-4 py-3 text-white placeholder:text-slate-600 transition focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/30 ${
      errors[field] ? "border-rose-400" : "border-white/15"
    }`;

  return (
    <form
      className="border border-white/10 bg-[#10151b] p-5 sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
          Send a message
        </p>
        <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
          Let's start a conversation.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Submitting opens WhatsApp with your message ready to send.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm text-slate-200">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass("name")}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm text-rose-300">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm text-slate-200">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass("email")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="contact-email-error" className="text-sm text-rose-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm text-slate-200">
          What would you like to build?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${inputClass("message")} resize-y`}
          placeholder="Tell me a little about your idea or opportunity."
        />
        {errors.message && (
          <p id="contact-message-error" className="text-sm text-rose-300">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#10151b] sm:w-auto sm:text-base"
      >
        Continue to WhatsApp
      </button>
    </form>
=======
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/918826297238?text=${encodeURIComponent(
      `Hello, I am ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`
    )}`;
  
    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");
  
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };
  

  return (
    <div className="flex justify-center mt-10">
      <form
        className="flex flex-col w-11/12 max-w-2xl gap-5 p-10 bg-gray-900 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
       <h3 className="text-xl text-center text-white md:text-3xl font-orbitron">
        "Turn Ideas Into Reality – Get in Touch!"
      </h3>


        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg text-white font-saira">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`px-2 py-2 rounded-lg border-2 ${
              errors.name ? 'border-red-500' : 'border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-customCyan`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg text-white font-saira">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`px-4 py-2 rounded-lg border-2 ${
              errors.email ? 'border-red-500' : 'border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-customCyan`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lg text-white font-saira">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`px-4 py-2 rounded-lg border-2 ${
              errors.message ? 'border-red-500' : 'border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-customCyan`}
            placeholder="Enter your message"
            rows="5"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative animate-bounce inline-block px-4 py-2 mt-5 text-sm font-medium text-white transition-all duration-300 border-2 border-transparent rounded-full sm:px-6 sm:py-3 sm:text-lg lg:text-xl font-orbitron bg-customCyan hover:border-customCyan hover:bg-transparent hover:text-customCyan"
        >
          Get In Touch
        </button>
      </form>
    </div>
>>>>>>> origin/main
  );
};

export default ContactForm;
