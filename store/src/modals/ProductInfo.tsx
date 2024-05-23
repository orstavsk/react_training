import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Product from '../types/Product';

interface ProductInfoModalProps {
    product?: Product;
    isOpen: boolean;
    onClose: () => void;
    addToCart: (product: Product) => void;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = (props:ProductInfoModalProps) => {
    return (
        <Dialog open={props.isOpen} onClose={props.onClose}>
            <DialogTitle>{props.product?.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.product?.description}</DialogContentText>
                <DialogContentText>מחיר: {props.product?.price}₪</DialogContentText>
                <img
                    src={props.product?.image}
                    style={{ maxWidth: 300, maxHeight: 400 }}
                    alt="Product"
                />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={() => {
                        if (props.product) {
                            props.addToCart(props.product);
                        }
                         props.onClose();
                    }}
                >
                    הוסף לעגלה
                </Button>

                <Button onClick={props.onClose} autoFocus>
                    סגור
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductInfoModal;
