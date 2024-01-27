import Script from 'next/script';



export const metadata = {
    title: "Asadullah's Portfolio - A Full Stack Developer",
    description: "Muhammad Asadullah is a talented Full Stack Developer specializing in design, development, and marketing. With extensive experience in web development and design, Asadullah has successfully completed projects such as the Focus Academy website and the redevelopment of the Bika Construction website. Offering integrated web application and information system development services, Asadullah also excels in digital marketing strategies including email marketing, SEO, and social media marketing. If you're in need of a skilled professional who can handle all aspects of your project, Muhammad Asadullah is here to help.",
  }
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" className='dark'>
      <link rel="preload" as="image" href="/assets/loader.svg"/>
      <link rel="preload" as="image" href="/assets/asadullahpic.webp"/>
      <link rel="preload" as="image" href="/assets/asadullahpicw.webp"/>
      <head>
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
       <meta name="color-scheme" content="light"/>
      </head>
      <body >{children}</body>
    </html>
  )
}


