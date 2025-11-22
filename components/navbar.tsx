import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bug } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
              <Bug className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">L0CUST</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#how-it-works" className="transition-colors hover:text-primary">
            How it works
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            Docs
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/app">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              Launch App
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
