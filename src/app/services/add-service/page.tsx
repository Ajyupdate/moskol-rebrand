"use client";
import PrivateRoute from "@/components/PrivateRoute";
import AddService from "@/modules/services/AddService";

export default function AddServicePage() {
  return (
    <PrivateRoute>
      <div>
        <AddService />
      </div>
    </PrivateRoute>
  );
}
