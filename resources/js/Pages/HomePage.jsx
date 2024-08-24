import { Link, Head } from '@inertiajs/react';
import React from 'react';
export default function HomePage (props){
    console.log(props);
    return(
        <div className=' d-inline-block justify-center items-center min-h-screen  bg-slate-50  '>
            <Head title={props.title}/>
            <p className='p-10  text-5xl font-bold' >{props.description}</p>
            {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i} className='p-4  m-2 bg-white text-black  text-shadow shadow-md rounded-md' >
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                        <i className='text-small' >{data.category}</i>
                        <i className='text-small' >{data.author}</i>
                    </div>
                )
            }): <p> Belum ada data berita </p> }
        </div>
    )
}
