import { ChangeEvent } from "react";

type Props = {
    checked: boolean;
    label: string;
    disabled?: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({
    checked,
    label,
    disabled = false,
    handleChange,
}: Props) => {
    return (
        <div className="flex items-center">
            <label className="md:w-2/3 block text-gray-500 font-bold">
                <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={handleChange}
                />
                <span className="text-sm">{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
