"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ConsultationsPage() {
  const [date, setDate] = useState<Date>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Book a Consultation</h1>
            <p className="text-lg md:text-xl">Schedule a free 30-minute consultation with our data experts</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below to book a free 30-minute consultation with one of our data experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold">Consultation Scheduled!</h3>
                    <p className="text-muted-foreground">
                      Thank you for booking a consultation. We'll send you a confirmation email with all the details
                      shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Book Another Consultation</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Consultation Topic</Label>
                      <RadioGroup defaultValue="data-engineering">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="data-engineering" id="data-engineering" />
                          <Label htmlFor="data-engineering">Data Engineering</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="data-science" id="data-science" />
                          <Label htmlFor="data-science">Data Science</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="data-analytics" id="data-analytics" />
                          <Label htmlFor="data-analytics">Data Analytics</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="training" id="training" />
                          <Label htmlFor="training">Training & Workshops</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Preferred Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Select a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => {
                                const today = new Date()
                                today.setHours(0, 0, 0, 0)
                                return date < today || date.getDay() === 0 || date.getDay() === 6
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select>
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="13:00">1:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your data challenges</Label>
                      <Textarea id="message" rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      Book Consultation
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">What to Expect</h2>
            <p className="text-lg text-muted-foreground">
              Our consultation process is designed to understand your unique data challenges and provide actionable
              insights
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Discovery</h3>
              <p className="text-muted-foreground">
                We'll discuss your current data infrastructure, challenges, and business goals to understand your unique
                situation.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Solution Exploration</h3>
              <p className="text-muted-foreground">
                Our experts will provide initial recommendations and discuss potential approaches to address your data
                needs.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Next Steps</h3>
              <p className="text-muted-foreground">
                We'll outline a clear path forward, whether that's a detailed proposal, a proof of concept, or further
                discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Common questions about our consultation process</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">Is the consultation really free?</h3>
              <p className="text-muted-foreground">
                Yes, the initial 30-minute consultation is completely free with no obligation. We believe in providing
                value upfront to establish a strong foundation for potential partnerships.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">Who will I be speaking with?</h3>
              <p className="text-muted-foreground">
                You'll be connected with a senior data consultant who specializes in your area of interest, whether
                that's data engineering, data science, analytics, or training.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">How should I prepare for the consultation?</h3>
              <p className="text-muted-foreground">
                Think about your current data challenges, business goals, and any specific questions you have. The more
                information you can provide, the more valuable the consultation will be.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">What happens after the consultation?</h3>
              <p className="text-muted-foreground">
                Based on our discussion, we'll follow up with a summary of recommendations and potential next steps.
                There's no pressure to proceed further, but we'll be ready if you decide to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from organizations that have benefited from our consultations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                    <div className="flex h-full w-full items-center justify-center text-primary">JD</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">CTO, FinTech Innovations</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The initial consultation with Cloud Bintel was eye-opening. They quickly identified inefficiencies in
                  our data pipeline that we hadn't noticed. Six months after implementing their recommendations, our
                  data processing time has decreased by 70%."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                    <div className="flex h-full w-full items-center justify-center text-primary">AS</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Amanda Smith</h3>
                    <p className="text-sm text-muted-foreground">Data Director, HealthCare Plus</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "We were struggling to make sense of our patient data until we had a consultation with Cloud Bintel.
                  They provided a clear roadmap for our analytics strategy, and their training programs have empowered
                  our team to be self-sufficient."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Data Strategy?</h2>
            <p className="mb-8 text-lg">
              Book your free consultation today and take the first step toward unlocking the full potential of your
              data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <a href="#top">Book Now</a>
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

