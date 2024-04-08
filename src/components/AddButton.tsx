// custom button component

interface AddButtonProps {
    text: string;
    type?: "submit" | "reset" | "button" | undefined;
}

export const AddButton = ({ text, type }: AddButtonProps) => {
    return (
        <button
            className="border rounded-lg py-[15px] px-[25px] bg-light-blue text-white text-base uppercase hover:bg-white hover:text-light-blue transition-all ease-in-out duration-[350ms]"
            type={type}
        >
            {text}
        </button>
    );
};
