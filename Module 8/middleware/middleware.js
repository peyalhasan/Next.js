import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const requestHeader = new Headers(request.headers);
    requestHeader.set('x-hello-from-middleware1', 'hello')

    const response = NextResponse.next({
        request: {
            headers: requestHeader
        }
    })
    response.set('x-hello-from-middleware2', 'hello')
    return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard',
}

