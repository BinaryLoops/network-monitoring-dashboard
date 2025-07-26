"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Network,
  Play,
  Square,
  Trash2,
  Wifi,
  Shield,
  Zap,
  Globe,
  Server,
  Database,
  Download,
} from "lucide-react"

interface Packet {
  id: string
  timestamp: string
  protocol: string
  source: string
  destination: string
  port: number
  size: number
  flags: string[]
  status: "normal" | "warning" | "error"
}

interface NetworkError {
  id: string
  timestamp: string
  type: string
  severity: "Low" | "Medium" | "High" | "Critical"
  description: string
  source: string
  destination: string
}

interface Analytics {
  totalPackets: number
  totalErrors: number
  avgLatency: number
  throughput: number
  protocolDistribution: { [key: string]: number }
  errorRate: number
}

const protocols = ["TCP", "UDP", "HTTP", "HTTPS", "DNS", "FTP", "SMTP", "ICMP"]
const errorTypes = [
  "Connection Timeout",
  "Packet Loss",
  "DNS Resolution Failed",
  "Port Unreachable",
  "Checksum Error",
  "Authentication Failed",
  "SSL Handshake Failed",
  "Network Congestion",
]

const severityColors = {
  Low: "bg-blue-100 text-blue-800",
  Medium: "bg-yellow-100 text-yellow-800",
  High: "bg-orange-100 text-orange-800",
  Critical: "bg-red-100 text-red-800",
}

