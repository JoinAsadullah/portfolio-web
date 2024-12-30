import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Providers } from "./Providers.tsx";

import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Muhammad Asadullah - Full Stack Software Developer",
    description: "Muhammad Asadullah is a versatile Full Stack Software Developer skilled in MERN stack, cloud-native technologies, Docker, Kubernetes, and Django. Explore his portfolio showcasing precise web applications and adaptable expertise for impactful contributions to your projects.",
  }
  
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (



    <html lang="en" className='' suppressHydrationWarning>
      <head>
        <link rel="preload" href="assets/asadullah/webp" as="image"/>



        <meta name="color-scheme" content="light" />
        <meta name="keywords" content="Muhammad Asadullah, Full Stack Developer, MERN Stack, Next.js, Web Applications, Cloud-Native, Docker, Kubernetes, Django, Software Engineer, Frontend, Backend, JavaScript, React, Node.js, Express.js, MongoDB"/>
        <meta name="author" content="Muhammad Asadullah"/>
        <meta name="robots" content="index, follow"/>

        <meta property="og:title" content="Muhammad Asadullah - Full Stack Software Developer (MERN Stack)"/>
        <meta property="og:description" content="Muhammad Asadullah is a versatile Full Stack Software Developer skilled in MERN stack, Next.JS, and cloud-native technologies."/>
        <meta property="og:image" content="https://www.asadullah.dev/assets/asadullah.webp"/>
        <meta property="og:url" content="https://www.asadullah.dev"/>



        <link rel="icon" type="image/x-icon" href="favicon16.png" sizes='16x16' />
        <link rel="icon" type="image/x-icon" href="favicon32.png" sizes='32x32' />
        <link rel="icon" type="image/x-icon" href="favicon.ico" sizes='48x48' />
      </head>
      <body className={inter.className}><Providers>{children}</Providers></body>
      <GoogleAnalytics gaId="G-1MN0KQFW4M" />
    </html>
  )
}
