interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
}

export default function Input({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
    disabled = false,
    error,
}: InputProps) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`
          w-full px-4 py-2.5 rounded-lg border text-sm
          focus:outline-none focus:ring-2 transition
          ${error
                        ? "border-red-400 focus:ring-red-200"
                        : "border-gray-300 focus:ring-blue-200"}
          ${disabled && "bg-gray-100 cursor-not-allowed"}
        `}
            />

            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    );
}
