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
  );
};

export default ContactForm;
