"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Zap, ShieldCheck, Clock, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"
import { useState, useEffect } from "react"

interface PerformanceMetrics {
  latency: number
  throughput: number
  packetLoss: number
  uptime: number
  cpuUsage: number
  memoryUsage: number
}

export default function PerformancePage() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    latency: 35,
    throughput: 750,
    packetLoss: 0.1,
    uptime: 99.9,
    cpuUsage: 45,
    memoryUsage: 60,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        latency: Math.floor(Math.random() * 50) + 10, // 10-60ms
        throughput: Math.floor(Math.random() * 500) + 600, // 600-1100 Mbps
        packetLoss: Number.parseFloat((Math.random() * 0.5).toFixed(2)), // 0-0.5%
        uptime: Number.parseFloat((99.5 + Math.random() * 0.5).toFixed(1)), // 99.5-100%
        cpuUsage: Math.floor(Math.random() * 40) + 30, // 30-70%
        memoryUsage: Math.floor(Math.random() * 30) + 50, // 50-80%
      })
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Network Performance Monitoring</h1>
            <p className="text-gray-600 mt-1">Real-time insights into network health and efficiency</p>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Latency</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.latency}ms</div>
              <p className="text-xs text-muted-foreground">Lower is better</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Throughput</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.throughput} Mbps</div>
              <p className="text-xs text-muted-foreground">Higher is better</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Packet Loss</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.packetLoss}%</div>
              <p className="text-xs text-muted-foreground">Ideally 0%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network Uptime</CardTitle>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.uptime}%</div>
              <p className="text-xs text-muted-foreground">Target 99.9%+</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Performance Metrics</CardTitle>
            <CardDescription>Real-time graphs and statistics for network components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Latency Distribution</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current:</span>
                    <span className="font-medium">{metrics.latency}ms</span>
                  </div>
                  <Progress value={metrics.latency * 2} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0ms</span>
                    <span>100ms</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Throughput Utilization</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current:</span>
                    <span className="font-medium">{metrics.throughput} Mbps</span>
                  </div>
                  <Progress value={metrics.throughput / 10} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0 Mbps</span>
                    <span>1000 Mbps</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Packet Loss Rate</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current:</span>
                    <span className="font-medium">{metrics.packetLoss}%</span>
                  </div>
                  <Progress value={metrics.packetLoss * 100} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>1%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">System Resource Usage</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CPU Usage:</span>
                    <span className="font-medium">{metrics.cpuUsage}%</span>
                  </div>
                  <Progress value={metrics.cpuUsage} className="h-2" />
                  <div className="flex justify-between text-sm mt-4">
                    <span>Memory Usage:</span>
                    <span className="font-medium">{metrics.memoryUsage}%</span>
                  </div>
                  <Progress value={metrics.memoryUsage} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
