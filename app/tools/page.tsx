import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Wifi, Server, Globe, Shield, Terminal } from "lucide-react"

export default function NetworkToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Network Tools</h1>
            <p className="text-gray-600 mt-1">A collection of essential tools for network analysis and management</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-600" />
                <span>Ping Utility</span>
              </CardTitle>
              <CardDescription>Test network connectivity and measure round-trip time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                Send ICMP echo request packets to a target host and listen for ICMP echo reply.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Check host reachability</li>
                <li>Measure latency</li>
                <li>Troubleshoot connectivity issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-green-600" />
                <span>Traceroute</span>
              </CardTitle>
              <CardDescription>Display the path and measure transit delays of packets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                Traces the route that packets take to reach a destination, showing each hop along the way.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Identify network bottlenecks</li>
                <li>Map network paths</li>
                <li>Diagnose routing problems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-purple-600" />
                <span>Port Scanner</span>
              </CardTitle>
              <CardDescription>Scan a target host for open ports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                Identifies which ports on a network host are open, closed, or filtered.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Discover running services</li>
                <li>Identify potential vulnerabilities</li>
                <li>Verify firewall configurations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-orange-600" />
                <span>IP Lookup</span>
              </CardTitle>
              <CardDescription>Retrieve geographical and ownership information for an IP address</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                Provides details about an IP address, including its location, ISP, and organization.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Geolocate IP addresses</li>
                <li>Identify network owners</li>
                <li>Investigate suspicious traffic</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                <span>DNS Lookup</span>
              </CardTitle>
              <CardDescription>Query DNS records for a domain name</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                Retrieves various DNS records (A, MX, NS, CNAME, etc.) associated with a domain.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Verify DNS configurations</li>
                <li>Troubleshoot domain resolution</li>
                <li>Identify mail servers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-gray-600" />
                <span>Packet Generator</span>
              </CardTitle>
              <CardDescription>Create and send custom network packets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                Allows users to craft and inject custom packets into the network for testing or analysis.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Test firewall rules</li>
                <li>Simulate network conditions</li>
                <li>Perform penetration testing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
