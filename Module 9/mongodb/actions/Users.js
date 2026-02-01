'use server'

import connectMongo from "@/bdconnect/connectMongo";
import User from "@/models/Users";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {


    const name = formData.get("name");
    const email = formData.get("email");

    const userData = {
        name,
        email
    }

    try {
        await connectMongo();

        //Insert into database 
        await new User(userData).save()

        // Revalidate Users

        revalidatePath('/')

    } catch (err) {
        console.log(err)
    }

}


export const getUser  = async()=>{
    try{
        await connectMongo();

        // Get users 
        const users = await User.find();
        return users
    }catch(err){
        console.log(err)
    }
}