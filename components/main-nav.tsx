"use client"

import * as React from "react"
import Link from "next/link"
import { PersonIcon } from "@radix-ui/react-icons"
import { CalendarIcon } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import Logo from "@/components/navbar/logo"

import { Button } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center justify-center space-x-2">
        <Logo />
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <div className="flex items-center justify-center space-x-2 ">
        <Input type="search" placeholder="Search..." className=" mr-3 w-52" />
      </div>
      <div className="flex items-center justify-center space-x-2 ">
        <Button>Lease Your Property</Button>
        <Button>Apply To Properties</Button>
      </div>
      <div className="flex items-center justify-center space-x-2 ">
        <PersonIcon />
      </div>
    </div>
  )
}
