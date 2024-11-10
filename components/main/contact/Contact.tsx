"use client";

import { useState, FormEvent } from "react";
import Container from "../../shared/Container";
import Topic from "../../shared/Topic";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

type ContactType = "sayHi" | "getQuote";

interface FormData {
  contactType: ContactType;
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    contactType: "sayHi",
    name: "",
    email: "",
    message: "",
  });
  const handleContactSubmit = (type: ContactType) => {
    trackEvent("Contact Form Submit", {
      SubmitType: type,
      Platform: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    handleContactSubmit(formData.contactType);
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (type: ContactType) => {
    setFormData((prev) => ({
      ...prev,
      contactType: type,
    }));
  };

  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row mt-20">
        <Topic
          title="Contact"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
      </div>

      <div className="relative flex flex-col items-center md:flex-row my-6  bg-zinc-100 dark:bg-background rounded-[45px] border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] border">
        <div className="row items-center py-12 px-4 md:px-20 md:w-8/12 md:py-10">
          <form onSubmit={handleSubmit} className="space-y-8 md:w-full">
            <div className="flex">
              <div className="flex items-center me-4">
                <input
                  id="sayHi"
                  type="radio"
                  name="contactType"
                  checked={formData.contactType === "sayHi"}
                  onChange={() => handleRadioChange("sayHi")}
                  className="w-4 h-4 text-lime bg-black border-black focus:ring-lime"
                />
                <label htmlFor="sayHi" className="ms-2 text-base font-medium ">
                  Say Hi
                </label>
              </div>
              <div className="flex items-center me-4 mx-8 md:mx-20">
                <input
                  id="getQuote"
                  type="radio"
                  name="contactType"
                  checked={formData.contactType === "getQuote"}
                  onChange={() => handleRadioChange("getQuote")}
                  className="w-4 h-4 text-lime bg-black border-black focus:ring-lime"
                />
                <label
                  htmlFor="getQuote"
                  className="ms-2 text-base font-medium "
                >
                  Get a Quote
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-base font-medium "
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow-sm  border bg-gray-900 text-base rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block p-3 w-full text-base bg-gray-900 rounded-lg border shadow-sm focus:ring-black focus:border-black"
                placeholder="Email"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="block p-2.5 w-full text-base  bg-gray-900 rounded-lg shadow-sm border focus:ring-black focus:border-black"
                placeholder="Message"
                required
              />
            </div>

            <button
              type="submit"
              className="hover:border:1px_solid_rgba(255,255,255,.1)] hover:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-full py-5 bg-gray-800 rounded-[14px] justify-center gap-2.5 inline-flex hover:bg-gray-800 transition-colors"
            >
              <div className="text-center text-white text-xl font-normal leading-7">
                Send Message
              </div>
            </button>
          </form>
        </div>

        <div className="hidden md:grid md:justify-items-end md:w-4/12 md:py-2 invert">
          <Image
            src="./clients/contact.svg"
            alt="contact illustration"
            className="w-[80%]"
            width={400}
            height={400}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
