import React from "react";

const TermsOfService = () => {
  return (
        <div className="size-full place-self-center p-20 bg-transparent border-none text-[#FFFF99] drop-shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                <p className="mb-4 italic">Effective Date: Mar 25, 2025</p>

                <p className="mb-4">
                  Welcome to one NxtBuck! These Terms of Service (&quot;Terms&quot;) govern your use of this and other related platforms (&quot;Services&quot;) operated by NxtBuck Inc. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By using any of our Services, you agree to these Terms. If you do not agree, please do not use our Services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Service</h2>
                <ul className="list-disc list-inside mb-4">
                  <li>You must be 18 years or older</li>
                  <li>Provide accurate information</li>
                  <li>Use the Service only for lawful purposes</li>
                </ul>
                <p className="mb-4">You may not:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Interfere with system integrity or security</li>
                  <li>Attempt to access restricted data or code</li>
                  <li>Resell or redistribute our Service</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Connected Accounts</h2>
                <p className="mb-4">
                  When you connect your ad or revenue accounts (e.g., Meta, Google, Stripe), you authorize us to access data strictly for providing analytics and performance metrics. You can disconnect at any time.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Subscriptions and Payment</h2>
                <p className="mb-4">
                  Certain features are available via paid subscription. By subscribing:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>You agree to recurring billing unless canceled</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
                <p className="mb-4">
                  All software, content, and branding of our applications are the property of NxtBuck Inc. You may not copy, reverse engineer, or distribute without permission.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclaimer of Warranty</h2>
                <p className="mb-4">
                  The Service is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy or completeness of metrics provided.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, NxtBuck Inc. is not liable for indirect, incidental, or consequential damages arising from use of the Service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
                <p className="mb-4">
                  We may suspend or terminate your account if you violate these Terms or abuse the Service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to update these Terms. We will notify you of material changes.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact</h2>
                <p className="mb-4">
                  For any questions about these Terms, contact us at: <br />
                  <strong>support@nxtbuck.com</strong>
                </p>
        </div>
  );
};

export default TermsOfService;
