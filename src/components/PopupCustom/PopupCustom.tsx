import React, { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';

interface PopupProps {
    isOpen: boolean,
    title: string,
    subtitle: string,
    options: string[],
    label: string,
    onClose: () => void,
    onSubmit: (selectedOption: string) => void,
}

const PopupCustom = ({ isOpen, title, subtitle, options, label, onClose, onSubmit }: PopupProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close the modal if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            handleClose();
        }
    };

    // Close when press Escape button
    const handlePressEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handlePressEscape);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handlePressEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handlePressEscape);
        };
    }, [isOpen]);

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    const handleClose = () => {
        setSelectedOption(null);
        onClose();
    }

    const handleSend = () => {
        if (selectedOption) {
            onSubmit(selectedOption);
            onClose();
        }
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            {/* Modal content */}
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 space-y-6 relative"
            >

                <div className="flex items-center justify-between">
                    {/* Invisible div to center the title */}
                    <div className="w-6" />

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-center flex-grow">{title}</h2>

                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 w-6 h-6 text-2xl leading-none hover:bg-gray-300 transition-all duration-200 rounded-xl"
                    >
                        <MdClose />
                    </button>
                </div>

                {/* Subtitle */}
                <p className="text-left text-xl font-semibold text-black">{subtitle}</p>

                {/* Radio Group */}
                <div className="space-y-3">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center space-x-3">
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                                className="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
                            />
                            <span className="text-gray-800">{option}</span>
                        </label>
                    ))}
                </div>

                {/* Send Button */}
                <button
                    onClick={handleSend}
                    disabled={!selectedOption}
                    className={`w-full py-2 font-semibold rounded-lg ${selectedOption
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-amber-800'
                            : 'bg-gray-300 cursor-not-allowed text-white'
                        }`}
                >
                    {label}
                </button>
            </div>
        </div>
    );
};

export default PopupCustom;
