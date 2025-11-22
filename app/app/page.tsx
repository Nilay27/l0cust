import { AppInterface } from "@/components/app-interface"
import { NavbarApp } from "@/components/navbar-app"

export default function AppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NavbarApp />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <AppInterface />
      </main>
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 text-xs text-muted-foreground text-center md:text-right opacity-50 pointer-events-none">
        Gas: <span className="text-primary">12 gwei</span> • Block: <span className="text-primary">1829301</span>
      </div>
    </div>
  )
}
