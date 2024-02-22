import { request } from 'http'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'
import { analytics } from './utils/analytics'

export default async function Middleware(req: NextRequest) {

    if (req.nextUrl.pathname === '/') {
        //Track analytics event
        try {
            
            analytics.track("pageview", {
                page: '/',
                country: req.geo?.country
            })
        } catch (error) {
            //fail silently
            console.error(error)
        }
    }

    return NextResponse.next();
}

export const matcher = {
    matcher: ['/']
}