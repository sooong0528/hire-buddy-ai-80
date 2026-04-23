import { ReactNode } from "react";
import { Bell, Building2, Search, ChevronRight } from "lucide-react";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

interface AppShellProps {
  breadcrumbs: { label: string; to?: string }[];
  children: ReactNode;
}

export function AppShell({ breadcrumbs, children }: AppShellProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 bg-card border-b border-border flex items-center px-6 gap-4 sticky top-0 z-30">
            <SidebarTrigger className="text-muted-foreground" />
            <nav className="flex items-center gap-2 text-sm text-muted-foreground min-w-0">
              {breadcrumbs.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                  <span className={i === breadcrumbs.length - 1 ? "text-foreground font-medium" : ""}>{b.label}</span>
                </div>
              ))}
            </nav>
            <div className="flex-1 max-w-md ml-auto relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="搜索候选人 / 岗位 / 部门" className="pl-9 bg-secondary border-0 h-10" />
            </div>
            <button className="relative w-10 h-10 rounded-full hover:bg-secondary flex items-center justify-center">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-border">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                HR
              </div>
              <div className="text-sm leading-tight">
                <div className="font-semibold text-foreground">HR 管理员</div>
                <div className="text-xs text-muted-foreground">综合管理部</div>
              </div>
            </div>
          </header>
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
