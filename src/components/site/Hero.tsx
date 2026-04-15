export default function Hero() {
  return (
    <div className="py-20 md:py-28">
      <p
        className="font-mono text-5xl md:text-7xl font-bold leading-tight text-text"
        aria-label="Building software since 2004"
      >
        Building software
        <br />
        {'since 2004'}
        <span
          className="cursor-blink text-accent inline-block text-4xl md:text-5xl"
          aria-hidden="true"
        >|</span>
      </p>
    </div>
  )
}
