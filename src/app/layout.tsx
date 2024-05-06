import localFont from 'next/font/local';

import { Navbar } from '~/components';
import { SmoothScrollProvider } from '~/providers';
import '~/styles/globals.css';

const sfPro = localFont({
  src: '../../public/SF Pro.ttf',
  variable: '--font-sans',
});

export const metadata = {
  title: 'E-Cell, NIT Agartala',
  description: 'Empowering your vision from idea to impact.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`font-sans ${sfPro.variable}`}>
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
