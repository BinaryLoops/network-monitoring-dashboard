"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Bug, XCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

const mockErrors = [
  {
    id: "err-001",
    timestamp: "10:30:15 AM",
    type: "Connection Timeout",
    severity: "Critical",
    description: "Server 192.168.1.10 did not respond to connection request.",
    source: "192.168.1.5",
    destination: "192.168.1.10",
  },
  {
    id: "err-002",
    timestamp: "10:29:40 AM",
    type: "Packet Loss",
    severity: "High",
    description: "Significant packet loss detected on interface eth0.",
    source: "N/A",
    destination: "N/A",
  },
  {
    id: "err-003",
    timestamp: "10:28:01 AM",
    type: "DNS Resolution Failed",
    severity: "Medium",
    description: "Failed to resolve hostname example.com.",
    source: "10.0.0.12",
    destination: "8.8.8.8",
  },
  {
    id: "err-004",
    timestamp: "10:27:10 AM",
    type: "Port Unreachable",
    severity: "Low",
    description: "Destination port 8080 unreachable on 172.16.0.20.",
    source: "172.16.0.10",
    destination: "172.16.0.20",
  },
  {
    id: "err-005",
    timestamp: "10:25:55 AM",
    type: "Checksum Error",
    severity: "Medium",
    description: "Corrupted packet detected due to checksum mismatch.",
    source: "192.168.1.1",
    destination: "192.168.1.50",
  },
]

const severityColors = {
  Low: "bg-blue-100 text-blue-800",
  Medium: "bg-yellow-100 text-yellow-800",
  High: "bg-orange-100 text-orange-800",
  Critical: "bg-red-100 text-red-800",
}

export default function ErrorDetectionPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Network Error Detection</h1>
            <p className="text-gray-600 mt-1">Detailed insights into network anomalies and issues</p>
          </div>
        </div>

        {/* Error Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Errors</CardTitle>
              <Bug className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockErrors.length}</div>
              <p className="text-xs text-muted-foreground">Last 24 hours</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Errors</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {mockErrors.filter((e) => e.severity === "Critical").length}
              </div>
              <p className="text-xs text-muted-foreground">Immediate attention needed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Severity</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {mockErrors.filter((e) => e.severity === "High").length}
              </div>
              <p className="text-xs text-muted-foreground">Requires prompt action</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network Health</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Good</div>
              <p className="text-xs text-muted-foreground">No major issues detected</p>
            </CardContent>
          </Card>
        </div>

        {/* Error List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Errors</CardTitle>
            <CardDescription>List of recently detected network errors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockErrors.map((error) => (
              <Alert key={error.id} className="border-l-4 border-red-500">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle className="flex items-center gap-2">
                  <Badge className={severityColors[error.severity]}>{error.severity}</Badge>
                  <span>{error.type}</span>
                  <span className="ml-auto text-sm text-gray-500">{error.timestamp}</span>
                </AlertTitle>
                <AlertDescription>
                  <p className="text-sm">{error.description}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Source: {error.source} | Destination: {error.destination}
                  </p>
                </AlertDescription>
              </Alert>
            ))}
            {mockErrors.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Info className="h-12 w-12 mx-auto mb-4" />
                <p>No errors to display at the moment.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