export default function NetworkMonitoringDashboard() {
  const [isCapturing, setIsCapturing] = useState(false)
  const [packets, setPackets] = useState<Packet[]>([])
  const [errors, setErrors] = useState<NetworkError[]>([])
  const [analytics, setAnalytics] = useState<Analytics>({
    totalPackets: 0,
    totalErrors: 0,
    avgLatency: 0,
    throughput: 0,
    protocolDistribution: {},
    errorRate: 0,
  })

  const generateRandomIP = () => {
    return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
  }

  const generatePacket = useCallback((): Packet => {
    const protocol = protocols[Math.floor(Math.random() * protocols.length)]
    const hasError = Math.random() < 0.1 // 10% chance of error

    return {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      protocol,
      source: generateRandomIP(),
      destination: generateRandomIP(),
      port: Math.floor(Math.random() * 65535) + 1,
      size: Math.floor(Math.random() * 1500) + 64,
      flags: ["SYN", "ACK", "FIN", "RST", "PSH", "URG"].filter(() => Math.random() > 0.7),
      status: hasError ? (Math.random() > 0.5 ? "warning" : "error") : "normal",
    }
  }, [])

  const generateError = useCallback((): NetworkError => {
    const severities: ("Low" | "Medium" | "High" | "Critical")[] = ["Low", "Medium", "High", "Critical"]
    const errorType = errorTypes[Math.floor(Math.random() * errorTypes.length)]

    return {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      type: errorType,
      severity: severities[Math.floor(Math.random() * severities.length)],
      description: `${errorType} detected on network interface`,
      source: generateRandomIP(),
      destination: generateRandomIP(),
    }
  }, [])

  const updateAnalytics = useCallback((currentPackets: Packet[], currentErrors: NetworkError[]) => {
    const protocolDist: { [key: string]: number } = {}

    currentPackets.forEach((packet) => {
      protocolDist[packet.protocol] = (protocolDist[packet.protocol] || 0) + 1
    })

    setAnalytics({
      totalPackets: currentPackets.length,
      totalErrors: currentErrors.length,
      avgLatency: Math.floor(Math.random() * 100) + 10, // Simulated latency
      throughput: Math.floor(Math.random() * 1000) + 100, // Simulated throughput
      protocolDistribution: protocolDist,
      errorRate: currentPackets.length > 0 ? (currentErrors.length / currentPackets.length) * 100 : 0,
    })
  }, [])

  useEffect(() => {
    let packetInterval: NodeJS.Timeout
    let errorInterval: NodeJS.Timeout

    if (isCapturing) {
      // Generate packets every 500ms
      packetInterval = setInterval(() => {
        const newPacket = generatePacket()
        setPackets((prev) => {
          const updated = [newPacket, ...prev].slice(0, 100) // Keep last 100 packets
          return updated
        })
      }, 500)

      // Generate errors every 3 seconds (less frequent)
      errorInterval = setInterval(() => {
        if (Math.random() < 0.3) {
          // 30% chance of generating an error
          const newError = generateError()
          setErrors((prev) => {
            const updated = [newError, ...prev].slice(0, 50) // Keep last 50 errors
            return updated
          })
        }
      }, 3000)
    }

    return () => {
      if (packetInterval) clearInterval(packetInterval)
      if (errorInterval) clearInterval(errorInterval)
    }
  }, [isCapturing, generatePacket, generateError])

  useEffect(() => {
    updateAnalytics(packets, errors)
  }, [packets, errors, updateAnalytics])

  const startCapture = () => {
    setIsCapturing(true)
  }

  const stopCapture = () => {
    setIsCapturing(false)
  }

  const clearData = () => {
    setPackets([])
    setErrors([])
    setAnalytics({
      totalPackets: 0,
      totalErrors: 0,
      avgLatency: 0,
      throughput: 0,
      protocolDistribution: {},
      errorRate: 0,
    })
  }

  const handleDownloadReport = () => {
    const packetHeaders = ["ID", "Timestamp", "Protocol", "Source", "Destination", "Port", "Size", "Flags", "Status"]
    const errorHeaders = ["ID", "Timestamp", "Type", "Severity", "Description", "Source", "Destination"]

    const packetCsvRows = packets.map((p) =>
      [p.id, p.timestamp, p.protocol, p.source, p.destination, p.port, p.size, p.flags.join("|"), p.status]
        .map((field) => `"${String(field).replace(/"/g, '""')}"`)
        .join(","),
    )

    const errorCsvRows = errors.map((e) =>
      [e.id, e.timestamp, e.type, e.severity, e.description, e.source, e.destination]
        .map((field) => `"${String(field).replace(/"/g, '""')}"`)
        .join(","),
    )

    const csvContent =
      `Packet Data:\n${packetHeaders.join(",")}\n${packetCsvRows.join("\n")}\n\n` +
      `Error Data:\n${errorHeaders.join(",")}\n${errorCsvRows.join("\n")}`

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "network_report.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "error":
        return "text-red-600"
      case "warning":
        return "text-yellow-600"
      default:
        return "text-green-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-blue-600 rounded-full">
              <Network className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Network Protocol Analyzer</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time network monitoring and packet analysis tool for educational purposes
          </p>
        </div>

        {/* Control Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Control Panel</span>
            </CardTitle>
            <CardDescription>Start, stop, and manage network packet capture</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Button onClick={startCapture} disabled={isCapturing} className="flex items-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Start Capture</span>
              </Button>
              <Button
                onClick={stopCapture}
                disabled={!isCapturing}
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
              >
                <Square className="h-4 w-4" />
                <span>Stop Capture</span>
              </Button>
              <Button onClick={clearData} variant="destructive" className="flex items-center space-x-2">
                <Trash2 className="h-4 w-4" />
                <span>Clear Data</span>
              </Button>
              <Button onClick={handleDownloadReport} variant="secondary" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download Report</span>
              </Button>
              <div className="flex items-center space-x-2 ml-auto">
                <div className={`h-3 w-3 rounded-full ${isCapturing ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
                <span className="text-sm font-medium">{isCapturing ? "Capturing" : "Stopped"}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Wifi className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">{analytics.totalPackets}</p>
                  <p className="text-sm text-gray-600">Total Packets</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <div>
                  <p className="text-2xl font-bold">{analytics.totalErrors}</p>
                  <p className="text-sm text-gray-600">Network Errors</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold">{analytics.avgLatency}ms</p>
                  <p className="text-sm text-gray-600">Avg Latency</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">{analytics.throughput} Mbps</p>
                  <p className="text-sm text-gray-600">Throughput</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="packets" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="packets" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Live Packets</span>
            </TabsTrigger>
            <TabsTrigger value="errors" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Error Detection</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Live Packets Tab */}
          <TabsContent value="packets">
            <Card>
              <CardHeader>
                <CardTitle>Live Packet Capture</CardTitle>
                <CardDescription>Real-time network packet monitoring and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                {packets.length === 0 ? (
                  <div className="text-center py-8">
                    <Server className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No packets captured yet. Start capture to begin monitoring.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Protocol</TableHead>
                          <TableHead>Source</TableHead>
                          <TableHead>Destination</TableHead>
                          <TableHead>Port</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Flags</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {packets.slice(0, 20).map((packet) => (
                          <TableRow key={packet.id}>
                            <TableCell className="font-mono text-sm">{packet.timestamp}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{packet.protocol}</Badge>
                            </TableCell>
                            <TableCell className="font-mono text-sm">{packet.source}</TableCell>
                            <TableCell className="font-mono text-sm">{packet.destination}</TableCell>
                            <TableCell>{packet.port}</TableCell>
                            <TableCell>{packet.size} bytes</TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                {packet.flags.map((flag, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {flag}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className={`font-medium ${getStatusColor(packet.status)}`}>
                                {packet.status.toUpperCase()}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Error Detection Tab */}
          <TabsContent value="errors">
            <Card>
              <CardHeader>
                <CardTitle>Network Error Detection</CardTitle>
                <CardDescription>Automatic detection and classification of network errors</CardDescription>
              </CardHeader>
              <CardContent>
                {errors.length === 0 ? (
                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No errors detected. Network appears to be running smoothly.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {errors.slice(0, 10).map((error) => (
                      <Alert key={error.id}>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <Badge className={severityColors[error.severity]}>{error.severity}</Badge>
                                <span className="font-medium">{error.type}</span>
                                <span className="text-sm text-gray-500">{error.timestamp}</span>
                              </div>
                              <p className="text-sm">{error.description}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {error.source} → {error.destination}
                              </p>
                            </div>
                          </div>
                        </AlertDescription>
                      </Alert>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Protocol Distribution</CardTitle>
                  <CardDescription>Breakdown of network protocols in captured packets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(analytics.protocolDistribution).map(([protocol, count]) => {
                      const percentage = analytics.totalPackets > 0 ? (count / analytics.totalPackets) * 100 : 0
                      return (
                        <div key={protocol} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{protocol}</span>
                            <span className="text-sm text-gray-600">
                              {count} packets ({percentage.toFixed(1)}%)
                            </span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Network Performance</CardTitle>
                  <CardDescription>Real-time network performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Error Rate</span>
                        <span className="text-sm text-gray-600">{analytics.errorRate.toFixed(2)}%</span>
                      </div>
                      <Progress value={analytics.errorRate} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">{analytics.avgLatency}ms</p>
                        <p className="text-sm text-gray-600">Average Latency</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{analytics.throughput}</p>
                        <p className="text-sm text-gray-600">Throughput (Mbps)</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Network Health</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Overall Status</span>
                          <Badge
                            className={
                              analytics.errorRate < 5 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {analytics.errorRate < 5 ? "Healthy" : "Warning"}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Active Monitoring</span>
                          <Badge className={isCapturing ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}>
                            {isCapturing ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </div>
\
