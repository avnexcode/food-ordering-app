import { useAddresses } from '../api';
import { AddressListItem } from './AddressListItem';
import { CreateAddressDialog } from './dialog/CreateAddressDialog';

export const AddressList = () => {
    const { data: addresses } = useAddresses();
    return (
        <>
            <header className="flex justify-between items-center p-5">
                <h3 className='text-green-700'>Address List</h3>
                <CreateAddressDialog />
            </header>
            <main className="flex flex-col gap-[30px]">
                {addresses?.length === 0 && (
                    <h6>Tidak ada alamat yang terdaftar</h6>
                )}
                {addresses?.map((address, index) => (
                    <AddressListItem key={index} address={address} />
                ))}
            </main>
        </>
    );
};
