import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

function useSearch() {
    const [state, setState] = useState({
        searchText: "",
        amount: 10,
        apiUrl: "https://pixabay.com/api",
        apiKey: "33962117-61f7d19c591fea9e6fd324ffa",
        images: [],
    });

    function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
        setState((prev) => ({
            ...prev,
            searchText: e.target.value,
        }));
    }

    function handleSelectChange(e: SelectChangeEvent<number>) {
        setState((prev) => ({
            ...prev,
            amount: e.target.value as number,
        }));
    }

    return [state];
}

export default useSearch;
