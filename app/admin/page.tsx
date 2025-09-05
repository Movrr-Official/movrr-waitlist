import { createSupabaseServerClient } from "@/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  Users,
  MapPin,
  Bike,
  ArrowUpRight,
  User,
  BarChart3,
} from "lucide-react";
import { redirect } from "next/navigation";

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  city: string;
  bike_ownership: "yes" | "no" | "planning";
  created_at: string;
}

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin?redirectTo=/admin");
  }

  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("role, email")
    .eq("user_id", user.id)
    .single();

  if (!adminUser) {
    redirect("/unauthorized");
  }

  // Fetch waitlist data
  const { data: waitlistEntries, error } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching waitlist:", error);
  }

  const entries = waitlistEntries || [];

  // Calculate stats
  const totalSignups = entries.length;
  const citiesCount = new Set(entries.map((entry) => entry.city)).size;
  const bikeOwners = entries.filter(
    (entry) => entry.bike_ownership === "yes"
  ).length;
  const planningBike = entries.filter(
    (entry) => entry.bike_ownership === "planning"
  ).length;

  const cityBreakdown = entries.reduce(
    (acc, entry) => {
      acc[entry.city] = (acc[entry.city] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const topCities = Object.entries(cityBreakdown)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 5);

  // Calculate signups in the last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const recentSignups = entries.filter(
    (entry) => new Date(entry.created_at) >= sevenDaysAgo
  ).length;

  const getBikeOwnershipBadge = (ownership: string) => {
    switch (ownership) {
      case "yes":
        return (
          <Badge variant="default" className="bg-green-500 hover:bg-green-600">
            <Bike className="h-3 w-3 mr-1" />
            Owns Bike
          </Badge>
        );
      case "no":
        return (
          <Badge
            variant="secondary"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            No Bike
          </Badge>
        );
      case "planning":
        return (
          <Badge variant="outline" className="border-blue-300 text-blue-600">
            Planning to Get
          </Badge>
        );
      default:
        return <Badge variant="secondary">{ownership}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">MOVRR ADMIN</h1>
            </div>
            <p className="text-gray-600 mt-1">
              Pre-launch waitlist management dashboard
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-full">
              <User className="h-4 w-4" />
              <span>{adminUser.email}</span>
              <Badge variant="outline" className="ml-2">
                {adminUser.role}
              </Badge>
            </div>
            <Button className="bg-primary hover:bg-primary/90 shadow-md gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm overflow-hidden group hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Signups
              </CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {totalSignups}
              </div>
              <div className="flex items-center gap-1 mt-1">
                {recentSignups > 0 && (
                  <>
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">
                      +{recentSignups} this week
                    </span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm overflow-hidden group hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Cities
              </CardTitle>
              <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {citiesCount}
              </div>
              <p className="text-xs text-gray-500 mt-1">Active markets</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm overflow-hidden group hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Bike Owners
              </CardTitle>
              <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform">
                <Bike className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {bikeOwners}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {totalSignups > 0
                  ? Math.round((bikeOwners / totalSignups) * 100)
                  : 0}
                % of signups
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm overflow-hidden group hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Planning to Buy
              </CardTitle>
              <div className="p-2 bg-amber-100 rounded-lg group-hover:scale-110 transition-transform">
                <Bike className="h-4 w-4 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {planningBike}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Potential future riders
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Cities */}
          <Card className="lg:col-span-1 bg-white border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">
                Top Cities
              </CardTitle>
              <CardDescription>Cities with the most signups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCities.map(([city, count], index) => (
                  <div
                    key={city}
                    className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary/20 transition-colors">
                        {index + 1}
                      </div>
                      <span className="font-medium">{city}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-700"
                    >
                      {count as number} signups
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Waitlist Table */}
          <Card className="lg:col-span-2 bg-white border-0 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-lg font-semibold">
                    Waitlist Entries
                  </CardTitle>
                  <CardDescription>All pre-launch signups</CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  {entries.length} entries
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                      <TableHead className="font-semibold">City</TableHead>
                      <TableHead className="font-semibold">
                        Bike Status
                      </TableHead>
                      <TableHead className="font-semibold">
                        Signup Date
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {entries.map((entry: WaitlistEntry) => (
                      <TableRow
                        key={entry.id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {entry.name}
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {entry.email}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {entry.city}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {getBikeOwnershipBadge(entry.bike_ownership)}
                        </TableCell>
                        <TableCell className="text-gray-500">
                          {new Date(entry.created_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {entries.length === 0 && (
                <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-dashed mt-4">
                  <Users className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <p className="font-medium">No waitlist entries yet</p>
                  <p className="text-sm">Start promoting your pre-launch!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
