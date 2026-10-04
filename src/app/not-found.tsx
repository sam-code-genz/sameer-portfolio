import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] items-center">
      <Container className="flex flex-col items-start gap-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="text-balance font-display text-4xl font-medium leading-tight text-paper sm:text-6xl">
          This scene didn&apos;t make the final cut.
        </h1>
        <p className="max-w-md text-base text-paper-dim">
          The page you&apos;re looking for doesn&apos;t exist, or it may have moved.
        </p>
        <LinkButton href="/">Back to Home</LinkButton>
      </Container>
    </div>
  );
}
