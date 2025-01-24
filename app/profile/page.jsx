import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const DashboardPage = async () => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return (
        <div className='flex flex-col items-center justify-center mt-24'>
            <p className='text-xl'>Hi {user?.given_name}, this i your Profile</p>
        </div>
    );
};

export default DashboardPage;