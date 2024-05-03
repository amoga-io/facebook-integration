import React, { useEffect, useState } from "react";
import Story from "./Story";
import WhatsOnYourMind from "./WhatsOnYourMind";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Ad from './Ad'
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      "timestamp": {
        "seconds": 1704695702,
        "nanoseconds": 80000000
      },
      "id": "114125442780629648235",
      "username": "sharath kumar amoga",
      "text": "Happy Birthday",
      "userImg": "https://lh3.googleusercontent.com/a/ACg8ocJoyx-AxvDQ3fC_AQhUEzw8JrFmj1QnVJTwrCf_DIAh1g=s96-c"
    },
    {
      "timestamp": {
        "seconds": 1704695702,
        "nanoseconds": 80000000
      },
      "id": "114125442780629648235",
      "username": "sharath kumar amoga",
      "text": "Good Morning",
      "userImg": "https://lh3.googleusercontent.com/a/ACg8ocJoyx-AxvDQ3fC_AQhUEzw8JrFmj1QnVJTwrCf_DIAh1g=s96-c"
    },
    {
      "userImg": "https://lh3.googleusercontent.com/a/ACg8ocJoyx-AxvDQ3fC_AQhUEzw8JrFmj1QnVJTwrCf_DIAh1g=s96-c",
      "timestamp": {
        "seconds": 1704694334,
        "nanoseconds": 694000000
      },
      "username": "sharath kumar amoga",
      "id": "114125442780629648235",
      "text": "hello"
    }
  ]);

  

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatsOnYourMind />
      <Ad key={"ad"} id={"ad"} data={{}} />
      {posts.map((post) => {
        return <Post key={post.id} id={post.id} data={post} />;
      })}
    </div>
  );
};

export default Feed;
