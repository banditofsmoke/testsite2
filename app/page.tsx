'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock } from 'lucide-react';

export default function Page() {
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Set deployment time - change this to your actual deployment time
  const deploymentTime = new Date('2025-06-29T12:00:00'); // Update this to actual deployment time
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now.getTime() - deploymentTime.getTime()) / 1000);
      setElapsedTime(Math.max(0, elapsed));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };
  };

  const timeDisplay = formatTime(elapsedTime);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-4xl">
        {/* Construction Sign */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 border-4 border-amber-500 p-8 rounded-lg shadow-2xl transform -rotate-1"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Wrench className="w-12 h-12 text-amber-400 animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-black text-amber-300 uppercase tracking-tight">
              Under Construction
            </h1>
            <Wrench className="w-12 h-12 text-amber-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-bold text-amber-200"
          >
            YES, Wayne is updating building this in realtime
          </motion.p>
        </motion.div>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-600 shadow-2xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Clock className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
              Time Since Deployment
            </h2>
          </div>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-mono font-bold text-blue-300 bg-gray-700 rounded-lg p-3 md:p-4 border-2 border-gray-600">
                {timeDisplay.days}
              </div>
              <div className="text-sm md:text-lg font-semibold text-gray-300 mt-2">
                DAYS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-mono font-bold text-blue-300 bg-gray-700 rounded-lg p-3 md:p-4 border-2 border-gray-600">
                {timeDisplay.hours}
              </div>
              <div className="text-sm md:text-lg font-semibold text-gray-300 mt-2">
                HOURS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-mono font-bold text-blue-300 bg-gray-700 rounded-lg p-3 md:p-4 border-2 border-gray-600">
                {timeDisplay.minutes}
              </div>
              <div className="text-sm md:text-lg font-semibold text-gray-300 mt-2">
                MINUTES
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-mono font-bold text-blue-300 bg-gray-700 rounded-lg p-3 md:p-4 border-2 border-gray-600">
                {timeDisplay.seconds}
              </div>
              <div className="text-sm md:text-lg font-semibold text-gray-300 mt-2">
                SECONDS
              </div>
            </div>
          </div>
        </motion.div>

        {/* Target Completion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center space-y-4"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-200">
            Target: 3 Days
          </p>
          <p className="text-xl md:text-2xl font-bold text-blue-400">
            BRB WORLD! 🚀
          </p>
        </motion.div>
      </div>
    </main>
  );
}
