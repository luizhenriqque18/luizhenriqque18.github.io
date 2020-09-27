import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import ReactMarkdown from "react-markdown";
import post from "./posts/helloworld.md";

function Blog () {

    const [page, setPage] = useState();

    useEffect(() => {
        const main = async () =>{
            fetch(post).then((e)=>{
                e.text().then((text)=>{
                    setPage(text);
                })
            })
        }
        main();
    },[])

    return(
        <div>
            <ReactMarkdown source={page} escapeHtml={false}/>
        </div>
    )
}

export default Blog;
