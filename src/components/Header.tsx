// header component of the page

export const Header = () => {
    return (
        <div className="flex w-[1080px] justify-between items-center h-16 z-10">
            <a href="https://www.medor.cz/" target="_blank">
                <img
                    width="137"
                    height="32"
                    src="https://www.medor.cz/wp-content/uploads/2021/11/logo-1.svg"
                />
            </a>
            <div className="flex justify-between items-center text-sm gap-12">
                <ul className="flex gap-5">
                    <li>Produkty</li>
                    <li>O nás</li>
                    <li>Kontakty</li>
                    <li>Blog</li>
                    <li className="flex items-center">
                        <img src="/english.png" />
                    </li>
                    <li className="flex items-center">
                        <img src="/czech.png" />
                    </li>
                </ul>
                <ul className="flex gap-2 text-xl font-bold">
                    <li>
                        <a
                            href="https://www.linkedin.com/company/medor-crm/"
                            target="_blank"
                        >
                            in
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/medor.crm.it"
                            target="_blank"
                        >
                            f
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
