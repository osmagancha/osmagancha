"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, X, CheckCircle, AlertCircle, Info } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning"
  timestamp: Date
  read: boolean
}

export function NotificationButton() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "새로운 멘토 등록",
      message: "KAIST 컴퓨터공학과 김교수님이 새로운 멘토로 등록하셨습니다.",
      type: "info",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30분 전
      read: false
    },
    {
      id: "2",
      title: "견학 예약 확정",
      message: "국립중앙과학관 견학이 확정되었습니다. 3월 15일 오후 2시에 방문해주세요.",
      type: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2시간 전
      read: false
    },
    {
      id: "3",
      title: "시스템 점검 안내",
      message: "3월 10일 새벽 2시부터 4시까지 시스템 점검이 있을 예정입니다.",
      type: "warning",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1일 전
      read: true
    }
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    )
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      default:
        return <Info className="w-4 h-4 text-blue-500" />
    }
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 60) return `${minutes}분 전`
    if (hours < 24) return `${hours}시간 전`
    return `${days}일 전`
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-300 relative">
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">알림</h3>
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={markAllAsRead}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                모두 읽음 처리
              </Button>
            )}
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              새로운 알림이 없습니다
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 transition-colors duration-200 ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium ${
                          !notification.read ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </p>
                        <span className="text-xs text-gray-500">
                          {formatTime(notification.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {notifications.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full text-gray-600 hover:text-gray-800"
            >
              모든 알림 보기
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
} 