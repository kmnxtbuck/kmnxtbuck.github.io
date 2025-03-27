import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Track Your Ad Spend ROI in Real-Time
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Connect your Meta Ads and Stripe accounts to automatically see your ad ROI. Stay in control of your marketing performance with one clean dashboard.
        </p>
        <SignUpForm />
      </div>

      <Card className="mt-16 w-full max-w-4xl bg-slate-800 border border-slate-700">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">🔌 Easy Integrations</h2>
            <p className="text-slate-300">
              Connect Meta, Google, Stripe, and Shopify in seconds using secure OAuth integrations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">📊 Real-Time Dashboard</h2>
            <p className="text-slate-300">
              Get instant insights on spend, revenue, ROAS, and ROI across all your campaigns.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">📥 Slack Reports</h2>
            <p className="text-slate-300">
              Get daily or weekly marketing performance reports directly in your Slack channel.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">🔒 Data Privacy First</h2>
            <p className="text-slate-300">
              {`Your data is encrypted and never shared. You're always in control.`}
            </p>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-20 text-sm text-slate-500 text-center">
        &copy; {new Date().getFullYear()} NxtBuck Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
