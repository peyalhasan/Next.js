'use server'

import connectMongo from "@/bdconnect/connectMongo";
import User from "@/models/Users";
import Wait from "@/utils/wait";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const schema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string({
        invalid_type_error: 'Invalid Email'
    })
})

export const addUser = async (prevState,formData) => {

    const rawData = Object.fromEntries(formData);

    const validatedFields = schema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }
    const { name, email } = validatedFields.data;


    const userData = {
        name,
        email
    }

    try {
        // Connect database First 
        await connectMongo();

        // add dealy 

        await Wait(3000)

        // Insert to database 

        await new User(userData).save()
        revalidatePath('/')
    } catch (err) {
        return {message: "Something went wrong!", errors:{}}
    }

}


export const getUser = async () => {
    try {
        await connectMongo();

        // Get users 
        const users = await User.find();
        return users
    } catch (err) {
        console.log(err)
    }
}