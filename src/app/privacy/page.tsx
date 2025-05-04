import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-repeat opacity-[0.02]"></div>
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
            Privacy{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Last updated: April 15, 2023
          </p>
        </div>

        <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10 mb-16">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-purple-600 hover:prose-a:text-purple-500 prose-a:no-underline">
            <h2>Introduction</h2>
            <p>
              At Netwok, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our mobile application and website
              (collectively, the &quot;Service&quot;).
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing and using
              our Service, you acknowledge that you have read, understood, and
              agree to be bound by all the terms of this Privacy Policy. If you
              do not agree with the terms of this Privacy Policy, please do not
              access the Service.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect several types of information from and about users
              of our Service, including:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> This includes information
                that can be used to identify you, such as your name, email
                address, and profile information that you choose to share.
              </li>
              <li>
                <strong>Location Information:</strong> With your consent, we
                collect your location information when you use our Service to
                connect you with others at the same venue.
              </li>
              <li>
                <strong>Usage Information:</strong> We collect information about
                how you use our Service, including your interactions with other
                users, venues you visit, and features you use.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information
                about the device you use to access our Service, including device
                type, operating system, and unique device identifiers.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We may use the information we collect from you for various
              purposes, including to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>
                Connect you with other users at the same venue based on your
                preferences
              </li>
              <li>
                Personalize your experience and deliver content relevant to your
                interests
              </li>
              <li>
                Communicate with you about updates, promotions, and other news
                about our Service
              </li>
              <li>
                Monitor and analyze usage patterns and trends to enhance the
                user experience
              </li>
              <li>Protect the security and integrity of our Service</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>
                <strong>With Other Users:</strong> When you use our Service,
                certain information (such as your profile information and
                interests) may be visible to other users at the same venue.
              </li>
              <li>
                <strong>With Venue Partners:</strong> We may share aggregated,
                anonymized data with venue partners to help them understand user
                engagement and improve their services.
              </li>
              <li>
                <strong>With Service Providers:</strong> We may share your
                information with third-party vendors who provide services on our
                behalf, such as hosting, data analysis, and customer service.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities.
              </li>
            </ul>

            <h2>Your Privacy Choices</h2>
            <p>
              We respect your privacy choices and provide you with control over
              your information:
            </p>
            <ul>
              <li>
                <strong>Profile Information:</strong> You can update or delete
                your profile information at any time through the app settings.
              </li>
              <li>
                <strong>Location Permissions:</strong> You can enable or disable
                location permissions through your device settings.
              </li>
              <li>
                <strong>Communication Preferences:</strong> You can opt out of
                receiving promotional communications from us by following the
                unsubscribe instructions in our emails.
              </li>
              <li>
                <strong>Account Deletion:</strong> You can request to delete
                your account and associated data by contacting us at
                privacy@netwok.com.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your information from unauthorized access, disclosure,
              alteration, and destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our Service is not intended for children under the age of 18. We
              do not knowingly collect personal information from children under
              18. If you are a parent or guardian and believe that your child
              has provided us with personal information, please contact us so
              that we can delete such information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a href="">privacy@netwok.com</a>.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            className="rounded-full border-purple-500/30 hover:bg-purple-500/10"
            asChild
          >
            <Link href="/terms">Terms of Service</Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-purple-500/30 hover:bg-purple-500/10"
            asChild
          >
            <Link href="/cookies">Cookie Policy</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
