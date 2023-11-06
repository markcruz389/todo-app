type Props = {
    label: string;
    disabled?: boolean;
    handleChange: (checked: boolean) => void;
};

const Checkbox = ({ label, disabled = false, handleChange }: Props) => {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
                <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    disabled={disabled}
                    onChange={(e) => handleChange(e.target.checked)}
                />
                <span className="text-sm">{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
