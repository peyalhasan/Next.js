import { comments } from "@/app/data/comments"
export function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const queary = searchParams.get('query');
    if (queary) {
        const filteredQuery = comments.filter(comment => comment.text.toLocaleLowerCase().includes(queary))

        return Response.json(filteredQuery)
    }
    return Response.json(comments)
}

export async function POST(request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': 'comments/json'
        },
        status: 201
    })
}