import './global.scss';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Fast Pro',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/gotham-fonts@1.0.3/css/gotham-rounded.min.css"
        />
      </head>
      <body className="scroll-smooth">
        <div>{children}</div>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
