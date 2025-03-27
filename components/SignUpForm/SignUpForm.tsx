"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Enter a valid email").min(1, "Email is required"),
  fullName: z.string().min(1, "Name is required").max(100, "Name is too long")
});

export default function SignUpForm() {
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState(""); // Honeypot

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (company.trim()) {
      // Don't submit if honeypot is filled
      console.warn("Honeypot triggered. Likely bot submission.");
      setStatus("Spam detected.");
      return;
    }

    setStatus("Submitting...");

    try {
      const res = await fetch("https://9jd4rekb97.execute-api.us-east-1.amazonaws.com/prod/submit", {
        method: "POST",
        body: JSON.stringify({ ...values, company }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.ok) {
        setStatus(`✅ Success! We'll be in touch soon.`);
        form.reset();
        setCompany("");
      } else {
        const errorText = await res.text();
        console.error("Server error:", errorText);
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("❌ Network error. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md w-full mx-auto p-4 sm:p-6 md:p-8">
        {/* Honeypot field for spam prevention */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ display: "none" }}
        />

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Amy Johnson" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="amy.johnson@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          Sign Up
        </Button>

        {status && <p className="text-sm pt-2">{status}</p>}
      </form>
    </Form>
  );
}
