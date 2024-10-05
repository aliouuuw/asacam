"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Play, Eye, StopCircle, Save, FileText } from 'lucide-react'

const steps = [
  {
    icon: Play,
    title: "Start Video Stream",
    description: "Initiate the video stream from your chosen camera source."
  },
  {
    icon: Eye,
    title: "Get Live Descriptions",
    description: "AI provides real-time descriptions of the scene and detected events."
  },
  {
    icon: StopCircle,
    title: "End Mission",
    description: "Conclude the surveillance mission when objectives are met."
  },
  {
    icon: Save,
    title: "Video Mission Saved",
    description: "All mission data, including video and alerts, is securely saved."
  },
  {
    icon: FileText,
    title: "Report Generation",
    description: "A comprehensive report is automatically generated with all detections."
  }
]

export default function HowItWorks() {
  return (
    <div className=" min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How ASACAM Works</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}