import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Router, GitFork, Share2, Layers } from "lucide-react"

export default function RoutingProtocolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Routing Protocols</h1>
            <p className="text-gray-600 mt-1">Explore different network routing protocols and their functionalities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Router className="h-5 w-5 text-blue-600" />
                <span>RIP (Routing Information Protocol)</span>
              </CardTitle>
              <CardDescription>Distance-Vector Routing Protocol</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                RIP uses hop count as a metric to find the best path to a destination. It has a maximum hop count of 15,
                making it suitable for small networks.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Metric: Hop Count</li>
                <li>Max Hops: 15</li>
                <li>Updates: Every 30 seconds</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitFork className="h-5 w-5 text-green-600" />
                <span>OSPF (Open Shortest Path First)</span>
              </CardTitle>
              <CardDescription>Link-State Routing Protocol</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                OSPF is a widely used interior gateway protocol that uses Dijkstra's algorithm to find the shortest
                path. It's efficient and scalable for large networks.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Metric: Cost (Bandwidth)</li>
                <li>Scalability: High</li>
                <li>Updates: Event-triggered</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-purple-600" />
                <span>BGP (Border Gateway Protocol)</span>
              </CardTitle>
              <CardDescription>Path-Vector Routing Protocol</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                BGP is the routing protocol used to exchange routing information between autonomous systems (AS) on the
                Internet.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Metric: Path Attributes</li>
                <li>Type: Exterior Gateway Protocol</li>
                <li>Usage: Internet routing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-orange-600" />
                <span>EIGRP (Enhanced Interior Gateway Routing Protocol)</span>
              </CardTitle>
              <CardDescription>Hybrid Routing Protocol (Cisco Proprietary)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">
                EIGRP is an advanced distance-vector protocol that includes features of link-state protocols, offering
                fast convergence and efficient use of bandwidth.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Metric: Bandwidth, Delay, Reliability, Load</li>
                <li>Convergence: Fast</li>
                <li>Updates: Partial, Bounded</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
