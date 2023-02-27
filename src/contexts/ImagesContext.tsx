import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export interface ImagesContextProps {
    images: ImageModel[];
    loadImages(images: ImageModel[]): void;
}

export interface ImageModel {
    id: number;
    largeImageURL: string;
    tags: string;
    user: string;
}

export interface ImagesProviderProps {
    children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE = {
    images: [] as ImageModel[],
} as ImagesContextProps;

export const ImagesContext = createContext<ImagesContextProps>(INITIAL_STATE);

export function ImagesProvider({ children }: ImagesProviderProps) {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    function loadImages(images: []) {
        dispatch({ type: "LOAD_IMAGES", payload: images });
    }

    return (
        <ImagesContext.Provider value={{ images: state.images, loadImages }}>
            {children}
        </ImagesContext.Provider>
    );
}
