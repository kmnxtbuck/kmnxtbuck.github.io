import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="size-full place-self-center p-20 bg-transparent border-none text-[#FFFF99] drop-shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4 italic">Effective Date: Mar 25, 2025</p>

        <p className="mb-4">
          NxtBuck Inc. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share your information when you use any of our services and applications (&quot;Services&quot;).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal Information: Name, email, contact details</li>
          <li>Account Connections: Platform-specific tokens and metadata (e.g., Meta, Stripe)</li>
          <li>Usage Data: Browser, IP address, time spent in app, etc.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and improve our Services</li>
          <li>To analyze usage trends and performance</li>
          <li>To communicate updates and respond to inquiries</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell your information. We may share your data with trusted third-party services for hosting, analytics, or platform integrations—strictly to provide our Services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Retention</h2>
        <p className="mb-4">
          We retain your data only as long as needed to provide our Services or comply with legal obligations. You may request deletion at any time.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Security</h2>
        <p className="mb-4">
          We use industry-standard measures to protect your data, including encryption and access controls.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have the right to access, correct, or delete your personal data. Contact us to exercise these rights.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates to this Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Material changes will be communicated via email or in-app notifications.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="mb-4">
          For privacy-related concerns, contact us at: <br />
          <strong>privacy@nxtbuck.com</strong>
        </p>
    </div>
  );
};

export default PrivacyPolicy;
