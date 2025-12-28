export const dynamic = "force-static";

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Thank you!</h1>
      <p className="mt-4 text-muted-foreground">
        Your message has been sent successfully. We’ll contact you shortly.
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded-lg bg-accent px-4 py-2 text-accent-foreground transition hover:opacity-90"
      >
        Back to Home
      </a>
    </div>
  );
}
