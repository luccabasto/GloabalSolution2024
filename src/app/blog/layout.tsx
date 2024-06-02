///
////

import { ReactNode } from "react"

const BlogLayout =({children}) => {
    return (
        <>
            <div>
                <h2>
                    This is my Blog Layout
                </h2>
                {children}
            </div>
        </>
    )
}

export default BlogLayout