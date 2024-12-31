"use client";

import React, { useState, useEffect } from 'react';
import { AlertCircle, Loader } from 'lucide-react';

interface HuggingFaceWidgetProps {
  spaceSubdomain?: string;
  height?: number;
  className?: string;
}

const HuggingFaceWidget = ({
  spaceSubdomain = 'smokeybandit-sletchersystems',  // Your space subdomain
  height = 450,
  className = ''
}: HuggingFaceWidgetProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const spaceUrl = `https://${spaceSubdomain}.hf.space`;

  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [spaceSubdomain]);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className={`w-full relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-xl">
          <div className="flex flex-col items-center gap-4">
            <Loader className="w-8 h-8 animate-spin text-emerald-400" />
            <p className="text-gray-300">Loading AI Demo...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-xl">
          <div className="flex flex-col items-center gap-4 max-w-md text-center px-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
            <p className="text-gray-300">Unable to load the AI demo. Please ensure the Hugging Face space is public and properly deployed.</p>
          </div>
        </div>
      )}

      <iframe
        src={spaceUrl}
        frameBorder="0"
        width="100%"
        height={height}
        className="rounded-xl bg-gray-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
        allow="accelerometer; autoplay; camera; gyroscope; microphone"
        sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default HuggingFaceWidget;