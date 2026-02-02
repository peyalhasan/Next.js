'use client'


import { addUser } from "@/actions/Users";
import Button from "../ui/Button";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
    errors: {}
}

export default function NewUserForm() {
    const [state, formAction] = useFormState(addUser, initialState)

    return (
        <form action={formAction}>
            <div>
                <input type="text" name="name" placeholder="Name" />
                {state?.errors?.name && (
                    <p style={{ color: 'red' }}>{state.errors.name[0]}</p>
                )}
            </div>
            <div>
                <input type="text" name="email" placeholder="Email" />
                {state?.errors?.name && (
                    <p style={{ color: 'red' }}>{state.errors.name[0]}</p>
                )}
            </div>
            <div>
                <p> {state?.message} </p>
                <Button />
            </div>
        </form>
    );
}