// These styles apply to every route in the application
import './globals.css'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="bg-[url(/bg-2xl.jpg)] 
                                bg-cover bg-center 
                                grayscale-75 -z-75 body flex flex-col h-screen">
                    <main className="flex-grow overflow-auto">{children}</main>
                    <footer><Footer /></footer> 
                </div>
            </body>
        </html>
    );
};