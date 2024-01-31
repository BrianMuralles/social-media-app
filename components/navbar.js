"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import logo from "../app/media/among-sus.jpg"

const Navbar = () => {
  return (
        <nav>
            <a href = '/'>            
            <img className="w-16 md:w-32 lg:w-48" src= "media/among-sus.jpg" />
            </a>
            <a href="/about/">About</a>
            <a href="/login/">Login</a>

        </nav>
  )
}
export default Navbar;