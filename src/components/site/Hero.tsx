export default function Hero() {
  return (
    <div className="py-20 md:py-28">
      <h1
        className="font-mono text-5xl md:text-7xl font-bold leading-tight text-text"
      >
        Building software
        <br />
        {'since 2004'}
        <span
          className="cursor-blink text-accent inline-block text-4xl md:text-5xl align-baseline ml-2"
          aria-hidden="true"
        >{'▍'}</span>
      </h1>
    </div>
  )
}
