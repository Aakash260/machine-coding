import React, { useState } from "react";

const ExpenseTracker = () => {
  const [totalIncome, setTotalIncome] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [list, setList] = useState([]);
  const [expense, setExpense] = useState({ title: "", amount: "" });

  const handleSubmit = () => {
    setShowTable(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!expense.title || !expense.amount) return;

    setList((prevList) => [...prevList, expense]);
    setExpense({ title: "", amount: "" });
  };

  // calculate remaining income dynamically
  const remainingIncome =
    Number(totalIncome) -
    list.reduce((acc, curr) => {
      return acc + Number(curr.amount);
    }, 0);

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <input
          type="number"
          value={totalIncome}
          onChange={(e) => setTotalIncome(e.target.value)}
          className="border rounded-md p-2"
          placeholder="Enter total income"
        />
        <button
          className="border rounded-md p-2 cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {showTable && (
        <div className="mt-6">
          <div className="text-center font-semibold text-lg mb-4">
            Total Income: {totalIncome} <br />
            Remaining Income: {remainingIncome}
          </div>

          <div className="flex justify-between gap-8">
            {/* Expense Form */}
            <div>
              <div className="font-medium mb-2">Enter Expense</div>
              <form className="grid gap-3" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  className="border rounded-md p-2"
                  placeholder="Enter Title"
                  name="title"
                  value={expense.title}
                  onChange={(e) =>
                    setExpense({ ...expense, title: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="border rounded-md p-2"
                  placeholder="Enter Amount"
                  name="amount"
                  value={expense.amount}
                  onChange={(e) =>
                    setExpense({ ...expense, amount: e.target.value })
                  }
                />
                <button className="border rounded-md p-2 cursor-pointer">
                  Add Expense
                </button>
              </form>
            </div>

            {/* Expense List */}
            <div className="flex-1">
              <div className="font-medium mb-2">Expense List</div>
              {list.length === 0 ? (
                <p className="text-gray-500">No expenses added yet.</p>
              ) : (
                <table className="w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Title</th>
                      <th className="border p-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((item, index) => (
                      <tr key={index}>
                        <td className="border p-2">{item.title}</td>
                        <td className="border p-2">{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
