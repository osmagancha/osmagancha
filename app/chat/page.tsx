"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Send, MessageCircle, Clock, Star, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Message {
  id: string
  text: string
  sender: "user" | "mentor"
  timestamp: Date
  isFiltered?: boolean
  originalContent?: string
}

export default function ChatPage() {
  const searchParams = useSearchParams()
  const mentorId = searchParams.get("mentorId")
  const mentorName = searchParams.get("mentorName")
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "안녕하세요! 멘토링을 시작하겠습니다. 무엇을 도와드릴까요?",
      sender: "mentor",
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 멘토 정보 (실제로는 API에서 가져와야 함)
  const mentorInfo = {
    name: mentorName || "김연구",
    title: "KAIST 컴퓨터공학과 교수",
    rating: 4.9,
    sessions: 127,
    image: "/placeholder.svg"
  }

  // 욕설 필터링 함수
  const filterInappropriateContent = (content: string): { filtered: string; isFiltered: boolean; originalContent?: string } => {
    const inappropriateWords = [
      "바보", "멍청이", "죽어", "꺼져", "시발", "개새끼", "병신", "미친", "씨발", "좆", "존나",
      "fuck", "shit", "bitch", "asshole", "damn", "hell", "dumb", "stupid", "idiot"
    ]

    let filtered = content
    let isFiltered = false
    const originalContent = content

    inappropriateWords.forEach((word) => {
      if (content.toLowerCase().includes(word.toLowerCase())) {
        filtered = filtered.replace(new RegExp(word, "gi"), "*".repeat(word.length))
        isFiltered = true
      }
    })

    return { filtered, isFiltered, originalContent: isFiltered ? originalContent : undefined }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    const { filtered, isFiltered, originalContent } = filterInappropriateContent(newMessage)

    const userMessage: Message = {
      id: Date.now().toString(),
      text: filtered,
      sender: "user",
      timestamp: new Date(),
      isFiltered,
      originalContent
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // 멘토 응답 시뮬레이션
    setTimeout(() => {
      const mentorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateMentorResponse(newMessage),
        sender: "mentor",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, mentorResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const generateMentorResponse = (userMessage: string): string => {
    const responses = [
      "좋은 질문이네요! 그 부분에 대해 자세히 설명드리겠습니다.",
      "흥미로운 관점입니다. 실제 연구에서는 이런 방식으로 접근합니다.",
      "그 질문에 대해 경험을 바탕으로 답변드리겠습니다.",
      "정말 중요한 포인트를 짚어주셨네요. 이렇게 생각해보시면 어떨까요?",
      "좋은 지적입니다. 실제로는 이런 복잡한 요소들이 작용합니다.",
      "그 부분에 대해서는 여러 가지 관점이 있습니다. 하나씩 살펴보겠습니다.",
      "정말 핵심적인 질문이네요! 이렇게 접근해보시는 것을 추천합니다.",
      "흥미로운 주제입니다. 실제 연구 사례를 통해 설명드리겠습니다."
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/mentoring" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="text-lg font-semibold text-slate-800">멘토링</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>10분 무료</span>
              </div>
              <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                구독하기
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Mentor Info Card */}
          <Card className="mb-6">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={mentorInfo.image} alt={mentorInfo.name} />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-slate-600 text-white">
                    {mentorInfo.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{mentorInfo.name}</CardTitle>
                  <p className="text-sm text-gray-600">{mentorInfo.title}</p>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>{mentorInfo.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 text-emerald-500 mr-1" />
                    <span>{mentorInfo.sessions}회</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Content Filter Notice */}
          <Card className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-yellow-800">안전한 멘토링 환경</h3>
                  <p className="text-sm text-yellow-700">
                    부적절한 언어는 자동으로 필터링되어 건전한 멘토링 환경을 유지합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b border-gray-200 pb-4">
              <CardTitle className="text-lg">1:1 멘토링</CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 p-0">
              <div className="h-full flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        {message.isFiltered && (
                          <div className="mt-2 p-2 bg-yellow-100 rounded-lg border border-yellow-200">
                            <div className="flex items-center space-x-1 text-yellow-700">
                              <AlertTriangle className="w-3 h-3" />
                              <span className="text-xs">부적절한 언어가 필터링되었습니다</span>
                            </div>
                          </div>
                        )}
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString("ko-KR", {
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="메시지를 입력하세요..."
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    모든 대화는 안전하게 보호되며, 부적절한 내용은 자동으로 필터링됩니다.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="text-center">
              <CardContent className="p-4">
                <Clock className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <h3 className="font-semibold mb-1">첫 10분 무료</h3>
                <p className="text-sm text-gray-600">멘토링을 체험해보세요</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-4">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <h3 className="font-semibold mb-1">실시간 채팅</h3>
                <p className="text-sm text-gray-600">즉시 답변을 받아보세요</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-4">
                <Star className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <h3 className="font-semibold mb-1">전문가 멘토</h3>
                <p className="text-sm text-gray-600">박사급 전문가와 대화</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
