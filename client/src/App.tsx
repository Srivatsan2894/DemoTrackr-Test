import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DemoLogDialog } from "@/components/DemoLogDialog";
import { UserProfileMenu } from "@/components/UserProfileMenu";
import { useAuth } from "@/hooks/useAuth";
import Dashboard from "@/pages/Dashboard";
import DemoLog from "@/pages/DemoLog";
import Insights from "@/pages/Insights";
import Accounts from "@/pages/Accounts";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/not-found";
import { BarChart3, Home, ListChecks, Target } from "lucide-react";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading || !isAuthenticated ? (
        <Route path="/" component={Landing} />
      ) : (
        <>
          <Route path="/" component={Dashboard} />
          <Route path="/demos" component={DemoLog} />
          <Route path="/insights" component={Insights} />
          <Route path="/accounts" component={Accounts} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

const pageConfig: Record<string, { title: string; icon: any; color: string; gradient: string }> = {
  "/": {
    title: "Dashboard",
    icon: Home,
    color: "text-chart-1",
    gradient: "from-chart-1/20 to-transparent",
  },
  "/demos": {
    title: "Demo Log",
    icon: ListChecks,
    color: "text-chart-2",
    gradient: "from-chart-2/20 to-transparent",
  },
  "/insights": {
    title: "Insights",
    icon: BarChart3,
    color: "text-chart-3",
    gradient: "from-chart-3/20 to-transparent",
  },
  "/accounts": {
    title: "Accounts",
    icon: Target,
    color: "text-chart-4",
    gradient: "from-chart-4/20 to-transparent",
  },
};

function AppContent() {
  const [location] = useLocation();
  const { isAuthenticated } = useAuth();
  const currentPage = pageConfig[location] || pageConfig["/"];
  const Icon = currentPage.icon;

  if (!isAuthenticated) {
    return (
      <div className="flex-1">
        <Router />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <div className="flex items-center gap-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br ${currentPage.gradient} border`}>
                <Icon className={`h-5 w-5 ${currentPage.color}`} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{currentPage.title}</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DemoLogDialog />
            <ThemeToggle />
            <UserProfileMenu />
          </div>
        </div>
        <div className={`h-1 bg-gradient-to-r ${currentPage.gradient}`} />
      </header>
      <main className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-7xl">
          <Router />
        </div>
      </main>
    </div>
  );
}

function App() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <AppContent />
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
