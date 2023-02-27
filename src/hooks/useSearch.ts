import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ImagesContext } from "../contexts/ImagesContext";

function useSearch() {
    const [state, setState] = useState({
        searchText: "",
        amount: 10,
        apiUrl: "https://pixabay.com/api",
        apiKey: "33962117-61f7d19c591fea9e6fd324ffa",
    });
    const { loadImages } = useContext(ImagesContext);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({
            ...prev,
            searchText: e.target.value,
        }));
    };

    const handleAmountChange = (e: SelectChangeEvent<number>) => {
        setState((prev) => ({
            ...prev,
            amount: e.target.value as number,
        }));
    };

    useEffect(() => {
        if (state.searchText === "") return;
        axios
            .get(
                `${state.apiUrl}/?key=${state.apiKey}&q=${state.searchText}&image_type=photo&per_page=${state.amount}&safesearch=true`
            )
            .then((res) => loadImages(res.data.hits))
            .catch((err) => console.log(err));
    }, [state.searchText, state.amount]);

    return {
        searchText: state.searchText,
        amount: state.amount,
        handleTextChange,
        handleAmountChange,
    };
}

export default useSearch;
