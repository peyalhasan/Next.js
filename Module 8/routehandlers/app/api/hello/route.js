export async function GET() {
    console.log('Hello from get')
    return new Response('Hello World')
}