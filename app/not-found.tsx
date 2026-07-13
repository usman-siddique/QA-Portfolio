import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm text-accent">404 / NOT FOUND</p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        This test case doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for was either moved, removed, or never
        existed in the first place.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </Container>
  );
}
