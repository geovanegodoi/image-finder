import React from "react";

export interface ImageSourceProps {
    largeImageURL: string;
    tags: string;
}

export function ImageSource({ largeImageURL, tags }: ImageSourceProps) {
    return (
        <img
            src={`${largeImageURL}?w=100&fit=crop&auto=format`}
            srcSet={`${largeImageURL}?w=100&fit=crop&auto=format&dpr=2 2x`}
            alt={tags}
        />
    );
}
