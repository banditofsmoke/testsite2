'use client'

import { useState, useEffect } from 'react'
import { ErrorBoundary } from './error-boundary'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

function CalendarContent() {
  return (
    <iframe 
      src="https://cal.com/sletcher-systems"
      className="w-full h-[600px] border-0"
      title="Scheduling Calendar"
    />
  )
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative bg-gray-800 rounded-xl w-full max-w-4xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h3 className="text-xl font-semibold text-white">
              Schedule a Consultation
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4">
            <ErrorBoundary>
              <CalendarContent />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  )
}