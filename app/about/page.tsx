import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Cloud Bintel</h1>
            <p className="text-lg md:text-xl">Empowering businesses with data-driven solutions and expertise</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Cloud Bintel was founded in 2018 by a team of data engineers and scientists with a shared vision: to
                help businesses unlock the full potential of their data.
              </p>
              <p className="text-lg text-muted-foreground">
                We recognized that while many organizations were collecting vast amounts of data, they often lacked the
                expertise and infrastructure to transform that data into actionable insights and business value.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to serve clients across industries, providing end-to-end data solutions that drive
                innovation, efficiency, and growth.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cloud Bintel team"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="text-xl">
              To empower organizations with the tools, expertise, and insights they need to make data-driven decisions
              that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from the solutions we build to the service we provide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and approaches to solve complex data challenges and drive continuous
                  improvement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and ethical practices in all our business relationships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, understanding their unique needs to deliver tailored solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Meet the experts behind Cloud Bintel</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Sarah Johnson"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="mb-2 text-primary">CEO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                Former Data Science Director at Microsoft with 15+ years of experience in enterprise data solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Michael Chen"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="mb-2 text-primary">CTO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                AWS-certified architect with extensive experience building scalable data platforms for Fortune 500
                companies.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="David Rodriguez"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">David Rodriguez</h3>
              <p className="mb-2 text-primary">Head of Training</p>
              <p className="text-sm text-muted-foreground">
                Microsoft MVP and certified trainer with a passion for making complex data concepts accessible to
                everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Expertise</h2>
            <p className="text-lg text-muted-foreground">Specialized knowledge across platforms and industries</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Technology Platforms</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Microsoft Azure</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Amazon Web Services</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Google Cloud Platform</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Snowflake</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Databricks</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Power BI</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold">Industry Experience</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Financial Services</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Retail & E-commerce</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Manufacturing</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Technology</span>
                </div>
                <div className="flex items-center rounded-lg border p-4">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Energy & Utilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Certifications</h2>
            <p className="text-lg text-muted-foreground">
              We maintain the highest level of expertise through industry certifications
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-center text-lg font-semibold">Microsoft Certified: Azure Data Engineer Associate</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-center text-lg font-semibold">AWS Certified Data Analytics - Specialty</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-center text-lg font-semibold">Google Professional Data Engineer</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-primary">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-center text-lg font-semibold">Databricks Certified Developer</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cloud Bintel team working together"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Join Our Team</h2>
              <p className="text-lg text-muted-foreground">
                We're always looking for talented individuals who are passionate about data and technology to join our
                growing team.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Collaborative Environment</h3>
                    <p className="text-muted-foreground">
                      Work with a diverse team of experts who are passionate about solving complex data challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      We invest in our team's growth with ongoing training, certification programs, and conference
                      attendance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Innovative Projects</h3>
                    <p className="text-muted-foreground">
                      Work on cutting-edge data solutions for industry-leading clients across various sectors.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
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
              Contact us today to discuss how our team can help you leverage your data for business success.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

