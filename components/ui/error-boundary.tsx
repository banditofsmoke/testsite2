'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

    // To:
    public static getDerivedStateFromError(error: Error): State {
        console.error('Error caught in boundary:', error);
        return { hasError: true }
    }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="text-white p-4">
          <h2>Something went wrong.</h2>
          <button
            className="bg-emerald-600 px-4 py-2 rounded mt-2"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}