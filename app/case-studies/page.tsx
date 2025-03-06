import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart, Database, LineChart, Server } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Case Studies</h1>
            <p className="text-lg md:text-xl">
              Real-world examples of how we've helped organizations transform their data strategies
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Featured Success Story</h2>
            <p className="text-lg text-muted-foreground">
              See how we helped a leading healthcare provider revolutionize their data infrastructure
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Healthcare data dashboard"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Healthcare</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Data Engineering</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Analytics</Badge>
              </div>
              <h3 className="text-2xl font-bold">HealthCare Plus: Unifying Patient Data Across 50+ Facilities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Challenge</h4>
                  <p className="text-muted-foreground">
                    HealthCare Plus was struggling with siloed data across 50+ facilities, making it impossible to get a
                    unified view of patient care and operational efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Solution</h4>
                  <p className="text-muted-foreground">
                    We implemented a cloud-based data lake on Azure, with automated ETL pipelines to consolidate data
                    from disparate systems, and built a comprehensive analytics platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Results</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Reduced reporting time from weeks to minutes</li>
                    <li>30% improvement in resource allocation</li>
                    <li>Enabled predictive analytics for patient readmission</li>
                    <li>$2.5M annual cost savings through operational efficiencies</li>
                  </ul>
                </div>
              </div>
              <Button asChild>
                <Link href="/case-studies/healthcare-plus">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold">More Success Stories</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex items-center gap-2">
                  <Badge>Finance</Badge>
                  <Badge>Data Science</Badge>
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle>Global Bank: Fraud Detection System</CardTitle>
                <CardDescription>Implementing ML-based fraud detection to save millions</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  We developed a machine learning system that analyzes transaction patterns in real-time to detect
                  fraudulent activities with 99.2% accuracy.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Fraud detection accuracy</span>
                    <span className="font-semibold">99.2%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "99.2%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>False positive reduction</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Annual savings</span>
                    <span className="font-semibold">$4.2M</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/global-bank">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex items-center gap-2">
                  <Badge>Retail</Badge>
                  <Badge>Data Engineering</Badge>
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle>RetailCo: E-commerce Data Platform</CardTitle>
                <CardDescription>Building a scalable data platform for a growing retailer</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  We designed and implemented a cloud-native data platform on AWS that consolidated data from online and
                  in-store systems to provide a 360° view of customer behavior.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Data processing time</span>
                    <span className="font-semibold">↓ 90%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "90%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Customer personalization</span>
                    <span className="font-semibold">↑ 45%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "45%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Conversion rate</span>
                    <span className="font-semibold">↑ 28%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/retailco">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex items-center gap-2">
                  <Badge>Manufacturing</Badge>
                  <Badge>Analytics</Badge>
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BarChart className="h-6 w-6" />
                </div>
                <CardTitle>IndustrialTech: Predictive Maintenance</CardTitle>
                <CardDescription>Reducing downtime with IoT and predictive analytics</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  We implemented an IoT-based predictive maintenance solution that collects sensor data from
                  manufacturing equipment to predict failures before they occur.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Unplanned downtime</span>
                    <span className="font-semibold">↓ 73%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "73%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Maintenance costs</span>
                    <span className="font-semibold">↓ 42%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "42%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Equipment lifespan</span>
                    <span className="font-semibold">↑ 15%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/industrialtech">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex items-center gap-2">
                  <Badge>Energy</Badge>
                  <Badge>Data Science</Badge>
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle>EnergyNow: Consumption Forecasting</CardTitle>
                <CardDescription>AI-powered energy demand forecasting</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  We built a machine learning model that predicts energy consumption patterns, enabling more efficient
                  resource allocation and reducing waste.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Forecast accuracy</span>
                    <span className="font-semibold">95.8%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "95.8%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Resource optimization</span>
                    <span className="font-semibold">↑ 31%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "31%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Carbon footprint</span>
                    <span className="font-semibold">↓ 22%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/energynow">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex items-center gap-2">
                  <Badge>Education</Badge>
                  <Badge>Analytics</Badge>
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Database className="h-6 w-6" />
                </div>
                <CardTitle>EduTech: Student Success Platform</CardTitle>
                <CardDescription>Data-driven approach to improving student outcomes</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  We developed a comprehensive analytics platform that helps educators identify at-risk students and
                  provide targeted interventions to improve graduation rates.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>At-risk identification</span>
                    <span className="font-semibold">↑ 89%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "89%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Graduation rate</span>
                    <span className="font-semibold">↑ 18%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "18%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Student satisfaction</span>
                    <span className="font-semibold">↑ 35%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/edutech">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex items-center gap-2">
                  <Badge>Technology</Badge>
                  <Badge>Training</Badge>
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle>TechCorp: Team Upskilling Program</CardTitle>
                <CardDescription>Comprehensive data training for 200+ employees</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-muted-foreground">
                  We designed and delivered a customized training program to upskill TechCorp's workforce in modern data
                  technologies, enabling them to implement and maintain their data platform in-house.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Team capability</span>
                    <span className="font-semibold">↑ 78%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "78%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Project delivery time</span>
                    <span className="font-semibold">↓ 40%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "40%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>External consultant costs</span>
                    <span className="font-semibold">↓ 65%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/techcorp">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              We have experience delivering data solutions across a wide range of industries
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building-2"
                >
                  <path d="M6 22V2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v20" />
                  <path d="M12 13V7" />
                  <path d="M10 7h4" />
                  <path d="M10 13h4" />
                  <path d="M6 22h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6" />
                </svg>
              </div>
              <h3 className="font-semibold">Finance</h3>
              <p className="text-sm text-muted-foreground">Banking, Insurance, Investments</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-pulse"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.22 12H9.5l.5-1 2 4 .5-2 2 2h5.27" />
                </svg>
              </div>
              <h3 className="font-semibold">Healthcare</h3>
              <p className="text-sm text-muted-foreground">Hospitals, Clinics, Research</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <h3 className="font-semibold">Retail</h3>
              <p className="text-sm text-muted-foreground">E-commerce, Stores, Supply Chain</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-factory"
                >
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M17 18h1" />
                  <path d="M12 18h1" />
                  <path d="M7 18h1" />
                </svg>
              </div>
              <h3 className="font-semibold">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">Production, IoT, Automation</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm text-muted-foreground">Universities, EdTech, Research</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="font-semibold">Energy</h3>
              <p className="text-sm text-muted-foreground">Utilities, Renewables, Oil & Gas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Become Our Next Success Story?</h2>
            <p className="mb-8 text-lg">
              Contact us today to discuss your data challenges and how we can help you achieve similar results.
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

