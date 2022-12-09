import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NavItem = ({label, href}) => {
    const router = useRouter();
  return (
    <Link href={href}>
        <span className={`font-semibold ${router.pathname === href ? "md:text-white text-primary" : "md:text-red-300 text-muted"} hover:cursor-pointer`}>{label}</span>
    </Link>
  )
}

export default NavItem