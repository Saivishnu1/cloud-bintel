"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Search, User } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the search here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Blog</h1>
            <p className="text-lg md:text-xl">Insights, tutorials, and trends from our data experts</p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="border-b py-8">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <form onSubmit={handleSearch} className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Tabs defaultValue="all" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Featured Article</h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg md:aspect-auto md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Data lake architecture diagram"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge>Data Engineering</Badge>
                <Badge>Cloud</Badge>
              </div>
              <h3 className="text-2xl font-bold">Building Modern Data Lakes: Architecture and Best Practices</h3>
              <p className="text-muted-foreground">
                A comprehensive guide to designing and implementing scalable data lake solutions that balance
                flexibility, performance, and governance.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>June 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>Michael Chen, CTO</span>
                </div>
                <span>12 min read</span>
              </div>
              <Button asChild>
                <Link href="/blog/building-modern-data-lakes">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Recent Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Machine learning model diagram"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>Data Science</Badge>
                  <Badge>ML</Badge>
                </div>
                <CardTitle className="line-clamp-2">The Rise of AutoML: Democratizing Machine Learning</CardTitle>
                <CardDescription>
                  How automated machine learning is making AI accessible to non-specialists
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>May 28, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>Sarah Johnson</span>
                  </div>
                  <span>8 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/rise-of-automl">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Real-time dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>Analytics</Badge>
                  <Badge>Dashboards</Badge>
                </div>
                <CardTitle className="line-clamp-2">Designing Effective Real-Time Dashboards</CardTitle>
                <CardDescription>Best practices for creating dashboards that drive action and insight</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>May 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>David Rodriguez</span>
                  </div>
                  <span>10 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/designing-effective-dashboards">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Data governance framework"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>Governance</Badge>
                  <Badge>Best Practices</Badge>
                </div>
                <CardTitle className="line-clamp-2">Data Governance in the Age of AI</CardTitle>
                <CardDescription>Balancing innovation with compliance and ethical considerations</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>May 3, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>Jennifer Lee</span>
                  </div>
                  <span>15 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/data-governance-ai">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Serverless architecture diagram"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>Engineering</Badge>
                  <Badge>Cloud</Badge>
                </div>
                <CardTitle className="line-clamp-2">Serverless Data Processing: When and How to Use It</CardTitle>
                <CardDescription>
                  A practical guide to implementing serverless architectures for data workloads
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>April 22, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>Michael Chen</span>
                  </div>
                  <span>12 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/serverless-data-processing">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Data mesh concept"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>Architecture</Badge>
                  <Badge>Strategy</Badge>
                </div>
                <CardTitle className="line-clamp-2">Data Mesh vs. Data Lake: Choosing the Right Approach</CardTitle>
                <CardDescription>Comparing modern data architectures and their use cases</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>April 10, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>Alex Thompson</span>
                  </div>
                  <span>14 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/data-mesh-vs-data-lake">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Python code on screen"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>Tutorial</Badge>
                  <Badge>Python</Badge>
                </div>
                <CardTitle className="line-clamp-2">Building a Recommendation Engine with Python</CardTitle>
                <CardDescription>Step-by-step guide to creating a personalized recommendation system</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>March 28, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>Rachel Kim</span>
                  </div>
                  <span>18 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/recommendation-engine-python">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog/archive">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Popular Topics</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link
              href="/blog/topics/data-engineering"
              className="group rounded-lg border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">Data Engineering</h3>
              <p className="text-sm text-muted-foreground">
                ETL pipelines, data lakes, warehousing, and infrastructure
              </p>
            </Link>
            <Link
              href="/blog/topics/data-science"
              className="group rounded-lg border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">Data Science</h3>
              <p className="text-sm text-muted-foreground">Machine learning, AI, predictive modeling, and algorithms</p>
            </Link>
            <Link
              href="/blog/topics/analytics"
              className="group rounded-lg border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">Analytics</h3>
              <p className="text-sm text-muted-foreground">BI tools, dashboards, visualization, and reporting</p>
            </Link>
            <Link href="/blog/topics/cloud" className="group rounded-lg border p-6 transition-colors hover:bg-muted">
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">Cloud Platforms</h3>
              <p className="text-sm text-muted-foreground">AWS, Azure, GCP, and cloud-native architectures</p>
            </Link>
            <Link href="/blog/topics/big-data" className="group rounded-lg border p-6 transition-colors hover:bg-muted">
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">Big Data</h3>
              <p className="text-sm text-muted-foreground">Hadoop, Spark, distributed computing, and streaming</p>
            </Link>
            <Link
              href="/blog/topics/governance"
              className="group rounded-lg border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">Data Governance</h3>
              <p className="text-sm text-muted-foreground">Security, privacy, compliance, and data quality</p>
            </Link>
            <Link href="/blog/topics/ai" className="group rounded-lg border p-6 transition-colors hover:bg-muted">
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">AI & ML Ops</h3>
              <p className="text-sm text-muted-foreground">Model deployment, monitoring, and lifecycle management</p>
            </Link>
            <Link href="/blog/topics/career" className="group rounded-lg border p-6 transition-colors hover:bg-muted">
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">Career Development</h3>
              <p className="text-sm text-muted-foreground">Skills, certifications, and professional growth</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Updated</h2>
            <p className="mb-8 text-lg">
              Subscribe to our newsletter to receive the latest articles, tutorials, and insights directly in your
              inbox.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input type="email" placeholder="Enter your email" className="bg-white text-foreground" required />
              <Button type="submit" className="bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

