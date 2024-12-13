import { Eye, EyeOff } from 'lucide-react';

type PasswordViewButtonProps = {
    passwordView: boolean;
    setPasswordView: (prev: boolean) => void;
    className?: string;
};
export const PasswordViewButton = (props: PasswordViewButtonProps) => {
    const { passwordView, setPasswordView, className } = props;

    return (
        <button
            type="button"
            className={`absolute right-5 top-9 text-gray-400 hover:text-gray-600 ${className}`}
            onClick={() => setPasswordView(!passwordView)}
        >
            {passwordView ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
    );
};
