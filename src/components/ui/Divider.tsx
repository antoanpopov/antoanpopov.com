export default function Divider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`text-text-faint font-mono text-sm select-none overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      {'─'.repeat(60)}
    </div>
  )
}
