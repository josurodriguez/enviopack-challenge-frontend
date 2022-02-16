import Router from './router'
import { useDispatch } from "react-redux";

import { loadProducts } from "./redux/slices/productosSlice";
import { loadUser } from "./redux/slices/usuarioSlice";

import products from "./data/products.json";
import profile from "./data/profile.json";

export const App = () => {
  const dispatch = useDispatch();
  dispatch(loadProducts(products.productos));
  dispatch(loadUser(profile.profile));
return (<Router/>)}
