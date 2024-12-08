import Image from 'next/image';
import React from 'react';

export const AuthHero = () => {
    return (
        <>
            <Image
                className="w-full h-full object-cover opacity-85"
                src={
                    'https://res.cloudinary.com/dkmlayydv/image/upload/v1733625628/q5gsgr2v2krtuqihrdna.jpg'
                }
                alt="Auth Background"
                width={1500}
                height={1500}
            />
        </>
    );
};
