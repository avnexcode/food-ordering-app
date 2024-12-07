import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const UpdateProfileImageForm = () => {
    return (
        <>
            <Avatar className="w-36 h-36">
                <AvatarImage src="https://placehold.co/400x400" alt={''} />
                <AvatarFallback>{''}</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
                Upload Foto
            </Button>
        </>
    );
};
