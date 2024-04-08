// the component that renders the list of prducts that were previously added

interface Product {
    id: string;
    name: string;
    paymentStatus: string;
    availability: string;
}

export const ProductList = () => {
    // getting the array of products saved in local storage
    const products = JSON.parse(localStorage.getItem("products")!);

    return (
        <div className="flex flex-col justify-start w-1/2 my-10 mr-10 gap-5 overflow-y-auto">
            {products ? (
                products.map((product: Product) => (
                    <div
                        className="text-base border border-light-blue rounded-md py-4 px-6"
                        key={product.id}
                    >
                        <div>
                            <span className="font-bold">Název produktu: </span>
                            <span>{product.name}</span>
                        </div>
                        <div>
                            <span className="font-bold">Úhrada: </span>
                            <span>{product.paymentStatus}</span>
                        </div>
                        <div>
                            <span className="font-bold">Výskyt na trhu: </span>
                            <span>{product.availability}</span>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center pl-5 my-5">
                    Nebyly nalezeny žádné produkty
                </div>
            )}
        </div>
    );
};
