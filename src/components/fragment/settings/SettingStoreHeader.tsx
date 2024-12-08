import { UpdateStoreDialog } from '@/features/store/components/dialog/UpdateStoreDialog';

export const SettingStoreHeader = () => {
    return (
        <header className="border-b-2 border-green-500 py-3">
            <h1 className="text-5xl">Hello Store</h1>
            <UpdateStoreDialog />
        </header>
    );
};
