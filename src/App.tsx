import { createContext, useState } from "react";
import { ProductList } from "./components/ProductList";
import { ProductForm } from "./components/ProductForm";
import { ProductHeader } from "./components/ProductHeader";
import { SuccessDialog } from "./components/SuccessDialog";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Creating context for controllig whether the success dialog is opened or closed.
// By linking the context value to a state, we also ensure that the page is
// re-rendered each time new product is added.

export const DialogContext = createContext({
    isOpen: false,
    openDialog: () => {},
    closeDialog: () => {},
});

export const App = () => {
    // setting the state which controls whether the success dialog is oprn
    const [isOpen, setIsOpen] = useState(false);

    // linking the context values to the state
    const dialogContextValue = {
        isOpen,
        openDialog: () => setIsOpen(true),
        closeDialog: () => setIsOpen(false),
    };

    return (
        <DialogContext.Provider value={dialogContextValue}>
            <div className="flex items-center flex-col">
                <Header />
                <ProductHeader />
                <div className="flex justify-between w-[1080px] h-[720px]">
                    <ProductList />
                    <ProductForm />
                </div>
                <SuccessDialog />
                <Footer />
            </div>
        </DialogContext.Provider>
    );
};
