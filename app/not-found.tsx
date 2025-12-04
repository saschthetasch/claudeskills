import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 font-medium hover:bg-primary/90 transition-colors"
      >
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
