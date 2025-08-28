import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import {DM_Sans} from "next/font/google";
import {TopBar} from "@/components/TopBar";
import {SoundsProvider} from "@/hooks/useSounds";

const font = DM_Sans({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Space!",
    description: "Space Clicker made by Baptiste May",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={font.className}>
        <body className="relative w-screen h-screen bg-black bg-[url(/bg.webp)] bg-center select-none overflow-hidden">
        <SoundsProvider>
            <TopBar/>
            {children}
        </SoundsProvider>
        </body>
        </html>
    );
}
