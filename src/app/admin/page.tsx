

import { Suspense } from 'react';
/// imports local
import auth  from '@/lib/auth';
import { AdminUsers } from '@/components/admin/adminUsers/adminUsers';
import { AdminUserForm } from '@/components/admin/adminUserForm/adminUserForm';
import { AdminPosts } from '@/components/admin/adminPosts/adminPosts';
import { AdminPostForm } from '@/components/admin/adminPostForm/adminPostForm';
import styles from '@/styles/admin.module.scss';

export const AdminPage = async () =>{

  const session = await auth();
  return (

    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Carregando...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = {session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Carregando...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};