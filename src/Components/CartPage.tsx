import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, IconButton, Avatar, ListItemAvatar, Typography, Button, Alert, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Product from '../types/Product';
import { selectCart, selectCartTotalPrice, selectCarttotalCount } from '../state/reducers/cart_reducer';
import useCartActions from '../hooks/useCartActions';
import OrderCompleteDialog from './OrderCompleteDialog';
import { selectCash } from '../state/reducers/user_reducer';
import ProgressBarOrder from './ProgressBarOrder';

const CartPage: React.FC = () => {
    const cash = useSelector(selectCash);
    const cartItems = useSelector(selectCart);
    const cartItemsCount = useSelector(selectCarttotalCount); //selectCartTotalCount
    const totalPrice = useSelector(selectCartTotalPrice);
    const { handleDelete, orderProducts, progress } = useCartActions();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleOrder = async () => {
        if (cash >= totalPrice) {
            await orderProducts();
            setIsOpen(true);
        } else {
            setShowAlert(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setShowAlert(false);
    };

    return (
        <div>
            {/* maybe keep a isLoading state to make it more readable */}
            {progress > 0 && progress < 100 && (
                <ProgressBarOrder progress={progress} isOpen={true} />
            )}

            {cartItemsCount === 0 ? (
                <Typography>
                    העגלה ריקה
                </Typography>
            ) : (
                <>
                    {showAlert && (
                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open>
                            <Alert variant="filled" severity="error" icon={false} sx={{ width: 'min-content', whiteSpace: 'nowrap' }}>
                                ההזמנה לא הושלמה
                            </Alert>
                        </Snackbar>
                    )}



                    <Button variant="contained" onClick={() => handleOrder()}>
                        {`הזמן ${totalPrice.toFixed(2)}₪`}
                    </Button>

                    <List>
                        {cartItems.map((item: Product, index: number) => (
                            // this should be a component
                            <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex' }}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ width: '50px', height: '50px' }} src={item.image} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={`₪${item.price}`}
                                        sx={{ textAlign: 'right' }}
                                    />
                                </div>
                                <IconButton color='error' aria-label="delete" onClick={() => handleDelete(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>

                </>
            )}
            <OrderCompleteDialog open={isOpen} onClose={handleClose} />
        </div>
    );
};

export default CartPage;
