"use client"

import { Shield } from "lucide-react"

export function GovernmentPartnership() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src="/images/government-seal.png" alt="대한민국 정부" className="w-8 h-8 object-contain" />
          <div className="text-sm">
            <div className="font-semibold text-blue-800">대한민국 정부</div>
            <div className="text-blue-600 text-xs">행정사무 민간위탁업체</div>
          </div>
        </div>

        <div className="w-px h-8 bg-blue-300"></div>

        <div className="flex items-center space-x-2">
          <img src="/images/education-office-logo.png" alt="대전광역시 교육청" className="w-8 h-8 object-contain" />
          <div className="text-sm">
            <div className="font-semibold text-blue-800">대전광역시 교육청</div>
            <div className="text-blue-600 text-xs">공식 협력기관</div>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-xs text-green-700 font-medium">정부인증</span>
        </div>
      </div>
    </div>
  )
}
