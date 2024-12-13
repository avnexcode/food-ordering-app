import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { UpdateAddressDialog } from './dialog/UpdateAddressDialog';
import type { Address, District, Regency, Village } from '@prisma/client';
import { useProfile } from '@/features/profile/api';
import { DeleteAddressButton } from './button/DeleteAddressButton';

type AddressListItemProps = {
    address: Address & {
        village: Village;
        district: District;
        regency: Regency;
    };
};

export const AddressListItem = (props: AddressListItemProps) => {
    const { data: user } = useProfile();
    return (
        <Card className="w-full border border-gray-200 shadow-sm rounded-lg">
            <CardContent className="px-6 py-4">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-700">
                        <strong className="font-semibold">Label:</strong>{' '}
                        {props.address.label}
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong className="font-semibold">
                            Nomor Telepon:
                        </strong>{' '}
                        {user?.phone ?? '-'}
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong className="font-semibold">Alamat:</strong>{' '}
                        {`${props.address.street}, 
                        ${props.address.village.name}, 
                        ${props.address.district.name}, 
                        ${props.address.regency.name}, 
                        ${props.address.country} 
                        ${props.address.postal_code}`}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="w-full flex gap-3">
                    <DeleteAddressButton id={props.address.id} />
                    <UpdateAddressDialog />
                </div>
                <Button
                    size="sm"
                    variant="default"
                    disabled
                    className="bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                    Set as Default
                </Button>
            </CardFooter>
        </Card>
    );
};
