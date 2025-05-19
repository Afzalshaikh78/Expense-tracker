import React from "react";
import { useStore } from "../store";
import { useState } from "react";

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore()
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | ''>(0);
  return <div>
    
  </div>;
};

export default ExpenseTracker;
