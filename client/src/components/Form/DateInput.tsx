type Props = {
    label: string;
    name: string;
    placeholder?: string;
    value?: string;
    handleChange: (name: string, value: string) => void;
};

const DateInput = ({
    label,
    name,
    placeholder = "",
    value = "",
    handleChange,
}: Props) => {
    return (
        <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={label}
            >
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={label}
                type="date"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(name, e.target.value)}
            />
        </div>
    );
};

export default DateInput;
