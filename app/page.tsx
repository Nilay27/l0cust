import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Shield, Zap, Layers, ArrowLeftRight, Wallet, Download } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
            {/* Swarm effect */}
            <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                  Private cross-chain swaps that <span className="text-primary">sweep</span> across liquidity.
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                  L0CUST lets you deposit once, then execute cross-chain swaps privately. Orders are batched CoW-style,
                  bridged via LayerZero, and settled on Uniswap without exposing your exact size, route, or timing.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="/app">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8 shadow-[0_0_20px_rgba(251,191,36,0.2)] text-base"
                    >
                      Launch App <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 px-8 border-primary/20 hover:bg-primary/5 hover:text-primary text-base bg-transparent"
                    >
                      How L0CUST Works
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Card Mockup */}
              <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
                <div className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-mono text-primary">Live Route Preview</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">ID: 0x8a...3f1</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Route</span>
                      <div className="flex items-center gap-2 font-medium">
                        <span className="text-foreground">Ethereum</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        <span className="text-foreground">Arbitrum</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        <span className="text-foreground">Base</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-background/50 p-4 border border-border/50 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Swap Input</span>
                        <span className="font-mono font-medium">1,000 USDC</span>
                      </div>
                      <div className="flex justify-center">
                        <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Est. Output</span>
                        <span className="font-mono font-medium text-primary">998.4 USDT</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="rounded bg-primary/10 p-2 text-center">
                        <div className="text-[10px] uppercase tracking-wider text-primary/70 font-semibold">
                          Privacy
                        </div>
                        <div className="text-xs font-medium">High</div>
                      </div>
                      <div className="rounded bg-primary/10 p-2 text-center">
                        <div className="text-[10px] uppercase tracking-wider text-primary/70 font-semibold">
                          Batch Size
                        </div>
                        <div className="text-xs font-medium">12 Orders</div>
                      </div>
                      <div className="rounded bg-primary/10 p-2 text-center">
                        <div className="text-[10px] uppercase tracking-wider text-primary/70 font-semibold">
                          Protection
                        </div>
                        <div className="text-xs font-medium">MEV Shield</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
                <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-secondary/20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Chains Strip */}
        <div className="border-y border-border/40 bg-background/50 py-8">
          <div className="container px-4 md:px-6 text-center">
            <p className="mb-6 text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Supported Networks
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Simple text representations for now, would be logos */}
              <div className="flex items-center gap-2 font-semibold text-lg">
                <div className="w-3 h-3 rounded-full bg-[#627EEA]"></div> Ethereum
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <div className="w-3 h-3 rounded-full bg-[#12AAFF]"></div> Arbitrum
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <div className="w-3 h-3 rounded-full bg-[#0052FF]"></div> Base
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <div className="w-3 h-3 rounded-full bg-[#8247E5]"></div> Polygon
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <div className="w-3 h-3 rounded-full bg-[#E84142]"></div> Avalanche
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Cross chain routing via LayerZero OFT • Settlement via Uniswap
            </p>
          </div>
        </div>

        {/* How it works */}
        <section id="how-it-works" className="py-20 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How L0CUST Works</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                A seamless privacy-preserving flow for your assets.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 border-t border-dashed border-primary/30 z-0"></div>

              {/* Card 1 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                  <Wallet className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Deposit</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[300px]">
                  Choose your source chain, deposit supported tokens, and mint confidential{" "}
                  <span className="text-primary/80">eTokens</span> that live inside L0CUST.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                  <ArrowLeftRight className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Private Swap</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[300px]">
                  L0CUST <span className="text-primary/80">batches</span> your order CoW-style, routes it via LayerZero,
                  and settles on Uniswap anonymously.
                </p>
              </div>

              {/* Card 3 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                  <Download className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Withdraw</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[300px]">
                  Redeem eTokens back into clear <span className="text-primary/80">ERC-20s</span> on your chosen chain,
                  with no link to the original route.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Grid */}
        <section className="py-16 bg-muted/20 border-t border-border/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center md:justify-start text-primary mb-2">
                  <Shield className="h-5 w-5" />
                  <h3 className="font-bold">Privacy-first</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Orders are batched and not exposed as single, easily sniped transactions.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center md:justify-start text-primary mb-2">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-bold">MEV Aware</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Designed to reduce information leakage and minimize extractable value.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center md:justify-start text-primary mb-2">
                  <Layers className="h-5 w-5" />
                  <h3 className="font-bold">Composability</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Built on top of widely used primitives: LayerZero and Uniswap.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
