import { useState } from "react";

const useModal = () => {
    const [isModalOpened, setIsOpened] = useState<boolean>(false);

    function toggleModal() {
        setIsOpened(!isModalOpened);
    }

    return { isModalOpened, toggleModal };
};

export default useModal;
