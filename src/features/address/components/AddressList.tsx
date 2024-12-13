import { useAddresses } from '../api';
import { AddressListItem } from './AddressListItem';
import { CreateAddressDialog } from './dialog/CreateAddressDialog';

export const AddressList = () => {
    const { data: addresses } = useAddresses();
    return (
        <>
            <header className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Address List</h1>
                <CreateAddressDialog />
            </header>
            <main className="flex flex-col gap-[30px]">
                {addresses?.length === 0 && (
                    <h1>Tidak ada alamat yang terdaftar</h1>
                )}
                {addresses?.map((address, index) => (
                    <AddressListItem key={index} address={address} />
                ))}
            </main>
        </>
    );
};
