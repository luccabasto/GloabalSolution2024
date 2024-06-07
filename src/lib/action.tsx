'use server';

import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';
import bcrypt from 'bcrypt';

// Função para adicionar um post
export const addPost = async (prevState: any, formData: FormData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData) as { [key: string]: string };
    try {
        await connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log('Salvo no banco de dados');
        revalidatePath('/blog');
        revalidatePath('/admin');
    } catch (err) {
        console.log(err);
        return { error: 'Algo deu errado, dê uma olhada' };
    }
};

// Função para deletar um post
export const deletePost = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData) as { [key: string]: string };
    try {
        await connectToDb();
        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log('Post deletado do banco');
        revalidatePath('/admin');
    } catch (err) {
        console.log(err);
        return { error: 'Algo deu errado, dê uma olhada' };
    }
};

// Função para login via Github
export const handleGithubLogin = async () => {
    'use server';
    await nextAuthSignIn('github');
};

// Função para logout
export const handleLogout = async () => {
    'use server';
    await nextAuthSignOut();
};

// Função para registrar um usuário
export const register = async (previousState: any, formData: FormData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData) as { [key: string]: string };

    if (password !== passwordRepeat) {
        return { error: 'Senha errada, tente novamente' };
    }

    try {
        await connectToDb();

        const user = await User.findOne({ username });

        if (user) {
            return { error: 'Esse usuário já existe' };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log('Salvo no banco de dados');

        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: 'Algo deu errado, dê uma olhada' };
    }
};

// Função para login
export const login = async (prevState: any, formData: FormData) => {
    const { username, password } = Object.fromEntries(formData) as { [key: string]: string };

    try {
        await nextAuthSignIn('credentials', { username, password });
    } catch (err: any) {
        console.log(err);

        if (err.message.includes('CredentialsSignin')) {
            return { error: 'Usuário ou Senha inválido' };
        }
        throw err;
    }
};

// Função para adicionar um usuário
export const addUser = async (prevState: any, formData: FormData) => {
    const { username, email, password, img } = Object.fromEntries(formData) as { [key: string]: string };
    try {
        await connectToDb();
        const newUser = new User({
            username,
            email,
            password,
            img,
        });

        await newUser.save();
        console.log('Salvo no banco de dados');
        revalidatePath('/admin');
    } catch (err) {
        console.log(err);
        return { error: 'Algo deu errado, por favor verificar' };
    }
};

// Função para deletar um usuário
export const deleteUser = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData) as { [key: string]: string };

    try {
        await connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log('Deletado do banco de dados');
        revalidatePath('/admin');
    } catch (err) {
        console.log(err);
        return { error: 'Algo deu errado, por favor verificar' };
    }
};
