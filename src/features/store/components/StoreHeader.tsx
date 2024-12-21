import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useStoreId } from '../api/useStoreId';
import { useState, useEffect } from 'react';

type StoreHeaderProps = {
    storeId: string;
};

export const StoreHeader = (props: StoreHeaderProps) => {
    const { storeId } = props;
    const { data: store, error, isLoading } = useStoreId(storeId);
    const [avatarSrc, setAvatarSrc] = useState('https://placehold.co/150x150');

    useEffect(() => {
        if (store?.image) {
            setAvatarSrc(store?.image);
        }
    }, [store]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading store data</div>;
    }

    return (
        <div className="flex justify-center items-center w-full border-2 border-gray-100 p-[10px]">
            <div className="w-full flex gap-[10px]">
                <div className="logo w-[10%] flex items-center justify-center">
                    <Avatar className="w-full h-full">
                        <AvatarImage
                            src={avatarSrc}
                            alt={store?.name ?? 'Store Avatar'}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="w-[70%] flex items-center justify-center">
                    <div>
                        <div className="text-xl font-semibold">
                            <span>{store?.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
