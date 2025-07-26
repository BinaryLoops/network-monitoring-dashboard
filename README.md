# network-monitoring-dashboard
# Network Protocol Analyzer - Professional CN Project

A comprehensive network protocol analysis and performance monitoring dashboard designed as an educational tool for Computer Networks (BCSE308L). This project provides a frontend-only simulation of real-time network activity, allowing users to explore network monitoring concepts without requiring a live network connection.

![Network Protocol Analyzer](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

### Core Functionality
- **📊 Real-time Packet Capture Simulation**: Generates and displays simulated network packets with comprehensive details
- **🔍 Error Detection & Monitoring**: Automatically detects and classifies network errors with severity levels
- **📈 Live Analytics Dashboard**: Real-time performance metrics and network health monitoring
- **🌐 Protocol Distribution Analysis**: Visual breakdown of network protocols in captured traffic
- **⚡ Performance Monitoring**: Track latency, throughput, and network efficiency metrics

### Network Tools
- **🧮 Subnet Calculator**: Calculate network addresses, broadcast addresses, and host ranges
- **🔀 Routing Protocols**: Educational content on RIP, OSPF, BGP, and EIGRP
- **🛠️ Network Utilities**: Collection of essential network diagnostic tools
- **📋 Report Generation**: Export captured data and analysis reports

### User Interface
- **🎨 Modern UI Design**: Clean, professional interface built with shadcn/ui
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌙 Theme Support**: Light and dark mode compatibility
- **📑 Tabbed Interface**: Organized content with intuitive navigation

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework for full-stack development | 14.2.5 |
| **React** | Frontend library for building user interfaces | 18.x |
| **TypeScript** | Type-safe JavaScript development | 5.x |
| **Tailwind CSS** | Utility-first CSS framework | 3.4.x |
| **shadcn/ui** | Reusable UI components | Latest |
| **Lucide React** | Modern icon library | Latest |
| **Recharts** | Data visualization library | 2.12.7 |

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager
- Git for version control

### Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/BinaryLoops/network-protocol-analyzer.git
   cd network-protocol-analyzer
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
network-protocol-analyzer/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/                      # API routes (simulated backend)
│   │   └── 📁 network/              # Network monitoring endpoints
│   ├── 📁 error-detection/          # Error detection page
│   ├── 📁 home/                     # Home page
│   ├── 📁 line-chart/               # Data visualization page
│   ├── 📁 performance/              # Performance monitoring page
│   ├── 📁 reports/                  # Report generation page
│   ├── 📁 routing/                  # Routing protocols page
│   ├── 📁 subnet-calculator/        # Subnet calculator tool
│   ├── 📁 tools/                    # Network tools collection
│   ├── 📄 layout.tsx                # Root layout component
│   ├── 📄 loading.tsx               # Loading UI component
│   ├── 📄 page.tsx                  # Main dashboard
│   └── 📄 globals.css               # Global styles
├── 📁 components/                   # Reusable React components
│   ├── 📄 navigation.tsx            # Main navigation
│   ├── 📄 theme-provider.tsx        # Theme management
│   └── 📁 ui/                       # shadcn/ui components
├── 📁 hooks/                        # Custom React hooks
│   ├── 📄 use-mobile.tsx            # Mobile detection hook
│   └── 📄 use-toast.ts              # Toast notification hook
├── 📁 lib/                          # Utility functions
│   └── 📄 utils.ts                  # Common utilities
├── 📁 public/                       # Static assets
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
├── 📄 tsconfig.json                 # TypeScript configuration
└── 📄 package.json                  # Project dependencies
\`\`\`

## 🎯 Usage Guide

### Starting Network Monitoring

1. **Launch the Application**: Open the dashboard in your browser
2. **Start Capture**: Click the "Start Capture" button in the control panel
3. **Monitor Activity**: Watch real-time packet capture and error detection
4. **Analyze Data**: Switch between tabs to view different aspects of network activity

### Key Features Walkthrough

#### 📊 Live Packet Capture
- View real-time simulated network packets
- Monitor protocol distribution (TCP, UDP, HTTP, HTTPS, DNS, etc.)
- Track packet details including source, destination, ports, and flags

#### 🚨 Error Detection
- Automatic detection of network anomalies
- Severity classification (Low, Medium, High, Critical)
- Detailed error descriptions and timestamps

#### 📈 Analytics Dashboard
- Real-time performance metrics
- Protocol distribution charts
- Network health indicators
- Throughput and latency monitoring

#### 🧮 Subnet Calculator
- Calculate network addresses and subnet masks
- Determine broadcast addresses and host ranges
- Support for CIDR notation

### Control Panel Operations

| Button | Function | Description |
|--------|----------|-------------|
| ▶️ Start Capture | Begin monitoring | Starts simulated packet capture |
| ⏹️ Stop Capture | Pause monitoring | Stops packet generation |
| 🗑️ Clear Data | Reset dashboard | Clears all captured data |
| 📥 Download Report | Export data | Downloads CSV report |

## 🎓 Educational Value

This project serves as an excellent learning tool for:

- **Network Protocol Understanding**: Learn about TCP, UDP, HTTP, DNS, and other protocols
- **Error Detection Concepts**: Understand common network errors and their classifications
- **Performance Monitoring**: Grasp key network performance indicators
- **Subnet Calculations**: Master IP addressing and subnetting concepts
- **Routing Protocols**: Explore RIP, OSPF, BGP, and EIGRP fundamentals

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for custom configurations:

\`\`\`env
# Application Settings
NEXT_PUBLIC_APP_NAME="Network Protocol Analyzer"
NEXT_PUBLIC_APP_VERSION="1.0.0"

# Simulation Settings
NEXT_PUBLIC_PACKET_INTERVAL=500
NEXT_PUBLIC_ERROR_PROBABILITY=0.1
\`\`\`

### Customization Options

#### Packet Generation
Modify packet generation parameters in `app/page.tsx`:

\`\`\`typescript
// Adjust packet generation frequency
const PACKET_INTERVAL = 500 // milliseconds

// Modify error probability
const ERROR_PROBABILITY = 0.1 // 10% chance
\`\`\`

#### Protocol Support
Add new protocols in the protocols array:

\`\`\`typescript
const protocols = ["TCP", "UDP", "HTTP", "HTTPS", "DNS", "FTP", "SMTP", "ICMP", "YOUR_PROTOCOL"]
\`\`\`

## 🤝 Contributing

We welcome contributions to improve the Network Protocol Analyzer! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly
- Ensure responsive design compatibility

### Areas for Contribution
- 🔧 Additional network tools and utilities
- 📊 Enhanced data visualization components
- 🎨 UI/UX improvements
- 📚 Educational content and tutorials
- 🐛 Bug fixes and performance optimizations

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful UI components
- **Lucide** for the comprehensive icon library
- **Recharts** for data visualization capabilities
- **Tailwind CSS** for the utility-first styling approach
- **Next.js** team for the excellent React framework

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/BinaryLoops/network-protocol-analyzer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/BinaryLoops/network-protocol-analyzer/discussions)
- **Email**: snipeproayush2005@gmail.com
## 🗺️ Roadmap

### Version 2.0 (Planned)
- [ ] Real network interface integration
- [ ] Advanced packet filtering options
- [ ] Custom protocol support
- [ ] Enhanced reporting features
- [ ] Multi-language support

### Version 1.1 (In Progress)
- [ ] Dark mode improvements
- [ ] Mobile responsiveness enhancements
- [ ] Additional network tools
- [ ] Performance optimizations

---

<div align="center">

**Built with ❤️ for Computer Networks Education**

[⭐ Star this repo](https://github.com/your-username/network-protocol-analyzer) | [🐛 Report Bug](https://github.com/BinaryLoops/network-protocol-analyzer/issues) | [💡 Request Feature](https://github.com/BinaryLoops/network-protocol-analyzer/issues)

</div>

