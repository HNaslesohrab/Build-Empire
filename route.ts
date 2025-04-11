import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(\`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://yourdomain.com/images/start.jpg" />
        <meta property="fc:frame:button:1" content="Fire Clan" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="https://yourdomain.com/frame/join?clan=fire" />

        <meta property="fc:frame:button:2" content="Ice Clan" />
        <meta property="fc:frame:button:2:action" content="post" />
        <meta property="fc:frame:button:2:target" content="https://yourdomain.com/frame/join?clan=ice" />

        <meta property="fc:frame:button:3" content="Shadow Clan" />
        <meta property="fc:frame:button:3:action" content="post" />
        <meta property="fc:frame:button:3:target" content="https://yourdomain.com/frame/join?clan=shadow" />
      </head>
    </html>
  \`, {
    headers: {
      'Content-Type': 'text/html'
    }
  });
}
