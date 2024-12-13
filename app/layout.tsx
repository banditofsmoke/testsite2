import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Brand Showcase',
  description: 'Showcasing our services with customizable feature flags',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Your Brand</h1>
            <nav className="mt-2">
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/page1" className="hover:underline">Page 1</a></li>
                <li><a href="/page2" className="hover:underline">Page 2</a></li>
                <li><a href="/page3" className="hover:underline">Page 3</a></li>
                <li><a href="/page4" className="hover:underline">Page 4</a></li>
                <li><a href="/page5" className="hover:underline">Page 5</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-8 p-4">
          {children}
        </main>
        <footer className="bg-gray-200 p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Your Brand. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

