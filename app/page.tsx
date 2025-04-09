'use client'

import { useState } from 'react'
import ChatContainer from '@/components/chat/ChatContainer'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="bg-white rounded-xl shadow-soft overflow-hidden min-h-[600px] flex flex-col">
        <ChatContainer />
      </div>
    </div>
  )
}
