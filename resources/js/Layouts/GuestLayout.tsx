import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children , loggedIn}: {children:React.ReactNode,loggedIn?:boolean}) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-slate-900 pt-6 sm:justify-center sm:pt-0">
            <div className='flex items-center gap-4'>
                <Link href="/">
                    <ApplicationLogo className="h-[30px] fill-current text-gray-500" />
                </Link>
                <h2 className='font-bold text-white text-[20px]'>HardHat Cloud Tech</h2>
            </div>

            <div className="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
