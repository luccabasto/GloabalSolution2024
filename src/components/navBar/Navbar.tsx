///
import { Links } from "./links/Links";
import Link from 'next/link';
import {auth} from '@/lib/auth';


export const Navbar = () => {

  //const session = await auth()
  return (
    <div className="h-[100px] flex items-center justify-between">
      <Link href='/' className="text-[30px] font-bold">Logo</Link>
        <div>
           <Links/>
        </div>
    </div>
  )
}
