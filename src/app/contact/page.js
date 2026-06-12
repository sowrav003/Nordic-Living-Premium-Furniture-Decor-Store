"use client";

import Title from "@/components/home/Title";
import { assets } from "@/lib/data";
import { Clock, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Most orders are delivered within 5–10 business days depending on your location.",
  },
  {
    question: "Do you offer assembly services?",
    answer: "Yes, assembly is available for selected furniture collections.",
  },
  {
    question: "Can I return an item?",
    answer:
      "Returns are accepted within 30 days of delivery in original condition.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We currently ship across Europe and selected international regions.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-14">
      <div className="bg-stone-100 py-20 px-6">
        <Title
          title="Contact Us"
          subTitle="Whether you're furnishing a home, planning a project, or simply have a question, we're here to help."
          align="center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={assets.contactImg}
              alt="Nordic Living Showroom"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div>
            <span className="uppercase text-xs text-stone-500">
              Visit Our Showroom
            </span>

            <h2 className="text-4xl font-serif mt-4 mb-6">
              Experience Nordic Living in person.
            </h2>

            <p className="text-stone-600 mb-10">
              Explore our furniture collections, discover materials up close,
              and receive personalized guidance from our design specialists.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-medium">Showroom</h4>
                  <p className="text-stone-500">Storgata 14</p>
                  <p className="text-stone-500">Oslo, Norway</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-stone-500">+47 22 00 00 00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-stone-500">hello@nordicliving.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-medium">Opening Hours</h4>
                  <p className="text-stone-500">Monday – Friday</p>
                  <p className="text-stone-500">10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="text-center mb-12">
          <span className="uppercase text-xs text-stone-500">
            Get In Touch
          </span>

          <h2 className="text-4xl font-serif mt-4">Send us a message</h2>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="border border-stone-300 px-5 py-4 outline-none focus:border-stone-900"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border border-stone-300 px-5 py-4 outline-none focus:border-stone-900"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-stone-300 px-5 py-4 outline-none focus:border-stone-900"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-stone-300 px-5 py-4 outline-none focus:border-stone-900"
          />

          <textarea
            rows={6}
            placeholder="Tell us how we can help..."
            className="w-full border border-stone-300 px-5 py-4 outline-none resize-none focus:border-stone-900"
          />

          <button
            type="submit"
            className="bg-stone-900 text-white px-10 py-4 hover:bg-stone-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="text-center mb-16">
          <span className="uppercase text-xs text-stone-500">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl font-serif mt-4">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-stone-200">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>

                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-6 pb-6 text-stone-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-stone-100 py-24 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[0.2em] text-xs text-stone-500">
            Stay Inspired
          </span>

          <h2 className="text-4xl font-serif mt-4 mb-6">Join our journal</h2>

          <p className="text-stone-600 mb-8">
            Receive design inspiration, new collection releases, and exclusive
            stories from the Nordic Living studio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-stone-300 px-5 py-4 bg-white min-w-[300px]"
            />

            <button className="bg-stone-900 text-white px-8 py-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
