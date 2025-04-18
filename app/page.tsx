import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, LineChart, Server, Users, Award, BookOpen, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Transform Your Business with Data-Driven Solutions
              </h1>
              <p className="text-lg md:text-xl">
                Cloud Bintel delivers expert data engineering, science, and analytics services to help you make smarter
                decisions and drive growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="outline" className=" bg-white border-white text-primary hover:bg-white/10 hover:text-white">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 hover:text-white">
                  <Link href="/consultations">Book a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/bintel-bot.jpg?height=500&width=500"
                alt="Data visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/bintel-bot.jpg?height=100&width=100')] bg-repeat opacity-10"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive data solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle>Data Engineering</CardTitle>
                <CardDescription>Build robust data pipelines and infrastructure</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>ETL/ELT pipeline development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Data warehouse design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Cloud data infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Real-time data processing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#data-engineering">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle>Data Science</CardTitle>
                <CardDescription>Extract insights and build predictive models</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Machine learning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Natural language processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Computer vision applications</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#data-science">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Database className="h-6 w-6" />
                </div>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>Transform data into actionable business insights</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Business intelligence dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Data visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>KPI monitoring and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-primary">•</span>
                    <span>Advanced analytics solutions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#data-analytics">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Training workshop"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Expert Training & Workshops</h2>
              <p className="text-lg text-muted-foreground">
                Upskill your team with our specialized training programs on Microsoft and AWS platforms. Our workshops
                are designed to provide practical, hands-on experience with the latest data technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Microsoft Azure Data Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Master Azure Data Factory, Synapse Analytics, and Power BI
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AWS Data Engineering</h3>
                    <p className="text-sm text-muted-foreground">Learn AWS Glue, Redshift, Athena, and QuickSight</p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/training">Explore Training Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Cloud Bintel</h2>
            <p className="text-lg text-muted-foreground">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Industry Expertise</h3>
              <p className="text-muted-foreground">
                Specialized knowledge across finance, healthcare, retail, and manufacturing
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Certified Professionals</h3>
              <p className="text-muted-foreground">Team of Microsoft and AWS certified data engineers and scientists</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Server className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Scalable Solutions</h3>
              <p className="text-muted-foreground">
                Architectures that grow with your business and adapt to changing needs
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <LineChart className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Measurable Results</h3>
              <p className="text-muted-foreground">Focus on delivering quantifiable business impact and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Data Strategy?</h2>
            <p className="mb-8 text-lg">
              Book a free consultation with our experts to discuss your data challenges and opportunities.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/consultations">Schedule Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

