import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bug, Wallet } from "lucide-react"

export function NavbarApp() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
            <Bug className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden md:inline-block">L0CUST</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-xs font-medium">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Ethereum Mainnet
          </div>
          <Button
            variant="outline"
            className="gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary bg-transparent"
          >
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">0x8a...3f1</span>
            <span className="sm:hidden">Connect</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
