import React from 'react'

const VideoCard = ({viewCount, desciption, logo, title, channelTitle}) => {
  return (

    <div className='p-2 m-2 w-80 shadow-md shadow-slate-400 rounded-t-md'>
        <img className='' src={logo} alt="" />
        <div className='font-bold'>{title}</div>
        <div className='font-light'>{channelTitle}</div>
        <div className='font-extralight'>{viewCount}</div>
    </div>
  )
}

export default VideoCard