import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfServicePage() {
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Last updated: April 15, 2023
          </p>
        </div>

        <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10 mb-16">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-purple-600 hover:prose-a:text-purple-500 prose-a:no-underline">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Netwok mobile application and website
              (collectively, the &quot;Service&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to
              these Terms, please do not use the Service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and
              Netwok, Inc. (&quot;Netwok,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;) regarding your use of the Service.
            </p>

            <h2>2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make
              changes, we will provide notice by posting the updated Terms on
              the Service and updating the &quot;Last updated&quot; date. Your
              continued use of the Service after any such changes constitutes
              your acceptance of the new Terms.
            </p>

            <h2>3. Eligibility</h2>
            <p>
              You must be at least 18 years old to use the Service. By using the
              Service, you represent and warrant that you are 18 years of age or
              older and have the legal capacity to enter into these Terms.
            </p>

            <h2>4. Account Registration</h2>
            <p>
              To use certain features of the Service, you may need to create an
              account. You agree to provide accurate, current, and complete
              information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and
              for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use of your account.
            </p>

            <h2>5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Service for any illegal purpose or in violation of any
                local, state, national, or international law
              </li>
              <li>
                Harass, abuse, or harm another person, or to threaten to do any
                of the foregoing
              </li>
              <li>
                Impersonate any person or entity or falsely state or otherwise
                misrepresent your affiliation with a person or entity
              </li>
              <li>
                Interfere with or disrupt the Service or servers or networks
                connected to the Service
              </li>
              <li>
                Use the Service to send unsolicited communications, promotions,
                or advertisements, or to spam, phish, or pharm other users
              </li>
              <li>
                Upload, transmit, or distribute any content that is unlawful,
                harmful, threatening, abusive, harassing, defamatory, vulgar,
                obscene, or otherwise objectionable
              </li>
              <li>
                Attempt to gain unauthorized access to the Service or to other
                users&apos; accounts
              </li>
            </ul>

            <h2>6. Venue Partners</h2>
            <p>
              The Service allows venue owners and operators (&quot;Venue
              Partners&quot;) to create digital networks for their physical
              spaces. Venue Partners are responsible for complying with all
              applicable laws and regulations related to their use of the
              Service.
            </p>
            <p>
              Netwok does not endorse any Venue Partner and is not responsible
              for the conduct of any Venue Partner or the quality of their
              services.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality
              are owned by Netwok and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>
            <p>
              You may not copy, modify, create derivative works of, publicly
              display, publicly perform, republish, or transmit any of the
              material on our Service, or distribute or otherwise use the
              Service in any way for any public or commercial purpose without
              our prior written consent.
            </p>

            <h2>8. User Content</h2>
            <p>
              The Service may allow you to post, link, store, share, and
              otherwise make available certain information, text, graphics,
              videos, or other material (&quot;User Content&quot;). You are
              responsible for the User Content that you post on or through the
              Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting User Content on or through the Service, you grant us
              the right to use, modify, publicly perform, publicly display,
              reproduce, and distribute such User Content on and through the
              Service. You retain any and all of your rights to any User Content
              you submit, post, or display on or through the Service and you are
              responsible for protecting those rights.
            </p>

            <h2>9. Privacy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy,
              which is incorporated into these Terms by reference. Please review
              our <Link href="/privacy">Privacy Policy</Link> to understand our
              practices.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the
              Service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue
              using the Service or contact us to request account deletion.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              In no event shall Netwok, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul>
              <li>
                Your access to or use of or inability to access or use the
                Service
              </li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content
              </li>
            </ul>

            <h2>12. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is
              provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
              basis. The Service is provided without warranties of any kind,
              whether express or implied, including, but not limited to, implied
              warranties of merchantability, fitness for a particular purpose,
              non-infringement, or course of performance.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the State of California, without regard to its conflict of
              law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@netwok.com">legal@netwok.com</a>.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            className="rounded-full border-purple-500/30 hover:bg-purple-500/10"
            asChild
          >
            <Link href="/privacy">Privacy Policy</Link>
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
