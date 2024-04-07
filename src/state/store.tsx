import { configureStore} from '@reduxjs/toolkit';
import cart_reducer from './reducers/cartReducer';
import user_reducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    cart: cart_reducer,
    user:user_reducer,
  },
});

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch