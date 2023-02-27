import { ImagesContextProps, ImageModel } from "./ImagesContext";

type ACTIONTYPE = { type: "LOAD_IMAGES"; payload: ImageModel[] };

export default (state: ImagesContextProps, action: ACTIONTYPE) => {
    switch (action.type) {
        case "LOAD_IMAGES":
            return {
                ...state,
                images: action.payload,
            };
    }
};
