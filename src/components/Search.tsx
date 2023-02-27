import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { ImagesContext } from "../contexts/ImagesContext";

function Search() {
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

    const handleSelectChange = (e: SelectChangeEvent<number>) => {
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

    return (
        <Box sx={{ display: "flex" }}>
            <TextField
                name="searchText"
                label="Search for images"
                variant="filled"
                size="small"
                sx={{ width: "80%" }}
                value={state.searchText}
                onChange={handleTextChange}
            />
            <FormControl variant="filled" sx={{ width: "20%" }} size="small">
                <InputLabel>Amount</InputLabel>
                <Select
                    name="amout"
                    label="Amount"
                    variant="filled"
                    size="small"
                    value={state.amount}
                    onChange={handleSelectChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default Search;
