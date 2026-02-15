import React from 'react'
import { NextResponse } from 'next/server'
import { url } from 'inspector'

function middleware(request) {
  return NextResponse.redirect(new URL("/registration",request.url))
}

export default middleware

export const config = {
    matcher: "/class/:path*",
} 
