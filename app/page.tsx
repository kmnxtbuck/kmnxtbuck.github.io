"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import { useEffect } from 'react';
 
const LandingPage = () => {
    useEffect(() => {
        // Fire the Google Ads conversion event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-16958297809/eQdHCIS907AaENGtrJY_',
          });
        }
      }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-4">
      <div className="text-center w-full">
        <h1 className="text-3xl font-bold leading-tight mb-6">
          Track ROAS Across Platforms in Real-Time
        </h1>
      </div>

      <Card className="w-full max-w-4xl bg-slate-800 border border-slate-700">
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">🔌 Easy Integrations</h2>
            <p className="text-slate-300">
              Connect Meta, Google, TikTok, Reddit, Stripe and Shopify in seconds.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">📊 Real-Time Dashboard</h2>
            <p className="text-slate-300">
              Get instant insights on spend, revenue, ROAS and ROI across all your campaigns.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">📥 Slack Reports</h2>
            <p className="text-slate-300">
              Get recurring marketing performance reports directly in your Slack channel.
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

      <div className="text-center w-full">
        <SignUpForm />
      </div>

      <footer className="mt-20 text-sm text-slate-500 text-center">
        &copy; {new Date().getFullYear()} NxtBuck Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
