export const dynamic = 'force-dynamic'

export async function GET(request) {
    return new Response(new Date().toLocaleTimeString())
}