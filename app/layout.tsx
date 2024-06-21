import { montserrat } from './ui/fonts';
import './ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard | Miguel Ángel Linares',
    default: 'Acme Dashboard by Miguel Ángel Linares',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-acme.vercel.app'),
  authors: [{name: 'Mario Gonzalez', url:'https://www.linkedin.com/in/lllariogonzalez'}],
  keywords: ['Next.js 14', 'Acme', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    url: 'https://nextjs-dashboard-acme.vercel.app',
    type: 'website',
  },
  twitter: {
    site: '@acme',
    description:'The official Next.js Learn Dashboard built with App Router.',
    title:'Acme Dashboard by Miguel Ángel Linares',
    creator:'Miguel Ángel Linares',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con ❤️ por Miguel Ángel Linares
        </footer>
      </body>
    </html>
  );
}
