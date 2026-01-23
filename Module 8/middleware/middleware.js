import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
// export function middleware(request) {

//     const requestHeader = new Headers(request.headers);
//     requestHeader.set('x-hello-from-middleware1', 'hello')

//     const response = NextResponse.next({
//         request: {
//             headers: requestHeader
//         }
//     })
//     response.set('x-hello-from-middleware2', 'hello')
//     return response
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/dashboard',
// }


const allowedOrigins = ['https://acme.com', 'https://my-app.org'];

const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type , Authorization'
}

export function middleware(request) {
    //Check origin from request 
    const origin = request.headers.get('origin') ?? ''

    const isAllowedOrigin = allowedOrigins.includes(origin);

    // Handle preflighted request 
    const isPreflight = request.method === 'OPTIONS'

    if (isPreflight) {
        const preflighteHeaders = {
            ...NextResponse(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
            ...corsOptions
        }
        return NextResponse.json({}, { headers: preflighteHeaders })
    }


    // Handle Simple requests 
    const response = NextResponse.next()
    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin)
    }
    Object.entries(corsOptions).forEach(([KeyboardEvent, value]) => {
        response.headers.set(KeyboardEvent, value)
    })
    return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard',
}
