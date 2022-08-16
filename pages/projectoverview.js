import React,{useState} from 'react'
import Link from 'next/link'

export default function projectoverview() {
    const [readMore,setReadMore]=useState(false);

    const columns = ['Project Code', 'Name', 'Status', 'Project Manager', 'State', 'Customer Name']

const l = columns.length/2
console.log(l)
    const values = [1, 'Abhi', 'Green', 'vijay', 'something', 'Venerate']

    const extraContent=<div>

     

  </div>

const linkName=readMore?'Read Less << ':'Read More >> '

    return (
        <div >
            <div>
                <h3>Basic Details</h3>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 grid-flow-col gap-y-0.5 gap-x-1  p-5 ">

{columns.map((c,index)=>{
    if (index<columns.length/2){
return <div key={index} className=" col-start-1  text-lg  font-serif ">{c}</div>
    }
    else{
      return  <div key={index} className=" col-start-3 text-lg font-serif    ">{c}</div>
    }
})}
                {values.map((v,index)=>{
                    if (v===null || v===undefined){
                        return (
                            <div key={index}>-</div>
                        )
                    }
                    else{
                        return (
                            <div key={index} className="text-base text-black font-normal font-mono ">{v}</div>
                        )
                    }
                })}



     
            </div>
            <Link href=''  > 
<div>

     
            <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>

      {readMore && extraContent}
</div>
            </Link>
        </div>
    )

}
