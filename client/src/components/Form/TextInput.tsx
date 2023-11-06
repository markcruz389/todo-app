type Props = {
    label: string;
    name: string;
    placeholder?: string;
    value: string;
    error: boolean;
    handleChange: (name: string, value: string) => void;
};

const TextInput = ({
    label,
    name,
    placeholder = "",
    value,
    error = false,
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
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(name, e.target.value)}
            />
            {error && <p>Todo is required</p>}
        </div>
    );
};

export default TextInput;
