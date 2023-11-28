import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";


const Body = () => {
  const [data, setData] = useState([]);
 const a= useSelector(state=> state.ytSlice.dummyData.items)
 
const dispatch = useDispatch()

  useEffect(() => {
    const getYoutube = async () => {
        let a = await fetch(
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyDJnL1ruU_MoZwkkDIB-yKIXlgcz11IFKo"
        );
       let  b = await a.json();
        setData( await b.items);
        console.log(data);
      };
     getYoutube()
  },[data]);
  return (
    <div className="shadow-md ml-2 flex flex-wrap ml-56 mt-14">
      {a?.map((a)=>{
        return <VideoCard desctiption={a.snippet.description}  title ={a.snippet.title} channelTitle ={a.snippet.channelTitle} viewCount={a.statistics.viewCount}  logo={a.snippet.thumbnails?.high.url}/>
      })}
 {a?.map((a)=>{
        return <VideoCard desctiption={a.snippet.description}  title ={a.snippet.title} channelTitle ={a.snippet.channelTitle} viewCount={a.statistics.viewCount}  logo={a.snippet.thumbnails?.high.url}/>
      })} {a?.map((a)=>{
        return <VideoCard desctiption={a.snippet.description}  title ={a.snippet.title} channelTitle ={a.snippet.channelTitle} viewCount={a.statistics.viewCount}  logo={a.snippet.thumbnails?.high.url}/>
      })}
    </div>
  );
};

export default Body;
