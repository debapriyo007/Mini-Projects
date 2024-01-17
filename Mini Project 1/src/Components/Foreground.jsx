import React, { useRef } from 'react'
import Cards from './Cards'


function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc:"“আমরা মধ্যে যত বেশি প্রেম, পবিত্রতায় এবং সদগুণ বৃদ্ধি পাবে, ততই আমরা প্রতিটিই মানুষের মধ্যে এগুলো খুজে পাবো।”",
      filesize:"0.9 mb",
      close:true,
      tag:{isOpen:false, tagTitle:"Download Now", tagColor:"green"}

    },
    {
      desc:"“যে মানুষ নিজের উপর সম্পুর্ন বিশ্বাস ও ভরসা রাখে, তিনি সব কিছু জয় করতে পারেন।”",
      filesize:"0.5 kb",
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"}

    },
    {
      desc:"“প্রতিটা মানুষের মন অনন্ত শক্তিশালী, মনের একাগ্রতাই হল এই শক্তির উন্মুক্তির আসল পথ।”",
      filesize:"0.4 mb",
      close:true,
      tag:{isOpen:true, tagTitle:"Uploaded", tagColor:"green"}

    },
    {
      desc:"“স্থির মনের দ্বারাই জীবনের পরম সত্যকে অনুভব করা সম্ভব।”",
      filesize:"0.2 mb",
      close:false,
      tag:{isOpen:true, tagTitle:"Uploaded", tagColor:"blue"}

    }
  ]
  return (
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
        {data.map((items, index)=>(
          <Cards data={items} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground