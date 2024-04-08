// component that displays titles of the two components below

export const ProductHeader = () => {
    return (
        <div className="flex justify-center text-4xl text-white font-bold py-5 bg-light-blue w-full">
            <div className="flex justify-around w-[1080px]">
                <h1>Seznam produktů</h1>
                <h1>Formulář produktu</h1>
            </div>
        </div>
    );
};
