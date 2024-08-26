import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);
    const [flashMessage, setFlashMessage] = useState('');

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data);
        setTitle('');
        setDescription('');
        setCategory('');
    }

    useEffect(() => {
        if (auth.flash && auth.flash.message) {
            setFlashMessage(auth.flash.message);
            setIsNotif(true);
        }
    }, [auth.flash]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-gray-200 border-b">
                        {isNotif && <div className="alert alert-info shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>{flashMessage}</span>
                            </div>
                        </div>}
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input input-bordered w-full m-2"
                            onChange={(e) => setTitle(e.target.value)} value={title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="input input-bordered w-full m-2"
                            onChange={(e) => setDescription(e.target.value)} value={description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="input input-bordered w-full m-2"
                            onChange={(e) => setCategory(e.target.value)} value={category}
                        />
                        <button className='btn btn-primary text-white m-2' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
