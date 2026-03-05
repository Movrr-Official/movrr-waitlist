import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/locales/en";
import { withLocalePath } from "@/lib/i18n/routing";

interface UnauthorizedPageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function UnauthorizedPage({
  locale,
  dictionary,
}: UnauthorizedPageProps) {
  const copy = dictionary.unauthorized;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-black text-red-600">
            {copy.title}
          </CardTitle>
          <CardDescription>{copy.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{copy.note}</p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href={withLocalePath(locale, "/")}>{copy.returnHome}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
