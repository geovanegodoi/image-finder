import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import ZoomIn from "@mui/icons-material/ZoomIn";
import { ImageModel, ImagesContext } from "../contexts/ImagesContext";
import { useContext } from "react";
import { ImageSource } from "./ImageSource";
import ImageModal from "./ImageDialog";
import useModal from "../hooks/useModal";

function ImageGallery() {
    const { images } = useContext(ImagesContext);
    const { isModalOpened, toggleModal } = useModal();
    const [currentImage, setCurrentImage] = useState<ImageModel>();

    function handleOpen(image: ImageModel) {
        setCurrentImage(image);
        toggleModal();
    }

    return (
        <ImageList cols={2} gap={10} sx={{ margin: "20px 20px" }}>
            {images.map((image) => (
                <ImageListItem key={image.id}>
                    <ImageSource {...image} />
                    <ImageListItemBar
                        title={image.tags}
                        subtitle={image.user}
                        actionIcon={
                            <IconButton
                                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                onClick={() => handleOpen(image)}
                            >
                                <ZoomIn color="inherit" />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
            <ImageModal
                isOpened={isModalOpened}
                toggle={toggleModal}
                image={currentImage!}
            />
        </ImageList>
    );
}

export default ImageGallery;
