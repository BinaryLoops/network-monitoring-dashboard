# Network Protocol Analyzer - Professional CN Project

This project is a comprehensive network protocol analysis and performance monitoring dashboard, designed as an educational tool for Computer Networks (BCSE308L). It provides a frontend-only simulation of real-time network activity, allowing users to explore concepts related to packet capture, error detection, and network analytics without requiring a live network connection.

## Features

*   **Real-time Packet Capture Simulation**: Generates and displays simulated network packets with details like timestamp, protocol, source/destination IP, port, size, and flags.
*   **Error Detection & Monitoring**: Automatically detects and classifies simulated network errors, displaying them with severity levels (Low, Medium, High, Critical) and descriptive messages.
*   **Real-time Analytics**: Provides key performance indicators such as total packets, total errors, average latency, and throughput.
*   **Protocol Distribution**: Visualizes the breakdown of different network protocols in captured packets.
*   **Severity-based Color Coding**: Errors are color-coded based on their severity for quick identification.
*   **Control Panel**: Interactive buttons to start, stop, and clear the simulated network capture data.
*   **Download Report**: Allows users to download a CSV report of captured packets and detected errors.
*   **Professional UI with Tabs**: Organizes information into intuitive tabs for Live Packets, Error Detection, and Analytics.
*   **Subnet Calculator**: A dedicated tool for calculating subnet masks, network addresses, broadcast addresses, and host ranges.
*   **Routing Protocols (Placeholder)**: A section for future expansion on routing protocol visualizations.
*   **Network Tools (Placeholder)**: A section for future expansion on various network utilities.
*   **Home Page (Placeholder)**: A simple home page.
*   **Line Chart (Placeholder)**: A page to demonstrate line chart capabilities.

## Technologies Used

*   **Next.js**: React framework for building the frontend application.
*   **React**: JavaScript library for building user interfaces.
*   **Tailwind CSS**: Utility-first CSS framework for styling.
*   **shadcn/ui**: Reusable UI components built with Radix UI and Tailwind CSS.
*   **Lucide React**: Icon library.

## Setup and Running Locally

1.  **Clone the repository:**
    \`\`\`bash
    git clone <repository-url>
    cd network-protocol-analyzer
    \`\`\`
2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or yarn install
    # or pnpm install
    \`\`\`
3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    \`\`\`
4.  **Open in browser:**
    Navigate to `http://localhost:3000` in your web browser.

## Project Structure

\`\`\`
.
├── app/
│   ├── api/                  # API routes for simulated backend
│   │   ├── network/
│   │   │   ├── analytics/route.ts
│   │   │   ├── clear/route.ts
│   │   │   ├── errors/route.ts
│   │   │   ├── packets/route.ts
│   │   │   ├── start/route.ts
│   │   │   ├── status/route.ts
│   │   │   └── stop/route.ts
│   ├── error-detection/page.tsx # Frontend for error detection details
│   ├── home/page.tsx         # Simple home page
│   ├── layout.tsx            # Root layout for the application
│   ├── line-chart/page.tsx   # Frontend for line chart visualization
│   ├── loading.tsx           # Loading UI for Next.js Suspense
│   ├── page.tsx              # Main dashboard (Protocol Analyzer)
│   ├── performance/page.tsx  # Frontend for performance metrics
│   ├── reports/page.tsx      # Frontend for report generation
│   ├── routing/page.tsx      # Frontend for routing protocols
│   └── subnet-calculator/page.tsx # Frontend for subnet calculator
│   └── tools/page.tsx        # Frontend for network tools
├── components/
│   ├── navigation.tsx        # Main navigation component
│   ├── theme-provider.tsx    # Theme provider for dark/light mode
│   └── ui/                   # shadcn/ui components
│       └── ... (various UI components like button, card, tabs, etc.)
├── hooks/
│   ├── use-mobile.tsx        # Custom hook for mobile detection
│   └── use-toast.ts          # Custom hook for toast notifications
├── lib/
│   └── utils.ts              # Utility functions (e.g., cn for Tailwind classes)
├── public/                   # Static assets (images, icons)
├── styles/
│   └── globals.css           # Global CSS styles
├── .gitignore                # Git ignore file
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── README.md                 # Project README
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json               # Vercel deployment configuration
