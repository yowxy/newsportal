import Newlists from '@/Components/HomePage/Newlists';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';
import React from 'react';

export default function HomePage(props) {
    console.log(props);
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <div className='sticky top-0 z-50 bg-slate-50'>
                <Navbar />
            </div>
            <div className='m-20 flex justify-center items-center flex-col  lg:flex-row lg:flex-wrap  lg:items-stretch p-10  gap-4 '>

            <Newlists news={props.news.data} />

            </div>
        </div>
    );
}
