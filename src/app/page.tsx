import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  ExternalLink,
  Menu,
  FileText
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
      <nav className="sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold">Crepe</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="nav-link text-sm lg:text-base font-medium">
              How It Works
            </a>
            <a href="#features" className="nav-link text-sm lg:text-base font-medium">
              Research
            </a>
            <a href="#community" className="nav-link text-sm lg:text-base font-medium">
              Community
            </a>
            <ThemeToggle />
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <a href="#how-it-works" className="text-lg font-medium hover:text-primary transition-colors">
                    How It Works
                  </a>
                  <a href="#features" className="text-lg font-medium hover:text-primary transition-colors">
                    Research
                  </a>
                  <a href="#community" className="text-lg font-medium hover:text-primary transition-colors">
                    Community
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <Image
                src="/crepe-logo.png"
                alt="Crepe Logo"
                width={150}
                height={127}
                className="mx-auto sm:w-[200px] sm:h-[170px]"
              />
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                Crepe
              </h1>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground max-w-3xl mx-auto">
              A Mobile Screen Data Collector
              <br />
              <span className="text-primary">Using Graph Query</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crepe is an Android mobile data collector that scrapes screen information from apps 
              like Instagram, Uber, and web browsers for research purposes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4" asChild>
              <a href="https://github.com/ND-SaNDwichLAB/crepe" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                View Code
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4" asChild>
              <a href="https://arxiv.org/abs/2406.16173" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Read Paper
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-20 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Crepe empowers researchers to collect mobile screen data through a simple, 
              participant-centered workflow.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="overview" className="text-base sm:text-lg py-2 sm:py-3">Overview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6 sm:mt-8">
                <div className="space-y-6 sm:space-y-8">
                  <Card className="p-4 sm:p-6">
                    <CardHeader className="pb-4 sm:pb-6">
                      <CardTitle className="flex items-center gap-2 font-serif text-xl sm:text-2xl">
                        <Terminal className="h-5 w-5 sm:h-6 sm:w-6" />
                        For Researchers
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-base sm:text-lg text-muted-foreground mb-4">
                        Set up ethical mobile data collection studies without any programming skills.
                      </p>
                      <div className="bg-muted/90 p-4 sm:p-6 rounded-lg text-base sm:text-lg">
                        <div className="text-muted-foreground mb-3">1. Choose which app to study (like Instagram or Uber)</div>
                        <div className="text-muted-foreground mb-3">2. Tap on the specific information you want to collect</div>
                        <div className="text-muted-foreground mb-3">3. Crepe creates a data collector automatically</div>
                        <div className="text-muted-foreground mb-3">4. Share the collector code with your participants</div>
                      </div>
                      <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                        No programming skills needed - just point and click
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 sm:p-6">
                    <CardHeader className="pb-4 sm:pb-6">
                      <CardTitle className="flex items-center gap-2 font-serif text-xl sm:text-2xl">
                        <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                        For Participants
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-base sm:text-lg text-muted-foreground mb-4">
                        Contribute to research while maintaining full control and transparency over your data.
                      </p>
                      <div className="bg-muted/90 p-4 sm:p-6 rounded-lg text-base sm:text-lg">
                        <div className="text-muted-foreground mb-3">1. Enter the researcher's code to join their study</div>
                        <div className="text-muted-foreground mb-3">2. Yellow highlights show you when data is being collected</div>
                        <div className="text-muted-foreground mb-3">3. Check your personal dashboard to see all collected data</div>
                        <div className="text-muted-foreground mb-3">4. Leave any study instantly by removing the collector</div>
                      </div>
                      <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                        You always know what's being collected and can stop anytime
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 sm:p-6">
                    <CardHeader className="pb-4 sm:pb-6">
                      <CardTitle className="flex items-center gap-2 font-serif text-xl sm:text-2xl">
                        <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                        What Can You Study?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-base sm:text-lg text-muted-foreground mb-4">
                        Understand how mobile apps and algorithms impact users in the real world.
                      </p>
                      <div className="bg-muted/90 p-4 sm:p-6 rounded-lg text-base sm:text-lg">
                        <div className="text-muted-foreground mb-3">• Track what ads people see on social media</div>
                        <div className="text-muted-foreground mb-3">• Compare prices shown to different users</div>
                        <div className="text-muted-foreground mb-3">• See what content gets recommended to users</div>
                        <div className="text-muted-foreground mb-3">• Check if apps treat users fairly</div>
                      </div>
                      <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
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
      <section id="features" className="py-16 sm:py-20 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Research Innovation</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Addressing key challenges in mobile screen data collection through novel technical approaches 
              and participant-centered design.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <Zap className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Graph Query Language</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Novel query language using UI element relations and attributes for reliable data identification and collection
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Participant Transparency</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Visual highlights and data dashboards ensure participants know exactly what data is collected
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <Rocket className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Programming-by-Demonstration</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  No-code approach where researchers simply tap on target data to specify collection requirements
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <Code className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Android Accessibility Service</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Leverages Android's native accessibility framework for reliable screen data access
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Participant Agency</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Opt-in participation with easy withdrawal and full control over data contributions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Deterministic Collection</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Reliable data collection without deep learning or OCR dependencies
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Community Section */}
      <section id="community" className="py-16 sm:py-20 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Research Community</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with researchers, access the codebase, and contribute to mobile data collection research.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <Github className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Open Source</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Access the full codebase and contribute to the development of Crepe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-sm sm:text-base py-3 sm:py-4" asChild>
                  <a href="https://github.com/ND-SaNDwichLAB/crepe" target="_blank" rel="noopener noreferrer">
                    View Code
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="pb-4 sm:pb-6">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Research Team</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Learn about the researchers behind Crepe and their work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-sm sm:text-base py-3 sm:py-4" asChild>
                  <a href="https://toby.li/students/" target="_blank" rel="noopener noreferrer">
                    Meet the Team
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 sm:col-span-2 lg:col-span-1 mx-auto max-w-sm sm:max-w-none">
              <CardHeader className="pb-4 sm:pb-6">
                <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
                <CardTitle className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Research Paper</CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed">
                  Read the full research paper detailing Crepe's methodology and evaluation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-sm sm:text-base py-3 sm:py-4" asChild>
                  <a href="https://arxiv.org/abs/2406.16173" target="_blank" rel="noopener noreferrer">
                    Read Paper
                    <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-serif font-semibold text-lg sm:text-xl">Crepe</span>
              <span className="text-muted-foreground text-base sm:text-lg">- Mobile Screen Data Collector</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-base sm:text-lg text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              <span>for the research community</span>
            </div>
          </div>
          
          {/* NSF Acknowledgment */}
          <div className="bg-muted/30 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/nsf.png"
                  alt="NSF Logo"
                  width={60}
                  height={60}
                  className="sm:w-[80px] sm:h-[80px]"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  This work was supported in part by the U.S. National Science Foundation (NSF) under Grant No. CMMI-2326378. 
                  Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors 
                  and do not necessarily reflect the views of the sponsors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 sm:pt-6 border-t border-border/40 text-center text-sm sm:text-base text-muted-foreground">
            <p>© 2025 Crepe Research Project. The Sandwich Lab at the University of Notre Dame.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
} 