import Image from 'next/image';
import React from 'react';

export const AuthHero = () => {
    return (
        <>
            <Image
                className="w-full h-full object-cover opacity-85"
                src={
                    'https://res.cloudinary.com/dkmlayydv/image/upload/t_login/v1733672298/appetizing-burger-front-yellow-background_copy_1.webp'
                }
                alt="Auth Background"
                width={1500}
                height={1500}
            />
        </>
    );
};
