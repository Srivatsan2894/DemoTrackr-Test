import { BarChart3, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiGoogle, SiGithub } from "react-icons/si";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="flex justify-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <BarChart3 className="h-8 w-8" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight">
            Demo Tracker
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track demos, analyze performance, and drive revenue growth with real-time insights 
            integrated with Salesforce.
          </p>

          <div className="flex flex-col items-center gap-4 pt-8">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6"
              data-testid="button-login"
            >
              <a href="/api/login">
                Sign in to Get Started
              </a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Sign in with Google, GitHub, or your organization SSO
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10">
                  <Target className="h-6 w-6 text-chart-1" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Track Every Demo</h3>
              <p className="text-sm text-muted-foreground">
                Log and manage all demo sessions with Salesforce integration
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10">
                  <TrendingUp className="h-6 w-6 text-chart-2" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">ROI Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Monitor pipeline value, win rates, and deal velocity
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10">
                  <BarChart3 className="h-6 w-6 text-chart-3" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Visual Insights</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful charts showing demo and deal stage distribution
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10">
                  <Users className="h-6 w-6 text-chart-4" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Account Priority</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered ranking to focus on high-value accounts
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Built for Solution Consultants
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Seamlessly sync with Salesforce to track deal stages, account details, and demo outcomes. 
            Make data-driven decisions to maximize your demo-to-close conversion rate.
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-chart-2 animate-pulse" />
              <span>Real-time Salesforce Sync</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-chart-2 animate-pulse" />
              <span>Enterprise SSO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
