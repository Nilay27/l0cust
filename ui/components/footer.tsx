import Link from "next/link"
import { Github, Twitter, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>© 2025 L0CUST Protocol</p>
          <p className="text-xs opacity-60">Experimental prototype for ETHGlobal Buenos Aires</p>
        </div>
        <div className="flex gap-6">
          <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FileText className="h-4 w-4" />
            <span>Docs</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Twitter className="h-4 w-4" />
            <span>Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
