// component that renders form for adding a product

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddButton } from "./AddButton";
import { DialogContext } from "../App";

// setting the types of the input fields in the form
interface ProductFormInputs {
    name: string;
    paymentStatus: string;
    availability: string;
}

const paymentStatuses = ["hrazené", "nehrazené", "neuvedeno"];
const availabilities = ["ano", "ne"];

export const ProductForm = () => {
    // consuming the function to open the success dialog on adding the product
    const { openDialog } = useContext(DialogContext);

    // using react-hook-form library for easier validation of the form inputs
    // and submitting the form data
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductFormInputs>();

    // function for submitting the data after it is validated by react-hook-form
    // product data is saved as an object and added to products array in local storage
    const onSubmit: SubmitHandler<ProductFormInputs> = (data) => {
        const productId = self.crypto.randomUUID();
        const productData = { id: productId, ...data };

        // if there is an item in local storage with the key "products", product data object is appended to this array
        if (localStorage.getItem("products")) {
            const products = JSON.parse(localStorage.getItem("products")!);
            products.push(productData);
            localStorage.setItem("products", JSON.stringify(products));
        }
        // if there is no such item, an empty products array is created, product data is appended to it,
        // and the array is saved to local storage under the key "products"
        else {
            const products = [];
            products.push(productData);
            localStorage.setItem("products", JSON.stringify(products));
        }

        // calling the function to open the success dialog
        openDialog();

        // resetting the form inputs
        reset();
    };

    return (
        <div className="flex flex-col justify-start w-1/2 my-10 ml-10 relative z-1">
            <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 text-base"
            >
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="name">
                        Název
                    </label>
                    <input
                        {...register("name", {
                            required: "Zadejte prosím název produktu",
                        })}
                        className="border-b outline-none"
                        id="name"
                        placeholder="Název produktu"
                        onFocus={(event) => (event.target.placeholder = "")}
                        onBlur={(event) =>
                            (event.target.placeholder = "Název produktu")
                        }
                    />
                    <p className="text-right text-red">
                        {errors.name?.message}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="paymentStatus">
                        Úhrada
                    </label>
                    <select
                        {...register("paymentStatus", {
                            validate: (value) =>
                                paymentStatuses.includes(value) ||
                                "Prosím vyberte možnost",
                        })}
                        className="border rounded-md"
                        id="paymentStatus"
                        defaultValue={"default"}
                    >
                        <option disabled value="default">
                            Vyberte možnost
                        </option>
                        <option value="hrazené">Hrazené</option>
                        <option value="nehrazené">Nehrazené</option>
                        <option value="neuvedeno">Neuvedeno</option>
                    </select>
                    <p className="text-right text-red">
                        {errors.paymentStatus?.message}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="availability">
                        Výskyt na trhu
                    </label>
                    <select
                        {...register("availability", {
                            validate: (value) =>
                                availabilities.includes(value) ||
                                "Prosím vyberte možnost",
                        })}
                        className="border rounded-md"
                        id="availability"
                        defaultValue={"default"}
                    >
                        <option disabled value="default">
                            Vyberte možnost
                        </option>
                        <option value="ano">Ano</option>
                        <option value="ne">Ne</option>
                    </select>
                    <p className="text-right text-red">
                        {errors.availability?.message}
                    </p>
                </div>
                <div className="flex justify-start">
                    <AddButton text="Přidat nový produkt" type="submit" />
                </div>
            </form>
        </div>
    );
};
