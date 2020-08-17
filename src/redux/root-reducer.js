import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import CartReducer from "./Cart/CartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
  
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
