import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink } from "@/components/NavLink";
import {
  Activity,
  Users,
  AlertTriangle,
  Settings,
  Building2,
  LayoutDashboard,
  FileText,
  FolderOpen,
  UserSearch,
} from "lucide-react";

const employeeItems = [
  { title: "人员流动看板", url: "/people-flow", icon: Activity },
  { title: "员工档案", url: "/employees", icon: Users },
  { title: "预警中心", url: "/alerts", icon: AlertTriangle },
  { title: "钉钉同步", url: "/dingtalk", icon: Settings },
];

const recruitItems = [
  { title: "招聘助理首页", url: "/recruit", icon: LayoutDashboard },
  { title: "岗位与 JD", url: "/recruit/jobs", icon: FileText },
  { title: "简历库", url: "/recruit/resumes", icon: FolderOpen },
  { title: "候选人台账", url: "/recruit/candidates", icon: UserSearch },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="h-16 border-b border-sidebar-border px-4 flex flex-row items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--gradient-brand)] flex items-center justify-center shrink-0 shadow-[var(--shadow-pop)]">
          <Building2 className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="leading-tight">
            <div className="font-semibold text-foreground text-[15px]">人事 AI 员工</div>
            <div className="text-[11px] text-muted-foreground">HR Intelligence</div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
            员工管理
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {employeeItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 rounded-lg px-3 text-sidebar-foreground hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
            招聘管理
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recruitItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink
                      to={item.url}
                      end={item.url === "/recruit"}
                      className="flex items-center gap-3 rounded-lg px-3 text-sidebar-foreground hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
