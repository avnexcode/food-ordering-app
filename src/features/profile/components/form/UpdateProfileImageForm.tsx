import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const UpdateProfileImageForm = () => {
    return (
        <div className="w-full flex flex-col items-start gap-5">
            <Avatar className="w-36 h-36">
                <AvatarImage src="https://placehold.co/400x400" alt={''} />
                <AvatarFallback>{''}</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="w-full max-w-lg">
                Upload Foto
            </Button>
        </div>
    );
};
