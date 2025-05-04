import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0  bg-repeat opacity-[0.02]"></div>
      <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl"></div>
      <div className="absolute -left-64 -bottom-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-3xl"></div>
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-sm mb-6 border border-purple-500/20 hover:from-purple-500/20 hover:to-pink-500/20 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions about Netwok? We&apos;re here to help. Fill out the
            form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    className="bg-background/50 border-white/10 focus:border-purple-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    className="bg-background/50 border-white/10 focus:border-purple-500/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/50 border-white/10 focus:border-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  className="bg-background/50 border-white/10 focus:border-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="bg-background/50 border-white/10 focus:border-purple-500/50"
                />
              </div>
              <Button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-600/20">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-blue-500/30 transition-all">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">support@netwok.com</p>
                    <p className="text-muted-foreground">sales@netwok.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-3">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-pink-600/20 to-orange-600/20 p-3">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive
                    </p>
                    <p className="text-muted-foreground">
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-pink-500/30 transition-all">
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">
                    How quickly will I receive a response?
                  </h3>
                  <p className="text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 business
                    hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">
                    Do you offer technical support?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, our technical support team is available Monday through
                    Friday, 9am-5pm EST.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">
                    Can I schedule a demo?
                  </h3>
                  <p className="text-muted-foreground">
                    Contact our sales team to schedule a personalized demo of
                    the Netwok platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
