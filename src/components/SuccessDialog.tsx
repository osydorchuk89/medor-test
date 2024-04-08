// the dialog that indicates that the product data was succesfully saved
// can be closed on clicking the close icon or clicking outside the dialog

import { useContext } from "react";
import { Dialog } from "@headlessui/react";
import { DialogContext } from "../App";

interface CloseIconProps {
    handleClick: () => void;
}

// the close icon component
const CloseIcon = ({ handleClick }: CloseIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6 cursor-pointer absolute right-5"
            onClick={handleClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
            />
        </svg>
    );
};

export const SuccessDialog = () => {
    // using the context value to check if the dialog should be opened
    // and the function to close the dialog
    const { isOpen, closeDialog } = useContext(DialogContext);

    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center">
                <Dialog.Panel className="rounded-xl bg-white w-[480px] h-[180px] shadow-md">
                    <Dialog.Title className="flex rounded-xl rounded-b-none bg-green py-5 relative justify-center shadow-md">
                        <span className="text-xl text-white font-bold">
                            Úspěch
                        </span>
                        <CloseIcon handleClick={closeDialog} />
                    </Dialog.Title>
                    <Dialog.Description className="flex justify-center items-center p-8 text-lg">
                        Úspěšně jste přidali produkt!
                    </Dialog.Description>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
