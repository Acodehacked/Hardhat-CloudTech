import StandardLinkButton from '@/Components/Common/StandardLinkButton';
import UserNavbar from '@/Components/User/UserNavbar';
import GuestHome from '@/Layouts/GuestHomeLayout';
import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Welcome() {

    return (
        <>
            <GuestHome logged={false}>
                <Head title="Home" />
                <section className='flex flex-col max-h-[100vh] h-full pt-14 relative overflow-hidden'>
                    <div className='h-full text-white md:bg-transparent bg-primary py-10 md:absolute max-w-[1700px] w-full mx-auto top-0 left-0 bottom-0 z-[2] right-0 justify-center flex flex-col items-start p-3'>
                        <p>100+ Success Stories</p>
                        <h2 className='text-[38px] font-bold md:max-w-[600px]'>Building Smarter Construction Management Solutions</h2>
                        <div className='flex gap-3 mt-5'>
                            <StandardLinkButton className={'text-black'} link={'home'} text={'Book A Demo'} />
                            <StandardLinkButton className={'text-black bg-zinc-300 hover:bg-zinc-500 hover:gradient-0'} link={'home'} text={'Our Solutions'} />
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 bottom-0 md:bg-gradient-to-t from-black to-transparent z-[1]'>
                    </div>
                    <div className='min-h-[90vh] relative w-full'>
                        <div className='absolute md:hidden top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-primary via-transparent to-transparent z-[1]'>
                        </div>
                        <img className='object-cover w-full h-full' src={'storage/img1.jpg'} />
                    </div>
                </section>

            </GuestHome>
        </>
    );
}
