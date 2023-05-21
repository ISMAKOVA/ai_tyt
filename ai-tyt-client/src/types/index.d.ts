import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"

export interface NavItem {
    href: string,
    title: string,
    icon: keyof typeof Icons
}