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
            setAvatarSrc(store.image);
        }
    }, [store]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading store data</div>;
    }

    return (
        <div className="flex justify-start items-center w-full border-2 border-gray-100 p-4">
            <div className="logo w-[20%] flex items-center justify-center">
                <Avatar className="w-16 h-16 border-2 border-gray-300 rounded-full overflow-hidden shadow-lg">
                    <AvatarImage
                        src={avatarSrc}
                        alt={store?.name ?? 'Store Avatar'}
                        className="w-full h-full object-cover"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="w-[80%] flex flex-col pl-4">
                <div className="text-xl font-semibold">
                    <span>{store?.name}</span>
                </div>
                <div className="text-gray-500 text-sm">
                    <span>{store?.description ?? 'Deskripsi toko belum tersedia.'}</span>
                </div>
            </div>
        </div>
    );
};
