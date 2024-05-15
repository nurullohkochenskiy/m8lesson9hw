import create from "zustand";
import axios from "axios";
import { log } from "console";

const getDiscountedProducts = async (set: any) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const response = await axios.get("http://localhost:3001/students");
    console.log(response);
    set((state) => ({
      ...state,
      loading: false,
    }));
  } catch (error) {
    console.log(error);
    set((state) => ({
      ...state,
      loading: false,
    }));
  } finally {
    set((state) => ({
      ...state,
      loading: false,
    }));
  }
};
const getAllProducts = async (set: any) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const response = await axios.get("http://localhost:3001/students");
    console.log(response);
    set((state) => ({
      ...state,
      loading: false,
    }));
  } catch (error) {
    console.log(error);
    set((state) => ({
      ...state,
      loading: false,
    }));
  } finally {
    set((state) => ({
      ...state,
      loading: false,
    }));
  }
};

const useProductStore = create((set) => ({
  discountedProducts: [],
  allProducts: [],
  loading: false,
  error: "",
  getDiscountedProducts: () => getDiscountedProducts(set),
  getAllProducts: () => getAllProducts(set),
}));

export default useProductStore;
