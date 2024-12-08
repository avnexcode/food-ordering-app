import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { UpdateAddressDialog } from './dialog/UpdateAddressDialog';

export const AddressListItem = () => {
    return (
        <Card className="w-full border border-gray-200 shadow-sm rounded-lg">
            <CardContent className="px-6 py-4">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-700">
                        <strong className="font-semibold">Nama:</strong>{' '}
                        Muhammad Fauzi Nur Aziz
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong className="font-semibold">
                            Nomor Telepon:
                        </strong>{' '}
                        081515379818
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong className="font-semibold">Alamat:</strong> Jl.
                        Example No. 123, Jakarta, Indonesia
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <UpdateAddressDialog />
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
