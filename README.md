# L0CUST

Private cross-chain swaps for ETHGlobal Buenos Aires. L0CUST lets users deposit into confidential eTokens, submit private CoW-style cross-chain swaps routed through LayerZero, and withdraw redeemed ERC-20s back on the chain of their choice. This repository contains both the production-ready UI and the Hybrid FHERC20 smart-contract primitives used by the protocol.

## Why L0CUST

- **Privacy-first batching** – Orders are grouped CoW-style, minimizing information leakage and MEV vectors before routing through LayerZero and settling on Uniswap.
- **End-to-end chain awareness** – Every touchpoint exposes an explicit chain selector so the Deposit → Swap → Withdraw journey always reflects source, intermediate, and destination networks.
- **Judge-friendly UX** – Dark, gridded aesthetic with amber + teal accents, responsive layout, clear CTA hierarchy, and contextual tooltips describing privacy guarantees.

## Product Tour

### Landing page (`/`)
- Sticky navbar with L0CUST wordmark, quick links (How it works, Docs, FAQ), and "Launch App" CTA.
- Hero split layout: headline + explanation copy on the left, mini route preview card on the right (e.g., `Ethereum → Arbitrum → Base`, batch stats, pseudo trade with slippage estimate).
- "How L0CUST works" trio of cards describing Deposit, private cross-chain swap, and Withdraw.
- Supported chain strip (Ethereum, Arbitrum, Base, Polygon, Avalanche) with caption on LayerZero + Uniswap routing guarantees.
- Security/Design goals row highlighting privacy, MEV-awareness, and composability, followed by a simple footer with docs/social links.

### App page (`/app`)
- Shared navbar + wallet connect button and network indicator.
- Tabs/segmented control and a lightweight stepper for `1. Deposit → 2. Swap → 3. Withdraw`.
- Each card exposes validation states, success banners, and CTA transitions so a user can complete the full journey in one session.

#### Deposit
- Select source chain (Ethereum/Arbitrum/Base/Polygon/Avalanche) and token (USDC/USDT/DAI) and view on-chain balance.
- Enter amount, view a mint summary (e.g., mint eUSDC on the selected chain) and submit `Deposit and mint eUSDC`.
- Success banners link directly to the Swap tab and expose placeholder Tx hashes for hackathon demos.

#### Swap
- Configure from-chain + eToken balance, destination chain + output asset, and amount to swap.
- Details panel reiterates execution plan: `CoW-style batch → LayerZero OFT bridge → Uniswap settlement`, estimated output, slippage, and expected batch size.
- CTA opens a confirmation modal, then progresses through `Submitting to batch…` → `Waiting for batch execution…`.
- Recent Activity table shows pending/executing/settled swaps with MEV-protected badges and truncated hashes.

#### Withdraw
- Choose withdrawal chain, eToken, and amount to redeem.
- Summary box translates eToken amount into clear ERC-20 output minus protocol/network fees.
- CTA displays `Withdrawing…` before confirming and offering a "View transaction" link.

## Architecture

| Layer      | Stack & Location | Notes |
|------------|------------------|-------|
| Frontend   | Next.js 16 + React 19 + Tailwind (dir: `ui/`) | Built with shadcn/ui components, Radix primitives, and lucide-react icons. Provides all UX described above plus placeholder data hooks for upcoming contract wiring. |
| Contracts  | Foundry + Hardhat toolchain (dir: `contracts/`) | Implements `HybridFHERC20`, an FHE-enabled ERC-20 that mints encrypted balances, wraps/unwraps, and exposes decrypt helpers. Configured for Cancun EVM, solc 0.8.26, and Ankr RPC endpoints. |

```
.
├── ui/                # Next.js app, Tailwind styling, app/ directory routing
├── contracts/         # Foundry workspace with FHERC20 implementation + interfaces
└── README.md          # You're here
```

## Getting Started

### Prerequisites
- Node.js 20+ and pnpm 9+ (UI)
- Bun or pnpm for dependency management inside `contracts/`
- Foundry (`forge`, `cast`, `anvil`) installed and available in `$PATH`

### Run the Web App
```bash
cd ui
pnpm install
pnpm dev
```
- Visit `http://localhost:3000` to interact with the landing and app pages.
- `pnpm build` + `pnpm start` will create a production build.
- `pnpm lint` keeps the Next project aligned with ESLint + TypeScript rules.

### Work with the Contracts
```bash
cd contracts
pnpm install   # or bun install
forge build
forge test --via-ir
```
- Set `ANKR_RPC_URL` and `ANKR_API_KEY` in your shell before running scripts to access the configured Sepolia endpoints.
- Use `forge script`/`forge create` (not provided) to deploy the `HybridFHERC20` or compose additional protocol pieces such as the batching AVS adaptor.

## Connecting UI ↔ Contracts

The UI currently ships with mocked balances and status messages to keep the hackathon demo deterministic. When you're ready to wire it up:
1. Deploy the FHERC20 and the rest of your AVS/L0 glue contracts per environment.
2. Surface chain metadata + RPC URLs via environment variables (e.g., `NEXT_PUBLIC_SUPPORTED_CHAINS`).
3. Replace placeholder hooks with real wagmi/viem calls for deposit approvals, LayerZero messages, and withdraw redemptions.
4. Feed swap history from your batching backend or The Graph so the Recent Activity table reflects live data.

## Deployment

- **UI:** Deploy `ui/` to Vercel, Netlify, or any Next.js host. Remember to mirror the environment variables listed above.
- **Contracts:** Use Foundry scripts or Hardhat tasks as preferred. Store deployment artifacts in `contracts/deployments/` (whitelisted for filesystem access in `foundry.toml`).

## Contributing

1. Fork + branch (`git checkout -b feature/awesome`).
2. Update the UI or contracts.
3. Run `pnpm lint` / `forge test`.
4. Submit a PR with a concise summary of UX changes or protocol tweaks.

## License

MIT for both the UI and smart contracts, with attribution to the ETHGlobal Buenos Aires hackathon project L0CUST.
