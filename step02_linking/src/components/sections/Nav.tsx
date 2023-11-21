import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div><nav className = "flex bg-slate-600 text-white gap-10 text-center py-5 px-5" >
    <Link href="\">Home</Link>
    <Link href="\blog">Blogs</Link>
    <Link href="\dashboard">Dashboard</Link>
    <Link href="\name">Name</Link>
    <Link href="\name\address">Address</Link>
    <Link href="\dashboard\analatics">Analatics</Link>
    <Link href="\dashboard\settings">Settings</Link>
    <Link href="\dashboard\settings\password">Password</Link>
    <Link href="\dashboard\settings\profile">Profile</Link>
    
  </nav></div>
  )
}

export default Nav