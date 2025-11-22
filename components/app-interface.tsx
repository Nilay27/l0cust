"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Info, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react"
import { Label } from "@/components/ui/label"

export function AppInterface() {
  const [activeTab, setActiveTab] = useState("deposit")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleAction = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess(true)
    }, 2000)
  }

  const resetState = (val: string) => {
    setActiveTab(val)
    setSuccess(false)
    setIsSubmitting(false)
  }

  return (
    <div className="w-full max-w-4xl flex flex-col gap-8">
      {/* Simple Stepper */}
      <div className="flex justify-center w-full">
        <div className="flex items-center gap-2 md:gap-4 text-sm">
          <div
            className={`flex items-center gap-2 ${activeTab === "deposit" ? "text-primary font-bold" : "text-muted-foreground"}`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full border ${activeTab === "deposit" ? "border-primary bg-primary/10" : "border-muted-foreground/30"}`}
            >
              1
            </div>
            <span>Deposit</span>
          </div>
          <div className="w-8 h-px bg-border"></div>
          <div
            className={`flex items-center gap-2 ${activeTab === "swap" ? "text-primary font-bold" : "text-muted-foreground"}`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full border ${activeTab === "swap" ? "border-primary bg-primary/10" : "border-muted-foreground/30"}`}
            >
              2
            </div>
            <span>Swap</span>
          </div>
          <div className="w-8 h-px bg-border"></div>
          <div
            className={`flex items-center gap-2 ${activeTab === "withdraw" ? "text-primary font-bold" : "text-muted-foreground"}`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full border ${activeTab === "withdraw" ? "border-primary bg-primary/10" : "border-muted-foreground/30"}`}
            >
              3
            </div>
            <span>Withdraw</span>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={resetState} className="w-full flex flex-col items-center">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="swap">Swap</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>

        {/* DEPOSIT TAB */}
        <TabsContent value="deposit" className="w-full max-w-lg">
          <Card className="border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Deposit & Mint eTokens</CardTitle>
              <CardDescription>Lock your public tokens to mint private eTokens.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!success ? (
                <>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Source Chain</Label>
                        <Select defaultValue="ethereum">
                          <SelectTrigger>
                            <SelectValue placeholder="Select chain" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ethereum">Ethereum</SelectItem>
                            <SelectItem value="arbitrum">Arbitrum</SelectItem>
                            <SelectItem value="base">Base</SelectItem>
                            <SelectItem value="optimism">Optimism</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Token</Label>
                        <Select defaultValue="usdc">
                          <SelectTrigger>
                            <SelectValue placeholder="Select token" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usdc">USDC</SelectItem>
                            <SelectItem value="usdt">USDT</SelectItem>
                            <SelectItem value="dai">DAI</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">Balance: 1,250.32 USDC</div>
                  </div>

                  <div className="space-y-2">
                    <Label>Amount to deposit</Label>
                    <div className="relative">
                      <Input placeholder="0.00" className="pr-16 font-mono text-lg" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 text-xs text-primary hover:text-primary hover:bg-primary/10"
                      >
                        MAX
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Info className="w-3 h-3" /> You will receive <strong>eUSDC</strong> usable inside L0CUST.
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-4 text-sm space-y-2 border border-border/50">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">From</span>
                      <span>Ethereum Mainnet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minting</span>
                      <span className="text-primary font-medium">eUSDC</span>
                    </div>
                    <div className="border-t border-border/30 my-2 pt-2 flex justify-between text-xs">
                      <span className="text-muted-foreground">Est. Gas</span>
                      <span>$4.50</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-10 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Deposit Successful!</h3>
                  <p className="text-muted-foreground">
                    You have successfully minted <span className="text-foreground font-mono">1,000 eUSDC</span> on
                    Ethereum.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              {!success ? (
                <Button className="w-full text-lg h-12" onClick={handleAction} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Depositing...
                    </>
                  ) : (
                    "Deposit and Mint"
                  )}
                </Button>
              ) : (
                <Button className="w-full text-lg h-12" onClick={() => resetState("swap")}>
                  Go to Swap <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        {/* SWAP TAB */}
        <TabsContent value="swap" className="w-full grid lg:grid-cols-[1fr_300px] gap-6">
          {/* Main Swap Card */}
          <Card className="border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Private Cross-Chain Swap</CardTitle>
              <CardDescription>Batch orders CoW-style and route via LayerZero.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!success ? (
                <>
                  <div className="space-y-4">
                    {/* FROM */}
                    <div className="p-4 rounded-lg bg-muted/20 border border-border/40 space-y-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground font-medium">From</span>
                        <span className="text-xs text-muted-foreground">Bal: 1,000 eUSDC</span>
                      </div>
                      <div className="flex gap-2">
                        <Select defaultValue="ethereum">
                          <SelectTrigger className="w-[130px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ethereum">Ethereum</SelectItem>
                            <SelectItem value="arbitrum">Arbitrum</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex-1 relative">
                          <Input placeholder="0.00" className="font-mono text-right" />
                          <div className="absolute left-3 top-2.5 text-sm font-medium text-muted-foreground pointer-events-none">
                            eUSDC
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center -my-3 relative z-10">
                      <div className="bg-background border border-border rounded-full p-2 shadow-sm">
                        <ArrowRight className="h-4 w-4 rotate-90 text-muted-foreground" />
                      </div>
                    </div>

                    {/* TO */}
                    <div className="p-4 rounded-lg bg-muted/20 border border-border/40 space-y-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground font-medium">To (Receive)</span>
                        <span className="text-xs text-muted-foreground">Bal: 0.00</span>
                      </div>
                      <div className="flex gap-2">
                        <Select defaultValue="base">
                          <SelectTrigger className="w-[130px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ethereum">Ethereum</SelectItem>
                            <SelectItem value="base">Base</SelectItem>
                            <SelectItem value="avalanche">Avalanche</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select defaultValue="usdt">
                          <SelectTrigger className="flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usdt">USDT</SelectItem>
                            <SelectItem value="usdc">USDC</SelectItem>
                            <SelectItem value="dai">DAI</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-10 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Swap Submitted!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Your private swap has been batched and is being routed to{" "}
                    <span className="text-foreground">Base</span>.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              {!success ? (
                <Button className="w-full text-lg h-12" onClick={handleAction} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Routing...
                    </>
                  ) : (
                    "Submit Private Swap"
                  )}
                </Button>
              ) : (
                <Button className="w-full text-lg h-12" onClick={() => resetState("withdraw")}>
                  View Status / Withdraw
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Info Side Panel for Swap */}
          <div className="space-y-6">
            <Card className="bg-muted/20 border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Route Details
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bridge</span>
                  <span className="font-medium">LayerZero OFT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Settlement</span>
                  <span className="font-medium">Uniswap V3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="text-primary font-medium">CoW Batch</span>
                </div>
                <div className="border-t border-border/30 pt-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Est. Output</span>
                    <span className="font-mono">~998.23 USDT</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Slippage</span>
                    <span className="text-green-500">0.25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-xs text-primary/80 leading-relaxed">
              <div className="flex items-center gap-2 font-bold mb-1 text-primary">
                <Info className="w-4 h-4" /> Privacy Note
              </div>
              Your trade is bundled with 5-10 others. Observers see a single aggregate settlement on Uniswap, hiding
              your specific trade size and timing.
            </div>
          </div>
        </TabsContent>

        {/* WITHDRAW TAB */}
        <TabsContent value="withdraw" className="w-full max-w-lg">
          <Card className="border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Withdraw</CardTitle>
              <CardDescription>Redeem your eTokens for standard ERC-20s.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4 flex gap-3 items-start">
                <Info className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-500 mb-1">Breaking the link</p>
                  <p className="text-muted-foreground text-xs">
                    Withdrawing to a fresh address is recommended to maximize privacy.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Chain</Label>
                  <Select defaultValue="base">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="base">Base</SelectItem>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Amount (eUSDC)</Label>
                  <div className="relative">
                    <Input placeholder="0.00" className="font-mono" />
                    <span className="absolute right-3 top-2.5 text-xs text-muted-foreground">Available: 0.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled>
                No Funds Available
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
