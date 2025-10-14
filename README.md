# FertilityFlow - Secure Fertility Journey on Base

A Next.js Base Mini App for secure, collaborative fertility treatment management.

## Features

- 🔐 **Secure Communication**: Farcaster-native clinic-patient messaging
- 📊 **Cycle Tracking**: On-chain fertility cycle and lab data management
- 👥 **Support Groups**: Private, Basename-based peer support communities
- 🎓 **Educational Frames**: Interactive, personalized treatment content
- 🛡️ **Data Consent**: On-chain consent management for health data

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base blockchain integration
- Farcaster Frame SDK for Mini App features
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Base Integration

- Chain ID: 8453 (Base Mainnet)
- Testnet Chain ID: 84532 (Base Sepolia)
- RPC: https://mainnet.base.org
- Explorer: https://basescan.org

## OnchainKit Features

- Wallet connection with ConnectWallet
- Identity resolution with Basenames
- Transaction management with gas sponsorship
- On-chain consent registry

## Farcaster Mini App

- User context with useMiniKit
- Notifications with useSendNotification
- Frame integration with useAddFrame
- Social sharing with useComposeCast

## License

MIT
