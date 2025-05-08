"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
// Remove or comment out these imports at the top of the file
// import { generateText } from "ai"
// import { openai } from "@ai-sdk/openai"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

const EXAMPLE_QUESTIONS = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How long does the process take?",
  "How much is my license worth?",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "👋 Hi there! How can I help you with selling your software licenses today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  // Add this function above the handleSend function
  const generateMockResponse = (userInput: string) => {
    const input = userInput.toLowerCase()

    // Common questions and responses
    if (input.includes("how do i sell") || input.includes("selling process") || input.includes("how to sell")) {
      return "To sell your software licenses with SoftSell, simply follow our 3-step process: 1) Upload your license details through our secure portal, 2) Receive a valuation within 24 hours, and 3) Accept our offer to get paid within 3 business days. Would you like to start the process now?"
    }

    if (input.includes("license") && (input.includes("type") || input.includes("accept") || input.includes("kind"))) {
      return "SoftSell accepts various types of software licenses including Enterprise Software, Cloud Services, SaaS Subscriptions, and Desktop Applications. We specialize in high-value enterprise licenses but work with businesses of all sizes. What type of license are you looking to sell?"
    }

    if (input.includes("how long") || input.includes("time") || input.includes("process take")) {
      return "The entire process typically takes 3-5 business days from submission to payment. License valuation is completed within 24 hours, and once you accept our offer, payment is processed within 3 business days. We pride ourselves on our efficient and transparent process."
    }

    if (input.includes("worth") || input.includes("value") || input.includes("how much")) {
      return "The value of your license depends on several factors including the software type, remaining subscription time, number of seats, and current market demand. Our experts analyze these factors to provide the best possible valuation. Would you like to submit your license details for a free valuation?"
    }

    if (input.includes("payment") || input.includes("get paid") || input.includes("money")) {
      return "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. Once you accept our offer, you'll be able to select your preferred payment method, and funds will be transferred within 3 business days."
    }

    if (input.includes("secure") || input.includes("safe") || input.includes("privacy")) {
      return "Security is our top priority. We use bank-level encryption to protect your data and financial information. All license transfers are legally documented to ensure full compliance with software licensing agreements and to protect both parties."
    }

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! Welcome to SoftSell. How can I help you with selling your software licenses today?"
    }

    // Default responses for unknown queries
    const defaultResponses = [
      "That's a great question. At SoftSell, we specialize in helping businesses monetize their unused software licenses. Could you provide more details about what you're looking to sell?",
      "Thanks for reaching out. Our team of experts is dedicated to getting you the best value for your software licenses. Would you like to know more about our process or get started with a valuation?",
      "I'd be happy to help with that. SoftSell offers a streamlined process for selling your unused software licenses. Is there something specific you'd like to know about our services?",
      "We're here to help you turn your unused software licenses into cash. Could you tell me more about what type of licenses you're looking to sell?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  // Replace the entire handleSend function with this mock implementation

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Mock AI response instead of using the OpenAI API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

      // Generate a mock response based on the user's input
      const mockResponse = generateMockResponse(input)

      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: mockResponse,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)

      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again later or contact our support team.",
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExampleClick = (question: string) => {
    setInput(question)
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="h-14 w-14 rounded-full shadow-lg">
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-50 w-full max-w-[400px] sm:max-w-[350px]"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="flex h-[500px] flex-col shadow-xl">
              <CardHeader className="bg-primary text-primary-foreground py-3">
                <div className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <span className="font-medium">SoftSell Assistant</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-auto p-4">
                <div className="flex flex-col space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", {
                        "justify-end": message.role === "user",
                        "justify-start": message.role === "assistant",
                      })}
                    >
                      <div
                        className={cn("rounded-lg px-4 py-2 max-w-[80%]", {
                          "bg-primary text-primary-foreground": message.role === "user",
                          "bg-muted": message.role === "assistant",
                        })}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {messages.length === 1 && !isLoading && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {EXAMPLE_QUESTIONS.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleExampleClick(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <CardFooter className="p-3 pt-0">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSend()
                      }
                    }}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button size="icon" disabled={!input.trim() || isLoading} onClick={handleSend}>
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
