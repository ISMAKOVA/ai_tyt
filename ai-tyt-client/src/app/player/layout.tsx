import Nav from "@/components/nav";
import React from "react";
import {items} from "@/app/config";


interface Props {
    children?: React.ReactNode
}
export default function PlayerLayout({children}: Props) {
    return (
        <div className="flex min-h-screen min-w-full flex-col space-y-6">
            <header className="stiky top-0 z-40 mt-16 flex justify-center">
                <Nav items={items}/>
            </header>
            <div className="container min-h-[85vh] min-w-[85vw] mx-auto px-4 flex justify-center ">
                {children}
            </div>

        </div>
    );
}