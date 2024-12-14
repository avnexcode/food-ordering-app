import { FormDescription } from '@/components/ui/form';
import { BadgeCheck } from 'lucide-react';

type ValidatedPasswordProps = {
    children: React.ReactNode;
    isValid: boolean;
};

export const ValidatedPassword = (props: ValidatedPasswordProps) => {
    const { children, isValid } = props;
    return (
        <FormDescription className="flex items-center gap-1">
            <BadgeCheck
                className={`w-4 h-4 ${isValid ? 'text-green-500' : 'text-gray-500'}`}
            />
            <span className={isValid ? 'text-green-500' : ''}>{children}</span>
        </FormDescription>
    );
};
