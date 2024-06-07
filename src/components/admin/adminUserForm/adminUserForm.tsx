'use client'

import { addUser } from "@/lib/action";
import styles from '@/styles/adminUseForm.module.scss';
import { useFormState } from "react-dom";

export const AdminUserForm = () =>{
    const [state, formAction] = useFormState(addUser, undefined);

    return(
        <form action={formAction} className={styles.container}>
            <h1>Add New User</h1>
            <input type="text" name="username" placeholder="Usuário" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Senha" />
            <input type="text" name="img" placeholder="img" />
            <select name="isAdmin">
                <option value="false">Is Admin?</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
            <button>Add User</button>
            {state?.error}
        </form>
    )
}
