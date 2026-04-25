'use client'

import { cn } from "@/libs/utils"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { forwardRef } from "react"

interface NavLinkProps extends LinkProps {
  className?: string
  activeClassName?: string
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname()

    const isActive =
      typeof href === "string" && pathname === href

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    )
  }
)

NavLink.displayName = "NavLink"

export { NavLink }