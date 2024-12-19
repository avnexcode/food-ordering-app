import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const UpdateStoreImageForm = () => {
    return (
        <div className="w-full flex items-center gap-8">
            <Avatar className="w-44 h-44">
                <AvatarImage src="https://placehold.co/400x400" alt={''} />
                <AvatarFallback>{''}</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="w-full max-w-xs">
                Upload Foto
            </Button>
        </div>
    );
};
