// These styles apply to every route in the application
import './globals.css'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full">
                <div className="bg-[url(/bg-2xl.jpg)] 
                                bg-cover bg-center 
                                grayscale-75 -z-75 body flex flex-col h-full">
                    <main className="flex-grow max-h-4/5">{children}</main>
                    <footer className="max-h-1/5"><Footer /></footer> 
                </div>
            </body>
        </html>
    );
};