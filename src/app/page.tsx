import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { 
  Github, 
  Star, 
  Download, 
  Zap, 
  Shield, 
  Rocket, 
  Code, 
  Users, 
  BookOpen,
  Terminal,
  CheckCircle,
  ArrowRight,
  Heart,
  ExternalLink
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative text-lg">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/crepe-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold">Crepe</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-base font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#features" className="text-base font-medium hover:text-primary">
              Research
            </a>
            <a href="#community" className="text-base font-medium hover:text-primary">
              Community
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/crepe-logo.png"
                alt="Crepe Logo"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                Crepe
              </h1>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-muted-foreground max-w-3xl mx-auto">
              A Mobile Screen Data Collector
              <br />
              <span className="text-primary">Using Graph Query</span>
            </h2>
            
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crepe is an Android mobile data collector that scrapes screen information from apps 
              like Instagram, Uber, and web browsers for research purposes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-10 py-4" asChild>
              <a href="https://github.com/ND-SaNDwichLAB/crepe" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-6 w-6" />
                View Code
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-4" asChild>
              <a href="https://arxiv.org/abs/2406.16173" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-6 w-6" />
                Read Paper
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section - Moved here from later in the page */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crepe empowers researchers to collect mobile screen data through a simple, 
              participant-centered workflow.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="overview" className="text-lg py-3">Overview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="space-y-8">
                  <Card className="p-6">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center gap-2 font-serif text-2xl">
                        <Terminal className="h-6 w-6" />
                        For Researchers
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-muted-foreground mb-4">
                        <strong>Goal:</strong> Set up ethical mobile data collection studies without any programming skills.
                      </p>
                      <div className="bg-muted/90 p-6 rounded-lg text-lg">
                        <div className="text-muted-foreground mb-3">1. Choose which app to study (like Instagram or Uber)</div>
                        <div className="text-muted-foreground mb-3">2. Tap on the specific information you want to collect</div>
                        <div className="text-muted-foreground mb-3">3. Crepe creates a data collector automatically</div>
                        <div className="text-muted-foreground mb-3">4. Share the collector code with your participants</div>
                      </div>
                      <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        No programming skills needed - just point and click
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center gap-2 font-serif text-2xl">
                        <Users className="h-6 w-6" />
                        For Participants
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-muted-foreground mb-4">
                        <strong>Goal:</strong> Contribute to research while maintaining full control and transparency over your data.
                      </p>
                      <div className="bg-muted/90 p-6 rounded-lg text-lg">
                        <div className="text-muted-foreground mb-3">1. Enter the researcher's code to join their study</div>
                        <div className="text-muted-foreground mb-3">2. Yellow highlights show you when data is being collected</div>
                        <div className="text-muted-foreground mb-3">3. Check your personal dashboard to see all collected data</div>
                        <div className="text-muted-foreground mb-3">4. Leave any study instantly by removing the collector</div>
                      </div>
                      <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        You always know what's being collected and can stop anytime
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center gap-2 font-serif text-2xl">
                        <BookOpen className="h-6 w-6" />
                        What Can You Study?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-muted-foreground mb-4">
                        <strong>Goal:</strong> Understand how mobile apps and algorithms impact users in the real world.
                      </p>
                      <div className="bg-muted/90 p-6 rounded-lg text-lg">
                        <div className="text-muted-foreground mb-3">• Track what ads people see on social media</div>
                        <div className="text-muted-foreground mb-3">• Compare prices shown to different users</div>
                        <div className="text-muted-foreground mb-3">• See what content gets recommended to users</div>
                        <div className="text-muted-foreground mb-3">• Check if apps treat users fairly</div>
                      </div>
                      <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Tested with Instagram, Uber, and web browsers
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Research Innovation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Addressing key challenges in mobile screen data collection through novel technical approaches 
              and participant-centered design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <Zap className="h-16 w-16 text-primary mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Graph Query Language</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Novel query language using UI element relations and attributes for reliable data identification and collection
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <Shield className="h-16 w-16 text-primary mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Participant Transparency</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Visual highlights and data dashboards ensure participants know exactly what data is collected
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <Rocket className="h-16 w-16 text-primary mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Programming-by-Demonstration</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  No-code approach where researchers simply tap on target data to specify collection requirements
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <Code className="h-16 w-16 text-primary mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Android Accessibility Service</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Leverages Android's native accessibility framework for reliable screen data access
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <Users className="h-16 w-16 text-primary mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Participant Agency</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Opt-in participation with easy withdrawal and full control over data contributions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <BookOpen className="h-16 w-16 text-primary mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Deterministic Collection</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Reliable data collection without deep learning or OCR dependencies
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Community Section */}
      <section id="community" className="py-24 bg-muted/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Research Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with researchers, access the codebase, and contribute to mobile data collection research.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <Github className="h-16 w-16 text-primary mx-auto mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Open Source</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Access the full codebase and contribute to the development of Crepe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-base py-4" asChild>
                  <a href="https://github.com/ND-SaNDwichLAB/crepe" target="_blank" rel="noopener noreferrer">
                    View Code
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Research Team</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Learn about the researchers behind Crepe and their work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-base py-4" asChild>
                  <a href="https://toby.li/students/" target="_blank" rel="noopener noreferrer">
                    Meet the Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <CardHeader className="pb-6">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
                <CardTitle className="font-serif text-2xl mb-4">Research Paper</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Read the full research paper detailing Crepe's methodology and evaluation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-base py-4" asChild>
                  <a href="https://arxiv.org/abs/2406.16173" target="_blank" rel="noopener noreferrer">
                    Read Paper
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-serif font-semibold text-xl">Crepe</span>
              <span className="text-muted-foreground text-lg">- Mobile Screen Data Collector</span>
            </div>
            <div className="flex items-center gap-4 text-lg text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-5 w-5 text-red-500" />
              <span>for the research community</span>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border/40 text-center text-base text-muted-foreground">
            <p>© 2025 Crepe Research Project. The Sandwich Lab at the University of Notre Dame.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
} 