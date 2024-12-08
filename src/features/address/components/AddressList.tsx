import { AddressListItem } from './AddressListItem';
import { CreateAddressDialog } from './dialog/CreateAddressDialog';

export const AddressList = () => {
    return (
        <>
            <header className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Address List</h1>
                <CreateAddressDialog />
            </header>
            <main className="flex flex-col gap-[30px]">
                <AddressListItem />
                <AddressListItem />
                <AddressListItem />
            </main>
        </>
    );
};
