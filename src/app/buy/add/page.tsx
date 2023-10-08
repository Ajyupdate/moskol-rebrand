"use client";
import PrivateRoute from "@/components/PrivateRoute";
import NewProductForm from "@/modules/buy/AddNewProduct";

export default function NewProduct() {
  return (
    <div>
      <PrivateRoute>
        <NewProductForm />
      </PrivateRoute>
    </div>
  );
}
