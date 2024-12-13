import { ValidatedPassword } from './ValidatedPassword';

type ValidatedPasswordListProps = {
    validationRules: {
        label: string;
        isValid: boolean;
    }[];
    columns?: number;
    className?: string;
};

export const ValidatedPasswordList = (props: ValidatedPasswordListProps) => {
    const { validationRules, columns = 2, className } = props;

    const rulesPerColumn = Math.ceil(validationRules.length / columns);
    const groupedRules = Array.from({ length: columns }, (_, index) =>
        validationRules.slice(
            index * rulesPerColumn,
            (index + 1) * rulesPerColumn,
        ),
    );

    return (
        <div className={`${className}`}>
            {groupedRules.map((columnRules, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-4">
                    {columnRules.map((rule, ruleIndex) => (
                        <ValidatedPassword
                            key={ruleIndex}
                            isValid={rule.isValid}
                        >
                            {rule.label}
                        </ValidatedPassword>
                    ))}
                </div>
            ))}
        </div>
    );
};
