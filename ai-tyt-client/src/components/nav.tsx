"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {cn} from "@/app/utils";
import {Icon, Icons} from "./icons";
import {usePathname} from "next/navigation";
import {NavItem} from "@/types";

interface Props {
    items: NavItem[]
}

function Nav({items}: Props) {
    const path = usePathname();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!items?.length) {
        return null;
    }

    return (
        <nav className={"flex flex-row flex-nowrap space-x-2 rounded-full border-solid border-2 border-b-yellow-light"}>
            {items.map((item, index) => {
                const Icon = Icons[item.icon];
                return (
                    item.href &&
                    <Link key={index} href={item.href}>
                        <span className={cn("group flex items-center px-6 py-2 cursor-pointer m-0.5 font-medium",
                            item.href === path && "rounded-3xl border-solid text-gray-dark duration-500 transition-colors ease-in-out",
                            item.href === path && (
                                loaded 
                                ? "bg-purple" 
                                : "bg-purple-dark"
                            )
                        )}>
                            <Icon className="mr-2 h-4 w-4" />
                            <span>{item.title}</span>
                        </span>
                    </Link>
                )
            })}
        </nav>
    );
}
// 
export default Nav;