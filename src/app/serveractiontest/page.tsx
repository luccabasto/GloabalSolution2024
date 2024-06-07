import {addPost, deletePost} from '@/lib/action';

export const ServerActionTestPage = () =>{


    return(
        <div>
            <form action={addPost}>
                <input type="text" placeholder="Título" name="title"/>
                <input type="text" placeholder="desc" name="desc"/>
                <input type="text" placeholder="slug" name="slug"/>
                <input type="text" placeholder="userId" name="userId"/>
                <button>Criar</button>
            </form>

            <form action={deletePost}>
                <input type="text" placeholder="postId" name="id" />
                <button>Deletar</button>
            </form>
        </div>
    )
}