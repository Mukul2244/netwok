import Link from "next/link"
import { ArrowLeft, Award, Building, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (

        <section className="relative py-20 ">
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
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Netwok
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We&apos;re on a mission to transform how people connect in physical spaces, making every venue a hub for
                meaningful interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-background/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
                  <div className="relative z-10 p-6">
                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg overflow-hidden p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <div className="h-32 w-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4"></div>
                          <div className="h-4 w-3/4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full mb-2"></div>
                          <div className="h-3 w-1/2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full"></div>
                        </div>
                        <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <div className="h-32 w-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg mb-4"></div>
                          <div className="h-4 w-3/4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full mb-2"></div>
                          <div className="h-3 w-1/2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full"></div>
                        </div>
                        <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <div className="h-32 w-full bg-gradient-to-br from-pink-600/20 to-orange-600/20 rounded-lg mb-4"></div>
                          <div className="h-4 w-3/4 bg-gradient-to-r from-pink-600/30 to-orange-600/30 rounded-full mb-2"></div>
                          <div className="h-3 w-1/2 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-full"></div>
                        </div>
                        <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <div className="h-32 w-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg mb-4"></div>
                          <div className="h-4 w-3/4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full mb-2"></div>
                          <div className="h-3 w-1/2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <div className="space-y-6 text-lg">
                  <p>
                    Netwok was founded in 2022 by a team of tech enthusiasts who were frustrated by the paradox of
                    modern social life: we&apos;re more connected than ever digitally, yet increasingly isolated in physical
                    spaces.
                  </p>
                  <p>
                    Our founders noticed how people in cafes, bars, and events were often surrounded by others with
                    similar interests, yet remained strangers. They envisioned a platform that could bridge this gap,
                    helping people connect meaningfully in physical spaces while respecting privacy and personal
                    boundaries.
                  </p>
                  <p>
                    After months of development and testing in various venues across San Francisco, Netwok was born – a
                    platform that transforms how people connect in physical spaces, making every venue a hub for
                    meaningful interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Mission & Values
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We&apos;re guided by a set of core principles that shape everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-600/10 group">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mb-6 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                  <Users className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">Meaningful Connections</h3>
                <p className="text-muted-foreground">
                  We believe technology should enhance real-world interactions, not replace them. Our platform is
                  designed to facilitate genuine connections between people in physical spaces.
                </p>
              </div>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-600/10 group">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                  <Award className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">Privacy First</h3>
                <p className="text-muted-foreground">
                  We respect user privacy and give individuals control over their information. Our platform is built
                  with privacy at its core, ensuring users only share what they&apos;re comfortable with.
                </p>
              </div>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-pink-500/30 transition-all hover:shadow-2xl hover:shadow-pink-600/10 group">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-600/20 to-orange-600/20 flex items-center justify-center mb-6 group-hover:from-pink-600/30 group-hover:to-orange-600/30 transition-all duration-300">
                  <Building className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">Community Building</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to helping venues create vibrant communities. By facilitating connections between
                  visitors, we help transform spaces into thriving social hubs.
                </p>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind Netwok who are dedicated to transforming how people connect.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Co-Founder",
                  gradient: "from-purple-600/70 to-pink-600/70",
                  initial: "A",
                },
                {
                  name: "Maria Rodriguez",
                  role: "CTO & Co-Founder",
                  gradient: "from-blue-600/70 to-cyan-600/70",
                  initial: "M",
                },
                {
                  name: "David Chen",
                  role: "Head of Product",
                  gradient: "from-pink-600/70 to-orange-600/70",
                  initial: "D",
                },
                {
                  name: "Sarah Kim",
                  role: "Head of Design",
                  gradient: "from-purple-600/70 to-blue-600/70",
                  initial: "S",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`h-24 w-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-2xl font-bold text-white`}
                    >
                      {member.initial}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                className="rounded-full px-8 py-6 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-600/20 text-lg"
                asChild
              >
                <Link href="/contact">Get in Touch With Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

  )
}

