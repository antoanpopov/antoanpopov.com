import { ImageResponse } from 'next/og'

export async function GET() {
  return new ImageResponse(
    (
        <div
            style={{
                width: '1200px',
                height: '630px',
                background: '#0f1311',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '80px',
                fontFamily: 'monospace',
            }}
        >
            {/* Accent line top */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: '#5eff8c',
                }}
            />

            {/* Name */}
            <div
                style={{
                    fontSize: '28px',
                    color: '#8a9089',
                    marginBottom: '24px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                }}
            >
                ANTOAN POPOV
            </div>

            {/* Headline */}
            <div
                style={{
                    fontSize: '64px',
                    fontWeight: 700,
                    color: '#e8e6dd',
                    lineHeight: 1.1,
                    marginBottom: '40px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <span>Building software</span>
                <span>
                    {'since 2004 '}
                    <span style={{ color: '#5eff8c' }}>|</span>
                </span>
            </div>
            {/* Sub-line */}
            <div
                style={{
                    fontSize: '22px',
                    color: '#5a615a',
                    letterSpacing: '0.05em',
                }}
            >
                Engineering Manager · Full-Stack TypeScript · Remote
            </div>
        </div>
    ),
      {
          width: 1200,
          height: 630,
      }
  )
}
