'use client';
import Link from '@/app/components/shared/Link'; 
import Tasks from '@/app/components/Tasks';
import withAuth from '@/app/HOC/withAuth';
import {ROUTES} from '@/app/constants';

const DashboardPage = () => {
    return (
        <>
            <div className='mb-8'>
                <Link href={ROUTES.createTask}>Create new</Link>
            </div>
            <Tasks />
        </>
    );
};

export default withAuth(DashboardPage);
