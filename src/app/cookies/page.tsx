import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-[0.02]"></div>
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
                Cookie{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">Last updated: April 15, 2023</p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10 mb-16">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-purple-600 hover:prose-a:text-purple-500 prose-a:no-underline">
                <h2>Introduction</h2>
                <p>
                  This Cookie Policy explains how Netwok, Inc. (&quot;Netwok,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
                  technologies to recognize you when you visit our mobile application and website (collectively, the
                  &quot;Service&quot;). It explains what these technologies are and why we use them, as well as your rights to
                  control our use of them.
                </p>

                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a
                  website. Cookies are widely used by website owners to make their websites work, or to work more
                  efficiently, as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, Netwok) are called &quot;first-party cookies.&quot; Cookies set
                  by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable
                  third-party features or functionality to be provided on or through the website (e.g., advertising,
                  interactive content, and analytics). The parties that set these third-party cookies can recognize your
                  device both when it visits the website in question and also when it visits certain other websites.
                </p>

                <h2>Why Do We Use Cookies?</h2>
                <p>
                  We use first-party and third-party cookies for several reasons. Some cookies are required for
                  technical reasons in order for our Service to operate, and we refer to these as &quot;essential&quot; or
                  &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our
                  users to enhance the experience on our Service. Third parties serve cookies through our Service for
                  advertising, analytics, and other purposes.
                </p>
                <p>
                  The specific types of first and third-party cookies served through our Service and the purposes they
                  perform are described below:
                </p>

                <h3>Essential Cookies</h3>
                <p>
                  These cookies are strictly necessary to provide you with services available through our Service and to
                  use some of its features, such as access to secure areas. Because these cookies are strictly necessary
                  to deliver the Service, you cannot refuse them without impacting how our Service functions.
                </p>

                <h3>Performance and Functionality Cookies</h3>
                <p>
                  These cookies are used to enhance the performance and functionality of our Service but are
                  non-essential to their use. However, without these cookies, certain functionality may become
                  unavailable.
                </p>

                <h3>Analytics and Customization Cookies</h3>
                <p>
                  These cookies collect information that is used either in aggregate form to help us understand how our
                  Service is being used or how effective our marketing campaigns are, or to help us customize our
                  Service for you.
                </p>

                <h3>Advertising Cookies</h3>
                <p>
                  These cookies are used to make advertising messages more relevant to you. They perform functions like
                  preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in
                  some cases selecting advertisements that are based on your interests.
                </p>

                <h2>How Can You Control Cookies?</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                  preferences by clicking on the appropriate opt-out links provided in the cookie table above.
                </p>
                <p>
                  You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                  cookies, you may still use our Service though your access to some functionality and areas of our
                  Service may be restricted. As the means by which you can refuse cookies through your web browser
                  controls vary from browser to browser, you should visit your browser&apos;s help menu for more information.
                </p>
                <p>
                  In addition, most advertising networks offer you a way to opt out of targeted advertising. If you
                  would like to find out more information, please visit{" "}
                  <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                    http://www.aboutads.info/choices/
                  </a>{" "}
                  or{" "}
                  <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
                    http://www.youronlinechoices.com
                  </a>
                  .
                </p>

                <h2>Do We Use Web Beacons?</h2>
                <p>
                  Cookies are not the only way to recognize or track visitors to a website. We may use other, similar
                  technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;).
                  These are tiny graphics files that contain a unique identifier that enables us to recognize when
                  someone has visited our Service or opened an email that we have sent them. This allows us, for
                  example, to monitor the traffic patterns of users from one page within our Service to another, to
                  deliver or communicate with cookies, to understand whether you have come to our Service from an online
                  advertisement displayed on a third-party website, to improve site performance, and to measure the
                  success of email marketing campaigns. In many instances, these technologies are reliant on cookies to
                  function properly, and so declining cookies will impair their functioning.
                </p>

                <h2>Do We Use Flash Cookies?</h2>
                <p>
                  Our Service may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or &quot;LSOs&quot;) to,
                  among other things, collect and store information about your use of our services, fraud prevention,
                  and for other site operations.
                </p>
                <p>
                  If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash
                  player to block Flash Cookies storage using the tools contained in the{" "}
                  <a
                    href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website Storage Settings Panel
                  </a>
                  . You can also control Flash Cookies by going to the{" "}
                  <a
                    href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Global Storage Settings Panel
                  </a>{" "}
                  and following the instructions.
                </p>

                <h2>Do We Use Third-Party Analytics?</h2>
                <p>
                  We use third-party analytics services, such as Google Analytics, to evaluate your use of the Service,
                  compile reports on activity, collect demographic data, analyze performance metrics, and collect and
                  evaluate other information relating to the Service and mobile and internet usage. These third parties
                  use cookies and other technologies to help analyze and provide us the data. By accessing and using the
                  Service, you consent to the processing of data about you by these analytics providers in the manner
                  and for the purposes set out in this Privacy Policy.
                </p>

                <h2>Changes to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                  cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
                  Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
                <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please contact us at{" "}
                  <a href="mailto:privacy@netwok.com">privacy@netwok.com</a>.
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" className="rounded-full border-purple-500/30 hover:bg-purple-500/10" asChild>
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
              <Button variant="outline" className="rounded-full border-purple-500/30 hover:bg-purple-500/10" asChild>
                <Link href="/terms">Terms of Service</Link>
              </Button>
            </div>
          </div>
        </section>
  )
}


