import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, Users, CheckCircle } from "lucide-react"

export default function TrainingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Expert Training & Workshops</h1>
            <p className="text-lg md:text-xl">
              Upskill your team with specialized training on Microsoft and AWS data platforms
            </p>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Training Programs</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive, hands-on training designed to build practical skills and boost productivity
            </p>
          </div>

          <Tabs defaultValue="microsoft" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="microsoft">Microsoft Azure</TabsTrigger>
              <TabsTrigger value="aws">Amazon Web Services</TabsTrigger>
            </TabsList>

            <TabsContent value="microsoft" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle>Azure Data Factory Masterclass</CardTitle>
                    <CardDescription>Build and manage ETL/ELT pipelines in Azure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>3-day intensive workshop</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>For data engineers and IT professionals</span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Data integration patterns and best practices</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Building complex data pipelines</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Monitoring and troubleshooting</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/training/azure-data-factory">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle>Power BI for Data Analysts</CardTitle>
                    <CardDescription>Create impactful dashboards and reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>2-day hands-on workshop</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>For analysts and business users</span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Data modeling and DAX formulas</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Advanced visualizations and interactivity</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Report distribution and governance</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/training/power-bi">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="aws" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle>AWS Data Engineering</CardTitle>
                    <CardDescription>Build scalable data pipelines on AWS</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>4-day comprehensive course</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>For data engineers and architects</span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">AWS Glue, Lambda, and Step Functions</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">S3, Redshift, and Athena integration</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Serverless data processing</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/training/aws-data-engineering">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle>AWS Analytics & Visualization</CardTitle>
                    <CardDescription>Master QuickSight and AWS analytics services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>2-day intensive workshop</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>For analysts and BI professionals</span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Amazon QuickSight dashboard creation</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Athena for SQL-based analytics</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-sm">Data lake analytics best practices</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/training/aws-analytics">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Formats */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Flexible Training Formats</h2>
            <p className="text-lg text-muted-foreground">
              Choose the training format that works best for your team and schedule
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>On-site Training</CardTitle>
                <CardDescription>Customized training at your location</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Tailored to your specific business needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Hands-on exercises with your own data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Flexible scheduling to minimize disruption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Calendar className="h-6 w-6" />
                </div>
                <CardTitle>Public Workshops</CardTitle>
                <CardDescription>Scheduled sessions at our training centers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Regular sessions in major cities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Networking with peers from other companies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Cost-effective for smaller teams</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle>Virtual Training</CardTitle>
                <CardDescription>Live online instructor-led sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Interactive sessions with live instructors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>No travel required, join from anywhere</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span>Recorded sessions for future reference</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Upcoming Workshops</h2>
            <p className="text-lg text-muted-foreground">Register for our upcoming public training sessions</p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Azure Data Factory Masterclass</CardTitle>
                <CardDescription>Virtual Training</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>June 15-17, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    <span>9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>12 seats available</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/training/register">Register Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AWS Data Engineering</CardTitle>
                <CardDescription>In-person Workshop - New York</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>July 10-13, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    <span>9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>8 seats available</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/training/register">Register Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Power BI for Data Analysts</CardTitle>
                <CardDescription>Virtual Training</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>August 5-6, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    <span>9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>15 seats available</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/training/register">Register Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Need Custom Training for Your Team?</h2>
            <p className="mb-8 text-lg">
              Contact us to discuss tailored training programs designed specifically for your organization's needs.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Request Custom Training</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

