import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    organization: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      surname: "",
      email: "",
      organization: "",
      category: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[387px] bg-bg-colored overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-[215px] pt-[289px]">
          <h1 className="text-white font-raleway text-[32px] font-bold leading-[120%]">
            Contact us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-[120px] px-[215px] relative">
        {/* Decorative blur */}
        <div className="absolute bottom-0 right-0 w-[846px] h-[873px] rounded-full bg-gradient-to-br from-brand-primary-500/5 to-transparent backdrop-blur-sm opacity-30" />

        <div className="max-w-[822px] mx-auto relative z-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-border-default rounded-lg p-6 flex flex-col gap-6"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-text-default font-raleway text-base font-normal leading-[160%]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter name here"
                className="h-10 px-4 py-3 border border-border-default rounded-lg bg-white text-text-default placeholder:text-text-muted font-raleway text-base focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
              />
            </div>

            {/* Surname */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="surname"
                className="text-text-default font-raleway text-base font-normal leading-[160%]"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                placeholder="Enter surname here"
                className="h-10 px-4 py-3 border border-border-default rounded-lg bg-white text-text-default placeholder:text-text-muted font-raleway text-base focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-text-default font-raleway text-base font-normal leading-[160%]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email here"
                className="h-10 px-4 py-3 border border-border-default rounded-lg bg-white text-text-default placeholder:text-text-muted font-raleway text-base focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
              />
            </div>

            {/* Organization */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="organization"
                className="text-text-default font-raleway text-base font-normal leading-[160%]"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter organization here"
                className="h-10 px-4 py-3 border border-border-default rounded-lg bg-white text-text-default placeholder:text-text-muted font-raleway text-base focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
              />
            </div>

            {/* Feedback Category */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="category"
                className="text-text-default font-raleway text-base font-normal leading-[160%]"
              >
                Feedback Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="h-10 px-4 py-3 border border-border-default rounded-lg bg-white text-text-default placeholder:text-text-muted font-raleway text-base focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
              >
                <option value="">Select feedback category</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="technical">Technical Question</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-text-default font-raleway text-base font-normal leading-[160%]"
              >
                Share your feedback
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter message here"
                className="min-h-[80px] px-4 py-3 border border-border-default rounded-lg bg-white text-text-default placeholder:text-text-muted font-raleway text-base focus:outline-none focus:ring-2 focus:ring-brand-primary-500 resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-10 px-2 py-2 bg-brand-primary-500 text-white font-raleway text-base font-bold rounded-lg hover:bg-brand-primary-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
