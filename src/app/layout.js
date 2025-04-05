import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Mohamed Ali Kaddour - Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
