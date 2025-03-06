import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, LineChart, Server, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg md:text-xl">
              Comprehensive data solutions to help your business thrive in the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle>Data Engineering</CardTitle>
                <CardDescription>Build robust data infrastructure and pipelines</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  Our data engineering services help you design, build, and maintain the infrastructure needed to
                  collect, process, and store your data efficiently.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#data-engineering">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
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
                <p className="mb-4 text-muted-foreground">
                  Our data science team develops custom machine learning models and AI solutions to help you predict
                  trends, automate processes, and gain competitive advantage.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#data-science">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
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
                <p className="mb-4 text-muted-foreground">
                  Our analytics services help you visualize data, create interactive dashboards, and develop reporting
                  systems that drive better business decisions.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#data-analytics">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Engineering Section */}
      <section id="data-engineering" className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Data Engineering</h2>
              <p className="text-lg text-muted-foreground">
                Build a solid foundation for your data strategy with our comprehensive data engineering services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">ETL/ELT Pipeline Development</h3>
                    <p className="text-muted-foreground">
                      Design and implement robust data pipelines to extract, transform, and load data from various
                      sources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Data Warehouse Design</h3>
                    <p className="text-muted-foreground">
                      Create scalable data warehouse architectures optimized for analytics and reporting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Cloud Data Infrastructure</h3>
                    <p className="text-muted-foreground">
                      Implement and manage cloud-based data solutions on AWS, Azure, and Google Cloud.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Real-time Data Processing</h3>
                    <p className="text-muted-foreground">
                      Build streaming data pipelines for real-time analytics and decision making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Data Engineering"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section id="data-science" className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Data Science"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold">Data Science</h2>
              <p className="text-lg text-muted-foreground">
                Leverage advanced analytics and machine learning to unlock the full potential of your data.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Machine Learning Solutions</h3>
                    <p className="text-muted-foreground">
                      Develop custom ML models to solve specific business problems and automate decision-making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Predictive Analytics</h3>
                    <p className="text-muted-foreground">
                      Forecast trends, customer behavior, and business outcomes to stay ahead of the competition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Natural Language Processing</h3>
                    <p className="text-muted-foreground">
                      Extract insights from text data, automate content analysis, and build conversational AI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Computer Vision Applications</h3>
                    <p className="text-muted-foreground">
                      Implement image recognition, object detection, and visual inspection systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section id="data-analytics" className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Data Analytics</h2>
              <p className="text-lg text-muted-foreground">
                Transform raw data into actionable insights that drive business growth and efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Business Intelligence Dashboards</h3>
                    <p className="text-muted-foreground">
                      Create interactive dashboards that provide real-time visibility into your business performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Data Visualization</h3>
                    <p className="text-muted-foreground">
                      Design intuitive visualizations that communicate complex data clearly and effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">KPI Monitoring and Reporting</h3>
                    <p className="text-muted-foreground">
                      Develop automated reporting systems to track key performance indicators and business metrics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Advanced Analytics Solutions</h3>
                    <p className="text-muted-foreground">
                      Implement statistical analysis, segmentation, and optimization techniques to uncover hidden
                      patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Data Analytics"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Harness the Power of Your Data?</h2>
            <p className="mb-8 text-lg">
              Contact us today to discuss how our data services can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/consultations">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

