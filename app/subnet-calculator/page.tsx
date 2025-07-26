"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Calculator, Network } from "lucide-react"
import { useState } from "react"

export default function SubnetCalculatorPage() {
  const [ipAddress, setIpAddress] = useState("192.168.1.0")
  const [cidr, setCidr] = useState(24)
  const [subnetInfo, setSubnetInfo] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const calculateSubnet = () => {
    setError(null)
    try {
      const ipParts = ipAddress.split(".").map(Number)
      if (ipParts.length !== 4 || ipParts.some(isNaN) || ipParts.some((p) => p < 0 || p > 255)) {
        throw new Error("Invalid IP Address format.")
      }
      if (cidr < 0 || cidr > 32) {
        throw new Error("CIDR must be between 0 and 32.")
      }

      const ipBinary = ipParts.map((part) => part.toString(2).padStart(8, "0")).join("")
      const networkBinary = ipBinary.substring(0, cidr) + "0".repeat(32 - cidr)
      const broadcastBinary = networkBinary.substring(0, cidr) + "1".repeat(32 - cidr)

      const networkAddress = binaryToIp(networkBinary)
      const broadcastAddress = binaryToIp(broadcastBinary)

      const hostBits = 32 - cidr
      const totalHosts = Math.pow(2, hostBits)
      const usableHosts = totalHosts > 2 ? totalHosts - 2 : 0 // Subtract network and broadcast addresses

      const subnetMaskBinary = "1".repeat(cidr) + "0".repeat(32 - cidr)
      const subnetMask = binaryToIp(subnetMaskBinary)

      const firstUsableHostBinary = hostBits > 0 ? networkBinary.substring(0, 31) + "1" : ""
      const lastUsableHostBinary = hostBits > 0 ? broadcastBinary.substring(0, 31) + "0" : ""

      const firstUsableHost = hostBits > 0 ? binaryToIp(firstUsableHostBinary) : "N/A"
      const lastUsableHost = hostBits > 0 ? binaryToIp(lastUsableHostBinary) : "N/A"

      setSubnetInfo({
        ipAddress,
        cidr,
        networkAddress,
        broadcastAddress,
        subnetMask,
        totalHosts,
        usableHosts,
        firstUsableHost,
        lastUsableHost,
      })
    } catch (e: any) {
      setError(e.message)
      setSubnetInfo(null)
    }
  }

  const binaryToIp = (binary: string) => {
    const parts = []
    for (let i = 0; i < 32; i += 8) {
      parts.push(Number.parseInt(binary.substring(i, i + 8), 2))
    }
    return parts.join(".")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-green-600 rounded-full">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Subnet Calculator</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easily calculate network addresses, broadcast addresses, and host ranges.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Network className="h-5 w-5" />
              <span>Input Network Details</span>
            </CardTitle>
            <CardDescription>Enter an IP address and CIDR prefix to calculate subnet information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ip-address" className="block text-sm font-medium text-gray-700">
                  IP Address
                </label>
                <Input
                  id="ip-address"
                  type="text"
                  placeholder="e.g., 192.168.1.0"
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="cidr" className="block text-sm font-medium text-gray-700">
                  CIDR Prefix (/0-32)
                </label>
                <Input
                  id="cidr"
                  type="number"
                  placeholder="e.g., 24"
                  min="0"
                  max="32"
                  value={cidr}
                  onChange={(e) => setCidr(Number(e.target.value))}
                  className="mt-1 block w-full"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex justify-end">
              <Button onClick={calculateSubnet}>Calculate Subnet</Button>
            </div>
          </CardContent>
        </Card>

        {subnetInfo && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Subnet Details</span>
              </CardTitle>
              <CardDescription>Calculated network information for the provided IP and CIDR.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">IP Address</TableCell>
                    <TableCell>{subnetInfo.ipAddress}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CIDR Prefix</TableCell>
                    <TableCell>/{subnetInfo.cidr}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Subnet Mask</TableCell>
                    <TableCell>{subnetInfo.subnetMask}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Network Address</TableCell>
                    <TableCell>{subnetInfo.networkAddress}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Broadcast Address</TableCell>
                    <TableCell>{subnetInfo.broadcastAddress}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Hosts</TableCell>
                    <TableCell>{subnetInfo.totalHosts}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Usable Hosts</TableCell>
                    <TableCell>{subnetInfo.usableHosts}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">First Usable Host</TableCell>
                    <TableCell>{subnetInfo.firstUsableHost}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Last Usable Host</TableCell>
                    <TableCell>{subnetInfo.lastUsableHost}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        <div className="text-center py-6 text-gray-500">
          <p>Network Protocol Analyzer - Educational Tool for Computer Networks</p>
          <p className="text-sm mt-1">Frontend-only simulation for learning network monitoring concepts</p>
        </div>
      </div>
    </div>
  )
}
