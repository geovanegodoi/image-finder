import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ImageSource } from "./ImageSource";
import { ImageModel } from "../contexts/ImagesContext";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface ImageDialogProps {
    isOpened: boolean;
    image: ImageModel;
    toggle: () => void;
}

export default function ImageModal({
    isOpened,
    toggle,
    image,
}: ImageDialogProps) {
    return (
        <div>
            <Modal
                open={isOpened}
                onClose={toggle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ImageSource {...image} />
                </Box>
            </Modal>
        </div>
    );
}
