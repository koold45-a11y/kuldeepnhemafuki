import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Scene not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This frame doesn't exist in the reel.
        </p>
        <Link to="/" className="mt-6 inline-block border border-gold px-5 py-2 text-sm tracking-widest uppercase text-gold hover:bg-gold hover:text-primary-foreground transition">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-display text-4xl">Cut!</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something interrupted the take.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 border border-gold px-5 py-2 text-sm tracking-widest uppercase text-gold">
          Retake
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kuldeep Nhemafuki — Motion Graphics Artist & Creative Director" },
      { name: "description", content: "Cinematic portfolio of Kuldeep Nhemafuki — Nepal-based motion graphics artist, illustrator and creative director crafting emotion through motion and design." },
      { property: "og:title", content: "Kuldeep Nhemafuki — Crafting Emotion Through Motion" },
      { property: "og:description", content: "Motion graphics, 2D animation, illustration and creative direction from Bhaktapur, Nepal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
