import Link from 'next/link';
import {ReactNode} from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <h1>404 backwards navigation bug</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dynamic/foo">Dynamic page</Link>
          </li>
          <li>
            <Link href="/111">Non-existent page</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
