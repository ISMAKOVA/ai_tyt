import Nav from "@/components/nav";
import React from "react";
import {items} from "@/app/config";


interface Props {
    children?: React.ReactNode
}
export default function IntegrationsLayout({children}: Props) {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="stiky top-0 z-40 mt-16 flex justify-center">
                <Nav items={items}/>
            </header>
            <div className="container mx-auto px-4 flex justify-center">
                <main className={"box-content h-128 w-128 bg-gray"}>
                    {children}
                </main>
            </div>

        </div>
    );
}