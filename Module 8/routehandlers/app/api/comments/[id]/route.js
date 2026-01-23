import { comments } from "@/app/data/comments";
import { redirect } from "next/navigation";





export async function GET(request, { params }) {
    const { id } = params;


    if (parseInt(id) > comments.length){
        redirect('/api/comments')
    }
        const comment = comments.find(comment => comment.id === parseInt(id))

    return Response.json(comment)
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const commentIndex = comments.findIndex(cmnt => cmnt.id === parseInt(id))

    const comment = await request.json();

    comments[commentIndex].text = comment.text;

    return Response.json(comments[commentIndex])

}

export async function POST(request) {
    const comment = await request.json()

    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment)

    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    })
}


export async function DELETE(_request, { params }) {
    const { id } = params;

    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id))

    const commentToDelete = comments[commentIndex]

    comments.splice(id, 1);

    return Response.json(commentToDelete)

}