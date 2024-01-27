import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Providers } from "./Providers.tsx";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Muhammad Asadullah - Digital Marketing Expert",
    description: "Muhammad Asadullah is Digital Marketing Expert & Google and Meta Ads Specialist. Hire and boost Your Business with Proven Social Media Strategies.",
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
        <meta name="keywords" content="Muhammad, Asadullah, Hire Digital Marketer, Hire Digital Marketing Expert, Hire Software Engineer,Hire Certified digital marketing professional, Hire Digital Marketing Strategist, Hire Business analytics expert, Hire Google ads expert, Hire Social Media marketing expert, Hire Email Marketing expert, Hire Meta ads expert, Hire Tiktok ads expert, Hire Business consultant"/>
        <meta name="author" content="Muhammad Asadullah"/>
        <meta name="robots" content="index, follow"/>

        <meta property="og:title" content="Muhammad Asadullah - Digital Marketing Expert"/>
        <meta property="og:description" content="Muhammad Asadullah is Digital Marketing Expert & Google and Meta Ads Specialist. Hire and boost Your Business with Proven Social Media Strategies."/>
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
