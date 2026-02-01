import connectMongo from "@/bdconnect/connectMongo";
import User from "@/models/Users";


export default async function NewUserForm() {
    const addUser = async (formData) => {
        'use server'

        const name = formData.get("name");
        const email = formData.get("email");

        const userData = {
            name,
            email
        }

        await connectMongo();

        // insert into database 
        await new User(userData).save()
    }
    return (
        <form action={addUser}>
            <div>
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}