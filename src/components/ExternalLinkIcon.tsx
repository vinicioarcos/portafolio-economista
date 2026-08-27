export function ExternalLinkIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M7 17 17 7M10 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
