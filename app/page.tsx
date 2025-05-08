"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, DollarSign, HeartHandshake, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

// Add the import for the ChatWidget at the top of the file
import { ChatWidget } from "@/components/chat-widget"

// Add the ChatWidget component at the end of the Home component, just before the closing div
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SoftSell</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </a>
          <a href="#why-choose-us" className="text-sm font-medium hover:text-primary">
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
          >
            {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#why-choose-us" className="text-sm font-medium hover:text-primary">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4 mt-4">
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button onClick={toggleTheme} className="rounded-md p-2 hover:bg-accent">
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  )
}

function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Turn Unused Software Licenses Into Cash
              </h1>
              <p className="text-muted-foreground md:text-xl">
                SoftSell helps businesses monetize their unused software licenses quickly and at the best market rates.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8">
                Sell My Licenses
              </Button>
              <Button size="lg" variant="outline">
                Get a Quote
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              alt="SoftSell Dashboard"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/placeholder.svg?height=550&width=800"
              width="800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal for evaluation.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Get Valuation",
      description: "Our experts analyze the market and provide you with the best possible valuation within 24 hours.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment through your preferred method within 3 business days.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined process makes selling software licenses simple and profitable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-center text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Best Market Rates",
      description: "We leverage our extensive network to ensure you get the highest value for your licenses.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Transactions",
      description: "Our platform uses bank-level encryption to protect your data and financial information.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Compliance Guaranteed",
      description: "We handle all legal aspects of license transfers to ensure full compliance.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Dedicated Support",
      description: "Our team of experts is available to assist you throughout the entire process.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SoftSell offers unmatched benefits when it comes to software license reselling.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. Their process was seamless and the valuation exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechGrowth Inc.",
    },
    {
      quote:
        "As a growing startup, we needed to optimize our software expenses. SoftSell not only helped us sell our unused licenses but also connected us with affordable alternatives.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "Innovate Solutions",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about their experience with SoftSell.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-4 rounded-lg border p-6 bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted h-12 w-12 flex items-center justify-center">
                  <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, licenseType: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.company.trim()) newErrors.company = "Company is required"
    if (!formData.licenseType) newErrors.licenseType = "License type is required"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        })

        // Reset submission status after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      }, 1000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to turn your unused software licenses into cash? Fill out the form below and we'll get back to you
              within 24 hours.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg mt-12">
          <Card>
            <CardContent className="p-6">
              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center space-y-4 py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500" />
                  <h3 className="text-2xl font-bold">Thank You!</h3>
                  <p className="text-center text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="licenseType">License Type</Label>
                    <Select value={formData.licenseType} onValueChange={handleSelectChange}>
                      <SelectTrigger className={errors.licenseType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select license type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enterprise">Enterprise Software</SelectItem>
                        <SelectItem value="cloud">Cloud Services</SelectItem>
                        <SelectItem value="saas">SaaS Subscriptions</SelectItem>
                        <SelectItem value="desktop">Desktop Applications</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.licenseType && <p className="text-sm text-red-500">{errors.licenseType}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your software licenses"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-12 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-sm text-muted-foreground">Turning unused software licenses into cash since 2023.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    License Valuation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© 2023 SoftSell. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
