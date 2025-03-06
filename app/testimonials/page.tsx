import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Client Testimonials</h1>
            <p className="text-lg md:text-xl">
              Hear what our clients have to say about their experience working with Cloud Bintel
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              We're proud of the relationships we've built and the results we've delivered
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute -right-4 -top-4 text-primary opacity-20">
                  <Quote className="h-24 w-24" />
                </div>
                <div className="relative">
                  <p className="mb-6 text-lg italic text-muted-foreground">
                    "Cloud Bintel transformed our data infrastructure from a liability into a strategic asset. Their
                    team not only delivered a robust technical solution but also ensured our team had the knowledge to
                    maintain and extend it."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="John Smith"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">John Smith</h3>
                      <p className="text-sm text-muted-foreground">CTO, Global Financial Services</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute -right-4 -top-4 text-primary opacity-20">
                  <Quote className="h-24 w-24" />
                </div>
                <div className="relative">
                  <p className="mb-6 text-lg italic text-muted-foreground">
                    "The predictive maintenance solution developed by Cloud Bintel has reduced our unplanned downtime by
                    over 70%. The ROI was evident within the first three months, and their ongoing support has been
                    exceptional."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Maria Rodriguez"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Maria Rodriguez</h3>
                      <p className="text-sm text-muted-foreground">Operations Director, IndustrialTech</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute -right-4 -top-4 text-primary opacity-20">
                  <Quote className="h-24 w-24" />
                </div>
                <div className="relative">
                  <p className="mb-6 text-lg italic text-muted-foreground">
                    "The training program Cloud Bintel developed for our team was exactly what we needed. They tailored
                    the content to our specific use cases, and the hands-on workshops gave our team practical skills
                    they could apply immediately."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="David Chen"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">David Chen</h3>
                      <p className="text-sm text-muted-foreground">Head of Data, TechCorp</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials by Industry */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Testimonials by Industry</h2>
            <p className="text-lg text-muted-foreground">Explore feedback from clients across different sectors</p>
          </div>

          <Tabs defaultValue="finance" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="energy">Energy</TabsTrigger>
            </TabsList>

            <TabsContent value="finance" className="mt-8">
              <div className="space-y-8">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Finance</Badge>
                        <Badge className="ml-2">Data Science</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "The fraud detection system implemented by Cloud Bintel has been a game-changer for our bank.
                        We've seen a 92% reduction in false positives while maintaining high detection rates, saving us
                        millions in potential fraud losses and operational costs."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Robert Johnson"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Robert Johnson</h3>
                          <p className="text-sm text-muted-foreground">Chief Risk Officer, Global Bank</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Finance</Badge>
                        <Badge className="ml-2">Analytics</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "Cloud Bintel helped us consolidate data from multiple legacy systems into a unified analytics
                        platform. Our investment advisors now have real-time insights that have improved client
                        portfolio performance by an average of 12%."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Sarah Williams"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Sarah Williams</h3>
                          <p className="text-sm text-muted-foreground">VP of Analytics, Investment Partners</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="mt-8">
              <div className="space-y-8">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Healthcare</Badge>
                        <Badge className="ml-2">Data Engineering</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "Cloud Bintel's data integration solution has revolutionized how we access and utilize patient
                        data across our network of hospitals. We've reduced reporting time from weeks to minutes and
                        improved care coordination significantly."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Dr. Emily Chen"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Dr. Emily Chen</h3>
                          <p className="text-sm text-muted-foreground">CIO, HealthCare Plus</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Healthcare</Badge>
                        <Badge className="ml-2">Data Science</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "The patient readmission prediction model developed by Cloud Bintel has helped us identify
                        high-risk patients with 87% accuracy. This has allowed us to implement targeted interventions
                        that have reduced readmissions by 23%."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Dr. James Wilson"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Dr. James Wilson</h3>
                          <p className="text-sm text-muted-foreground">Medical Director, City Hospital</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="retail" className="mt-8">
              <div className="space-y-8">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Retail</Badge>
                        <Badge className="ml-2">Data Engineering</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "Cloud Bintel's e-commerce data platform has given us a unified view of our customers across
                        online and in-store channels. This has enabled us to create personalized shopping experiences
                        that have increased our conversion rates by 28%."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Jennifer Lee"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Jennifer Lee</h3>
                          <p className="text-sm text-muted-foreground">Digital Marketing Director, RetailCo</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Retail</Badge>
                        <Badge className="ml-2">Analytics</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "The inventory optimization solution from Cloud Bintel has transformed our supply chain
                        operations. We've reduced stockouts by 65% while decreasing overall inventory costs by 18%.
                        Their team truly understood our business challenges."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Michael Brown"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Michael Brown</h3>
                          <p className="text-sm text-muted-foreground">Supply Chain Manager, Global Retail</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="mt-8">
              <div className="space-y-8">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Manufacturing</Badge>
                        <Badge className="ml-2">IoT</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "Cloud Bintel's predictive maintenance solution has been transformative for our factory
                        operations. We've reduced unplanned downtime by 73% and extended equipment lifespan by 15%,
                        resulting in millions in cost savings."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Thomas Garcia"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Thomas Garcia</h3>
                          <p className="text-sm text-muted-foreground">Plant Manager, IndustrialTech</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Manufacturing</Badge>
                        <Badge className="ml-2">Data Engineering</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "The data integration platform built by Cloud Bintel has connected our production, quality, and
                        supply chain systems into a unified view. This has improved our decision-making speed and
                        accuracy across all operations."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Lisa Martinez"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Lisa Martinez</h3>
                          <p className="text-sm text-muted-foreground">Operations Director, Manufacturing Solutions</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <div className="space-y-8">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Education</Badge>
                        <Badge className="ml-2">Analytics</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "Cloud Bintel's student success platform has revolutionized how we identify and support at-risk
                        students. We've seen an 18% increase in graduation rates and significantly improved student
                        satisfaction scores."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Dr. Amanda Taylor"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Dr. Amanda Taylor</h3>
                          <p className="text-sm text-muted-foreground">Dean of Student Success, State University</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Education</Badge>
                        <Badge className="ml-2">Training</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "The data science training program developed by Cloud Bintel has transformed our research
                        capabilities. Our faculty and graduate students now have the skills to apply advanced analytics
                        to their research projects."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Prof. Richard Wong"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Prof. Richard Wong</h3>
                          <p className="text-sm text-muted-foreground">Research Director, Tech Institute</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="energy" className="mt-8">
              <div className="space-y-8">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Energy</Badge>
                        <Badge className="ml-2">Data Science</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "Cloud Bintel's energy consumption forecasting model has achieved 95.8% accuracy, enabling us to
                        optimize our resource allocation and reduce waste. This has resulted in significant cost savings
                        and a 22% reduction in our carbon footprint."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Katherine Green"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Katherine Green</h3>
                          <p className="text-sm text-muted-foreground">Sustainability Director, EnergyNow</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute -right-4 -top-4 text-primary opacity-20">
                      <Quote className="h-24 w-24" />
                    </div>
                    <div className="relative">
                      <div className="mb-4">
                        <Badge>Energy</Badge>
                        <Badge className="ml-2">IoT</Badge>
                      </div>
                      <p className="mb-6 text-lg italic text-muted-foreground">
                        "The smart grid analytics platform developed by Cloud Bintel has transformed our operations. We
                        can now detect and respond to grid issues in real-time, improving reliability and reducing
                        outage duration by 42%."
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Daniel Park"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Daniel Park</h3>
                          <p className="text-sm text-muted-foreground">Grid Operations Manager, Power Utilities</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials by Service */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Testimonials by Service</h2>
            <p className="text-lg text-muted-foreground">See what clients say about our specific service offerings</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-6 text-xl font-bold">Data Engineering</h3>
              <div className="space-y-6">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">
                      "Cloud Bintel's data engineering team built a scalable data pipeline that reduced our processing
                      time by 90% while improving data quality and accessibility."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                        <div className="flex h-full w-full items-center justify-center text-primary">JD</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">James Davis</h4>
                        <p className="text-xs text-muted-foreground">Data Architect, Tech Solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">
                      "Their expertise in cloud data infrastructure saved us months of development time and resulted in
                      a more robust and scalable solution than we could have built in-house."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                        <div className="flex h-full w-full items-center justify-center text-primary">AL</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Anna Liu</h4>
                        <p className="text-xs text-muted-foreground">CIO, Healthcare Systems</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold">Data Science</h3>
              <div className="space-y-6">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">
                      "The machine learning models developed by Cloud Bintel have transformed our customer segmentation
                      strategy, leading to a 35% increase in campaign conversion rates."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                        <div className="flex h-full w-full items-center justify-center text-primary">RK</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Rachel Kim</h4>
                        <p className="text-xs text-muted-foreground">Marketing Director, E-commerce Inc.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">
                      "Their data scientists took the time to understand our business challenges and developed a custom
                      solution that exceeded our expectations in both accuracy and performance."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                        <div className="flex h-full w-full items-center justify-center text-primary">MP</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Mark Peterson</h4>
                        <p className="text-xs text-muted-foreground">Analytics Lead, Financial Services</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold">Training & Workshops</h3>
              <div className="space-y-6">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">
                      "The Azure Data Factory training was hands-down the best technical training our team has ever
                      received. Practical, well-paced, and immediately applicable to our work."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                        <div className="flex h-full w-full items-center justify-center text-primary">SJ</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Steve Johnson</h4>
                        <p className="text-xs text-muted-foreground">IT Manager, Manufacturing Co.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">
                      "Cloud Bintel's training program upskilled our entire analytics team in just weeks. The custom
                      curriculum and hands-on labs were exactly what we needed."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                        <div className="flex h-full w-full items-center justify-center text-primary">LM</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Laura Miller</h4>
                        <p className="text-xs text-muted-foreground">HR Director, Tech Enterprise</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from our clients about their experience working with Cloud Bintel
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="aspect-video bg-black">
                {/* In a real application, you would embed a video player here */}
                <div className="flex h-full items-center justify-center bg-black/90 p-6 text-center text-white">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play mx-auto mb-4"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <p className="text-lg font-medium">Video Testimonial</p>
                    <p className="text-sm text-gray-300">HealthCare Plus Success Story</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Dr. Emily Chen, CIO</h3>
                <p className="text-sm text-muted-foreground">HealthCare Plus</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="aspect-video bg-black">
                {/* In a real application, you would embed a video player here */}
                <div className="flex h-full items-center justify-center bg-black/90 p-6 text-center text-white">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play mx-auto mb-4"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <p className="text-lg font-medium">Video Testimonial</p>
                    <p className="text-sm text-gray-300">Global Bank Case Study</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Robert Johnson, Chief Risk Officer</h3>
                <p className="text-sm text-muted-foreground">Global Bank</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="aspect-video bg-black">
                {/* In a real application, you would embed a video player here */}
                <div className="flex h-full items-center justify-center bg-black/90 p-6 text-center text-white">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play mx-auto mb-4"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <p className="text-lg font-medium">Video Testimonial</p>
                    <p className="text-sm text-gray-300">IndustrialTech Implementation</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Thomas Garcia, Plant Manager</h3>
                <p className="text-sm text-muted-foreground">IndustrialTech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Become Our Next Success Story?</h2>
            <p className="mb-8 text-lg">Contact us today to discuss how we can help you achieve your data goals.</p>
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

