import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../state/reducers/cartReducer';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import { orderProduct } from '../state/reducers/userReducer';
import { useState } from 'react';

const useCartActions = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const [progress, setProgress] = useState<number>(0);

    const handleDelete = (index: number) => {
        dispatch(deleteFromCart(index));
    };

    const orderProducts = async () => {
        for (const [index] of cartItems.entries()) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            dispatch(orderProduct(cartItems[index]));
            handleDelete(0);
            const newProgress = Math.floor(((index + 1) / cartItems.length) * 100);
            setProgress(newProgress);
        }
        setProgress(100); 
    };

    return { handleDelete, orderProducts, progress };
};

export default useCartActions;
