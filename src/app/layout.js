import './globals.css';


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-gray-100 text-gray-800 font-sans">
          {children}
        </body>
      </html>
    );
  }
  