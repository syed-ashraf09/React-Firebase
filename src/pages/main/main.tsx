import {collection, getDocs} from "firebase/firestore"
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post{
  id:string,
  userID:string,
  title:string,
  username:string,
  description:string
}

export const Main = () => {
    const [postsList,setPostsList]=useState<Post[] | null>(null);
    const postsRef=collection(db,"posts")

    const getPosts=async ()=>{
      const data = await getDocs(postsRef)
      setPostsList(data.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post[])//we dont know the format we get from the doc, so we use as Post[] to get the data in that format
    }

    useEffect(()=>{
      getPosts();
    },[]);

    getPosts();
    return <div className="posts"> {postsList?.map((post)=><Post post={post}/>)}</div>;
};