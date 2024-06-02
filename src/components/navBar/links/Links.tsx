///
import Link from "next/link"
import { linksData } from "./linksData"


export const Links = () =>{
    return(
        <div>
            {linksData.map((link=>(
                <Link href={link.path} key={link.title}>{link.title} </Link>
            )))
            }
        </div>
    )
}

