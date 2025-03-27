// These styles apply to every route in the application
import Script from 'next/script';
import './globals.css'

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* GA Script */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-75C7SVN9J5`}
                    strategy="afterInteractive"
                />
                <Script id="ga-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-75C7SVN9J5');
                    `}
                </Script>
            </head>
            <body>
                <div className="bg-[url(/bg-2xl.jpg)] 
                                bg-cover bg-center 
                                grayscale-75 -z-75 body flex flex-col h-screen">
                    <main className="flex-grow overflow-auto">{children}</main>
                    {/*<footer><Footer /></footer>*/}
                </div>
            </body>
        </html>
    );
};