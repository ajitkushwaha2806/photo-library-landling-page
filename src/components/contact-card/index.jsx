"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { trackLead, trackCTAClick } from "@/lib/analytics";

export default function ContactCard({ contactData = {} }) {
  const handleEmailClick = (email) => {
    trackLead({
      type: "support_inquiry",
      channel: "email",
      label: `Contact Email Click - ${email}`,
      email: email,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      className="border border-emerald-100 rounded-2xl shadow-sm backdrop-blur-md bg-white overflow-hidden max-w-6xl mx-auto mt-24 transition-all"
    >
      <div className="flex items-start gap-4 p-4 md:p-8 bg-gradient-to-r from-emerald-50/50 via-white to-transparent">
        <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700">
          <Users className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {contactData.title || "Contact Us"}
          </h3>
          <p className="text-sm text-gray-600">
            {contactData.description ||
              "We value your feedback and are here to assist you with any questions or concerns."}
          </p>
        </div>
      </div>

      <div className="rounded-xl p-4 md:p-6 mx-4 md:mx-6 mb-6 bg-gray-50/80 text-sm leading-relaxed text-gray-700">
        {contactData.content || (
          <div>
            <p className="mb-4">
              At FoodSnap.in, your satisfaction and trust are our top priorities. If
              you have any questions, feedback, or concerns regarding our
              services or how we handle your data on{" "}
              <a
                href="https://foodsnap.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("Foodsnap Link", "Contact Card", "https://foodsnap.in")}
                className="text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
              >
                foodsnap.in
              </a>
              , feel free to contact us. We&apos;re committed to being transparent
              and responsive to your needs.
            </p>
            <p>
              Whether you&apos;re looking for clarity on a specific section of our
              policy, want to better understand your subscription rights, or have ideas
              to improve your experience, we’re listening. Reach out to our
              support team anytime at{" "}
              <a
                href="mailto:support@foodsnap.in"
                onClick={() => handleEmailClick("support@foodsnap.in")}
                className="text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
              >
                support@foodsnap.in
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
