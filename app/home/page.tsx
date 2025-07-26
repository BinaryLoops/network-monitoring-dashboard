import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Network, Activity, Shield, BarChart3, Calculator, Router } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <div className="space-y-4">
          <Home className="h-16 w-16 text-blue-600 mx-auto" />
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-700">NetAnalyzer</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your comprehensive platform for understanding, analyzing, and managing computer networks. Dive deep into
            network protocols, detect errors, and explore powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/" passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <Network className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <CardTitle>Protocol Analyzer</CardTitle>
                <CardDescription>Real-time packet capture and analysis.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Monitor live network traffic and inspect packet details.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/error-detection" passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <Shield className="h-10 w-10 text-red-600 mx-auto mb-2" />
                <CardTitle>Error Detection</CardTitle>
                <CardDescription>Identify and classify network anomalies.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Get insights into network health and troubleshoot issues.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/performance" passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <CardTitle>Network Performance</CardTitle>
                <CardDescription>Visualize key network metrics.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Track latency, throughput, and protocol distribution.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/subnet-calculator" passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <Calculator className="h-10 w-10 text-purple-600 mx-auto mb-2" />
                <CardTitle>Subnet Calculator</CardTitle>
                <CardDescription>Plan and design your network subnets.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Calculate IP ranges, broadcast addresses, and more.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/routing" passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <Router className="h-10 w-10 text-orange-600 mx-auto mb-2" />
                <CardTitle>Routing Protocols</CardTitle>
                <CardDescription>Learn about how data finds its way.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Understand RIP, OSPF, BGP, and EIGRP.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tools" passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <Activity className="h-10 w-10 text-teal-600 mx-auto mb-2" />
                <CardTitle>Network Tools</CardTitle>
                <CardDescription>Essential utilities for network diagnostics.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Ping, Traceroute, Port Scanner, and more.</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center pt-8 text-gray-600">
          <p>&copy; 2024 NetAnalyzer. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
