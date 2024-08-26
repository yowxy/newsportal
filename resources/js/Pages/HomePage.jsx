import Newlists from '@/Components/HomePage/Newlists';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import React from 'react';
import Paginator from '@/Components/HomePage/Paginator';

export default function HomePage(props) {

    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <div className='sticky top-0 z-50 bg-slate-50'>
                <Navbar user = {props.auth.user}/>
            </div>
            <div className='m-20 flex justify-center items-center flex-col lg:flex-row lg:flex-wrap  lg:items-stretch  gap-4 '>
                <Newlists news={props.news.data} />
            </div>
            <div className='flex justify-center items-center' >
                <Paginator  meta={props.news.meta} />
            </div>
        </div>

    );
}
