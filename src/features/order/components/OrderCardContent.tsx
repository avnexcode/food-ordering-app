import { toIDR } from '@/utils';

export const OrderCardContent = () => {
    return (
        <div className="flex gap-5 py-10 ">
            <div className="w-64">
                <img src="https://placehold.co/600x400" alt="" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between w-full">
                    <div>
                        <p>Minyak Lintah</p>
                    </div>
                    <div className="flex gap-2">
                        <p>{toIDR(300000)}</p>
                        <p>x</p>
                        <p>3</p>
                    </div>
                </div>
                <p>Toko Lendir Mas Yoga</p>
            </div>
        </div>
    );
};
