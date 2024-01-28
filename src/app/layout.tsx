import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Providers } from "./Providers.tsx";

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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-RSF1SVHWW3`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-RSF1SVHWW3');
                `}
        </Script>

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11293577838`}
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11293577838');
                `}
        </Script>
        <Script id="google-ads-pageview" strategy="afterInteractive">
          {`
                  gtag('event', 'conversion', {'send_to': 'AW-11293577838/kgY1CMC_4c4YEO6kmYkq'});
                `}
        </Script>

        <meta name="color-scheme" content="light" />
        <meta name="keywords" content="Muhammad Asadullah, Full Stack Developer, MERN Stack, Next.js, Web Applications, Cloud-Native, Docker, Kubernetes, Django, Software Engineer, Frontend, Backend, JavaScript, React, Node.js, Express.js, MongoDB, AWS, Google Cloud Platform, Azure, DevOps, Agile Development">
        <meta name="author" content="Muhammad Asadullah"/>
        <meta name="robots" content="index, follow"/>

        <meta property="og:title" content="Muhammad Asadullah - Full Stack Software Developer (MERN Stack)"/>
        <meta property="og:description" content="Muhammad Asadullah is a versatile Full Stack Software Developer skilled in MERN stack, cloud-native technologies, Docker, Kubernetes, and Django."/>
        <meta property="og:image" content="https://www.devxio.com/asadullah.webp"/>
        <meta property="og:url" content="https://www.devxio.com"/>



        <link rel="icon" type="image/x-icon" href="favicon16.ico" sizes='16x16' />
        <link rel="icon" type="image/x-icon" href="favicon32.ico" sizes='32x32' />
        <link rel="icon" type="image/x-icon" href="favicon.ico" sizes='48x48' />
        <link rel="icon" type="image/x-icon" href="favicon1.ico" sizes='96x96' />
      </head>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  )
}
