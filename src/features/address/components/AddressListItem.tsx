import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { UpdateAddressDialog } from './dialog/UpdateAddressDialog';

export const AddressListItem = () => {
    return (
        <Card className="w-full">
            <CardContent className="px-4 py-3">
                <div className="flex flex-col gap-3">
                    <p>
                        <strong>Nama:</strong> Muhammad Fauzi Nur Aziz
                    </p>
                    <p>
                        <strong>Nomor Telepon:</strong> 081515379818
                    </p>
                    <p>
                        <strong>Alamat:</strong> Jl. Example No. 123, Jakarta,
                        Indonesia
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between px-4 py-3">
                <UpdateAddressDialog />
                <Button size={'sm'} variant={'default'} disabled>
                    Set as Default
                </Button>
            </CardFooter>
        </Card>
    );
};
