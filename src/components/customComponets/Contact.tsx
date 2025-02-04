import React, { HtmlHTMLAttributes } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { sendMail } from "@/actions/sendMail";
import { FaTriangleExclamation } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

const Contact = () => {
  const [isPending, startTransition] = useTransition();
  const [showSuccess, setShowSuccess] = useState<any>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    startTransition(async () => {
      let response = await sendMail(formData);

      if (response.success) {
        setShowSuccess(response);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(
          () =>
            setShowSuccess((prevState) => ({
              ...prevState,
              success: false,
            })),
          3000
        );
      } else {
        setShowSuccess(response);
      }
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br  from-purple-950/40 via-gray-900 to-gray-900/90 text-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1   bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out - I&apos;m always open to discussing new opportunities.
            </p>
          </div>

          {showSuccess.success && (
            <div className="lg:block hidden ">
              <div className="flex  mb-6 p-4 gap-x-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                <CiCircleCheck size={28} />
                <p className="text-lg">
                  {showSuccess.message && showSuccess.message}
                </p>
              </div>
            </div>
          )}
          {showSuccess.error && (
            <div className="lg:block hidden ">
              <div className="flex mb-6 p-4 gap-x-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                <FaTriangleExclamation size={28} />
                <p className="text-lg ">
                  {showSuccess.message && showSuccess.message}
                </p>
              </div>
            </div>
          )}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Cards */}
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors group lg:mt-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:mabdullahqureshi583+portfolio@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors break-all"
                    >
                      mabdullahqureshi583+portfolio@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors group">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+923243218965"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      +92 324 3218965
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors group">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-400">
                      Nazimabad, Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {showSuccess.success && (
                <div className="flex lg:hidden mb-6 p-4 gap-x-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                  <CiCircleCheck size={28} />
                  <p className="text-lg">
                    {showSuccess.message && showSuccess.message}
                  </p>
                </div>
              )}
              {showSuccess.error && (
                <div className="flex lg:hidden mb-6 p-4 gap-x-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                  <FaTriangleExclamation size={28} />
                  <p className="text-lg">
                    {showSuccess.message && showSuccess.message}
                  </p>
                </div>
              )}
              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 placeholder-gray-500 outline-none transition-colors"
                      placeholder="Your name..."
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 placeholder-gray-500 outline-none transition-colors"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 placeholder-gray-500 outline-none transition-colors"
                    placeholder="E.g: Project Inquiry, Feedback, Collaboration"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 placeholder-gray-500 outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full md:mx-auto md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
