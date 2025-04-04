import Link from "next/link"
import { ArrowRight, Bell, Globe, MessageSquare, QrCode, Shield, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/themeToggler"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-background to-background overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2 md:px-4">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="flex items-center justify-center rounded-lg">
              <Image src="/logo.svg" alt="logo" width={128} height={34} />
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://admin.netwok.app">Log In</Link>
            </Button>
            <Button
              size="sm"
              className="rounded-full px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0"
              asChild
            >
              <Link href="https://admin.netwok.app/register">Register</Link>
            </Button>
          </div>
          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button className="text-muted-foreground hover:text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 px-2 md:px-4">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0  bg-repeat opacity-[0.02]"></div>
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl"></div>
          <div className="absolute -left-64 -bottom-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-3xl"></div>
          <div className="container relative z-10 flex flex-col items-center text-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-sm mb-6 border border-purple-500/20">
              <span className="mr-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 h-2 w-2"></span>
              Redefining In-Venue Networking
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl leading-tight">
              Connect People in Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Physical Space
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
              Increase engagement, extend visit duration, and boost revenue by connecting visitors in your venue through
              digital networking.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-600/20"
                asChild
              >
                <Link href="https://admin.netwok.app/register">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 border-purple-500/30 hover:bg-purple-500/10 text-foreground"
                asChild
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-16 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-background/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
                <div className="relative z-10 flex items-center justify-center p-4">
                  <div className="w-full max-w-[900px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden">
                    {/* App Interface Mockup */}
                    <div className="relative">
                      {/* App Header */}
                      <div className=" p-4 text-white flex items-center justify-between rounded-t-lg">
                        <div className="flex items-center gap-2">
                          <Image src="/logo.svg" alt="logo" width={100} height={34} />
                        </div>
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5" />
                          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-sm font-bold">JD</span>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="bg-background/80 p-6">
                        <div className="mb-6">
                          <h3 className="text-lg font-bold mb-2">Nearby Connections</h3>
                          <p className="text-sm text-muted-foreground">12 people at The Golden Pub</p>
                        </div>

                        {/* User Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                              key={i}
                              className="bg-background rounded-lg p-4 border border-white/10 hover:border-purple-500/30 transition-all shadow-md"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center text-sm font-bold">
                                  {["A", "M", "S", "J", "K", "R"][i - 1]}
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {["Alex", "Maria", "Sam", "Jake", "Kate", "Ryan"][i - 1]}
                                  </div>
                                  <div className="text-xs text-muted-foreground">Just arrived</div>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-purple-600/10 text-purple-600 px-2 py-0.5 rounded-full">
                                  Music
                                </span>
                                <span className="text-xs bg-pink-600/10 text-pink-600 px-2 py-0.5 rounded-full">
                                  Travel
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Navigation */}
                        <div className="flex justify-around py-3 border-t border-white/10">
                          <div className="flex flex-col items-center">
                            <Users className="h-5 w-5 text-purple-600" />
                            <span className="text-xs mt-1">People</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <MessageSquare className="h-5 w-5 text-muted-foreground" />
                            <span className="text-xs mt-1">Chats</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <QrCode className="h-5 w-5 text-muted-foreground" />
                            <span className="text-xs mt-1">Scan</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <Globe className="h-5 w-5 text-muted-foreground" />
                            <span className="text-xs mt-1">Venues</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-50/5 to-background"></div>
          <div className="container relative z-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-background/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
                  <div className="relative z-10 p-4">
                    {/* Pub Scene with People Connecting */}
                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-8">
                          <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 px-4 py-2 rounded-lg text-white font-bold">
                            The Golden Pub
                          </div>
                          <div className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 px-3 py-1 rounded-lg text-white text-sm">
                            24 people connected
                          </div>
                        </div>

                        {/* People at tables */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                            <div className="flex justify-between mb-3">
                              <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                  <div
                                    key={i}
                                    className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600/70 to-pink-600/70 border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                                  >
                                    {["J", "K", "L"][i - 1]}
                                  </div>
                                ))}
                              </div>
                              <div className="text-xs bg-purple-600/20 text-purple-600 px-2 py-1 rounded-full">
                                Table 1
                              </div>
                            </div>
                            <div className="text-sm">
                              <span className="text-purple-600 font-medium">Interests:</span> Music, Travel, Food
                            </div>
                          </div>

                          <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                            <div className="flex justify-between mb-3">
                              <div className="flex -space-x-2">
                                {[1, 2].map((i) => (
                                  <div
                                    key={i}
                                    className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600/70 to-cyan-600/70 border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                                  >
                                    {["M", "N"][i - 1]}
                                  </div>
                                ))}
                              </div>
                              <div className="text-xs bg-blue-600/20 text-blue-600 px-2 py-1 rounded-full">Table 2</div>
                            </div>
                            <div className="text-sm">
                              <span className="text-blue-600 font-medium">Interests:</span> Sports, Tech, Gaming
                            </div>
                          </div>
                        </div>

                        {/* Active connections */}
                        <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-3">
                            <div className="font-medium">Active Connections</div>
                            <div className="text-xs bg-pink-600/20 text-pink-600 px-2 py-1 rounded-full">Live</div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-600/70 to-pink-600/70 flex items-center justify-center text-xs font-bold text-white">
                                  A
                                </div>
                                <span>Alex & Maria</span>
                              </div>
                              <div className="text-muted-foreground text-xs">5 min ago</div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-600/70 to-cyan-600/70 flex items-center justify-center text-xs font-bold text-white">
                                  J
                                </div>
                                <span>Jake & Sam</span>
                              </div>
                              <div className="text-muted-foreground text-xs">12 min ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-sm mb-6 border border-purple-500/20">
                  <span className="mr-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 h-2 w-2"></span>
                  The Concept
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Digital Connections in{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Physical Spaces
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Netwok bridges the gap between digital and physical worlds, allowing visitors at your venue to connect
                  with each other while respecting their privacy.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start group">
                    <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-3 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Increase Social Engagement</h3>
                      <p className="text-muted-foreground">
                        Help visitors connect with like-minded people at your venue
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-3 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Privacy-Focused</h3>
                      <p className="text-muted-foreground">Users control their information and who they connect with</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="rounded-2xl bg-gradient-to-br from-pink-600/20 to-orange-600/20 p-3 group-hover:from-pink-600/30 group-hover:to-orange-600/30 transition-all duration-300">
                      <QrCode className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Simple QR Code Access</h3>
                      <p className="text-muted-foreground">Visitors scan your venue&#39;s QR code to join the network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/5 to-background"></div>
          <div className="container relative z-10 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 py-1 text-sm mb-6 border border-blue-500/20">
                <span className="mr-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 h-2 w-2"></span>
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Powerful Tools for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Venues & Visitors
                </span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Netwok provides everything needed to enhance the social experience at your venue.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-600/10 group">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mb-6 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                  <QrCode className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">Custom QR Codes</h3>
                <p className="text-muted-foreground">
                  Generate unique QR codes for your venue that visitors can scan to join your network.
                </p>
              </div>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-600/10 group">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                  <MessageSquare className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">In-Venue Chat</h3>
                <p className="text-muted-foreground">
                  Enable visitors to chat with each other while at your venue, fostering connections and community.
                </p>
              </div>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-pink-500/30 transition-all hover:shadow-2xl hover:shadow-pink-600/10 group">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-600/20 to-orange-600/20 flex items-center justify-center mb-6 group-hover:from-pink-600/30 group-hover:to-orange-600/30 transition-all duration-300">
                  <Users className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">Interest Matching</h3>
                <p className="text-muted-foreground">
                  Help visitors find others with similar interests, creating meaningful connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-50/5 to-background"></div>
          <div className="container relative z-10 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 px-3 py-1 text-sm mb-6 border border-pink-500/20">
                <span className="mr-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 h-2 w-2"></span>
                Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                How{" "}
                <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Netwok Works
                </span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">A simple process for both venue owners and visitors.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="relative group flex flex-col h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <div className="relative bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 group-hover:border-purple-500/30 transition-all flex flex-col h-full">
                  <div className="absolute -top-5 left-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-600/30">
                    1
                  </div>
                  <div className="pt-4 flex-1 min-h-1/3 max-h-1/3">
                    <h3 className="text-xl font-medium mb-4">Venue Setup</h3>
                    <p className="text-muted-foreground mb-6">
                      Venue owners register and generate a unique QR code for their location.
                    </p>
                  </div>
                  <div className="flex justify-center max-h-2/3 min-h-2/3">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-4 w-full">
                      {/* Venue Setup Illustration */}
                      <div className="mx-auto w-full max-w-[200px]">
                        <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <QrCode className="h-5 w-5 text-purple-600" />
                              <span className="font-bold text-sm">Venue Dashboard</span>
                            </div>
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs">
                              <Zap className="h-3 w-3" />
                            </div>
                          </div>
                          <div className="space-y-3 mb-4">
                            <div className="h-2 w-3/4 bg-purple-600/20 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-purple-600/20 rounded-full"></div>
                          </div>
                          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3 flex items-center justify-center mb-4">
                            <QrCode className="h-16 w-16 text-purple-600" />
                          </div>
                          <div className="flex justify-center">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                              Generate QR Code
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group flex flex-col h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <div className="relative bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 group-hover:border-blue-500/30 transition-all flex flex-col h-full">
                  <div className="absolute -top-5 left-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-600/30">
                    2
                  </div>
                  <div className="pt-4 flex-1 min-h-1/3 max-h-1/3">
                    <h3 className="text-xl font-medium mb-4">Visitor Scan</h3>
                    <p className="text-muted-foreground mb-6">
                      Visitors scan the QR code to join the venue&#39;s network and create a profile.
                    </p>
                  </div>
                  <div className="flex justify-center min-h-2/3 max-h-2/3">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-4 w-full">
                      {/* Visitor Scan Illustration */}
                      <div className=" mx-auto w-full max-w-[200px]">
                        <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
                          <div className="flex justify-center mb-4">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 flex items-center justify-center">
                              <QrCode className="h-8 w-8 text-blue-600" />
                            </div>
                          </div>
                          <div className="text-center mb-4">
                            <div className="font-bold text-sm mb-1">Scan QR Code</div>
                            <div className="text-xs text-muted-foreground">to join The Golden Pub</div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-3 flex flex-col items-center gap-2 mb-4">
                            <div className="h-2 w-3/4 bg-blue-600/30 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-blue-600/30 rounded-full"></div>
                          </div>
                          <div className="flex justify-center">
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                              Join Network
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group flex flex-col h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/20 via-orange-600/20 to-yellow-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <div className="relative bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 group-hover:border-pink-500/30 transition-all flex flex-col h-full">
                  <div className="absolute -top-5 left-8 rounded-full bg-gradient-to-r from-pink-600 to-orange-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg shadow-pink-600/30">
                    3
                  </div>
                  <div className="pt-4 flex-1 min-h-1/3 max-h-1/3">
                    <h3 className="text-xl font-medium mb-4">Connect & Engage</h3>
                    <p className="text-muted-foreground mb-6">
                      Visitors connect with others, chat, and engage while at the venue.
                    </p>
                  </div>
                  <div className="flex justify-center min-h-2/3 max-h-2/3 ">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-600/10 to-orange-600/10 p-4 w-full">
                      {/* Connect & Engage Illustration */}
                      <div className="mx-auto w-full max-w-[200px] pb-6">
                        <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg ">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-600/30 to-orange-600/30 flex items-center justify-center text-xs font-bold">
                              A
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-sm">Alex</div>
                              <div className="text-xs text-muted-foreground">Music, Travel</div>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-600 to-orange-600 flex items-center justify-center text-white">
                              <MessageSquare className="h-4 w-4" />
                            </div>
                          </div>
                          <div className="space-y-2 mb-4">
                            <div className="bg-gradient-to-r from-pink-600/10 to-orange-600/10 p-2 rounded-lg text-xs">
                              <div className="font-medium mb-1">Hey! I noticed we both like jazz music.</div>
                              <div className="text-muted-foreground text-[10px]">2 min ago</div>
                            </div>
                            <div className="bg-gradient-to-r from-pink-600/20 to-orange-600/20 p-2 rounded-lg text-xs ml-auto max-w-[80%]">
                              <div className="font-medium mb-1">Yes! Are you going to the live show tonight?</div>
                              <div className="text-muted-foreground text-[10px]">Just now</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-1 h-6 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full"></div>
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-600 to-orange-600 flex items-center justify-center text-white">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 12h14M12 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-50/5 to-background"></div>
          <div className="container relative z-10 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-sm mb-6 border border-purple-500/20">
                <span className="mr-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 h-2 w-2"></span>
                Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Simple{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Pricing
                </span>{" "}
                for Venues
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Choose the plan that works best for your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-600/10 flex flex-col">
                <h3 className="text-xl font-medium mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-4">
                  $29<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-muted-foreground mb-8">Perfect for small pubs and cafes.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Up to 50 concurrent users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Standard QR code</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-purple-500/30 hover:bg-purple-500/10 text-foreground"
                >
                  Get Started
                </Button>
              </div>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/30 flex flex-col relative scale-105 md:scale-110 z-10">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-medium rounded-full shadow-lg shadow-purple-600/30">
                  Popular
                </div>
                <h3 className="text-xl font-medium mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-4">
                  $79<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-muted-foreground mb-8">Ideal for busy pubs and restaurants.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Up to 200 concurrent users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Custom branded QR code</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Promotional messaging</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-600/20">
                  Get Started
                </Button>
              </div>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-600/10 flex flex-col">
                <h3 className="text-xl font-medium mb-2">Enterprise</h3>
                <div className="text-4xl font-bold mb-4">
                  $199<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-muted-foreground mb-8">For large venues and event organizers.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Comprehensive analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Fully customizable experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>API access</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-purple-500/30 hover:bg-purple-500/10 text-foreground"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 z-0"></div>
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl"></div>
          <div className="absolute -left-64 -bottom-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-3xl"></div>
          <div className="container relative z-10 text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Venue&#39;s Social Experience?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
              Join thousands of venues already using Netwok to increase engagement, extend visit duration, and boost
              revenue.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-600/20"
              asChild
            >
              <Link href="https://admin.netwok.app/register">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 font-bold text-xl mb-6">
                <div className="flex items-center justify-center rounded-lg ">
                  <Image src="/logo.svg" alt="logo" width={128} height={34} />
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Connecting people in physical spaces through digital networking.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-2 hover:from-purple-600/20 hover:to-pink-600/20 transition-all"
                >
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-2 hover:from-purple-600/20 hover:to-pink-600/20 transition-all"
                >
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"></path>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path>
                    <circle cx="18.406" cy="5.594" r="1.44"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-2 hover:from-purple-600/20 hover:to-pink-600/20 transition-all"
                >
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Product
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Netwok. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

