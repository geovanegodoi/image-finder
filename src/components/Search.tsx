import React from "react";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import useSearch from "../hooks/useSearch";

function Search() {
    const { searchText, amount, handleTextChange, handleAmountChange } =
        useSearch();

    return (
        <Box sx={{ display: "flex" }}>
            <TextField
                name="searchText"
                label="Search for images"
                variant="filled"
                size="small"
                sx={{ width: "80%" }}
                value={searchText}
                onChange={handleTextChange}
            />
            <FormControl variant="filled" sx={{ width: "20%" }} size="small">
                <InputLabel>Amount</InputLabel>
                <Select
                    name="amout"
                    label="Amount"
                    variant="filled"
                    size="small"
                    value={amount}
                    onChange={handleAmountChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default Search;
