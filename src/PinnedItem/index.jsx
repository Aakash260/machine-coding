import React, { useState } from "react";

export default function PinItems() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy groceries", pinned: false },
    { id: 2, text: "Call Alice", pinned: false },
    { id: 3, text: "Meeting with Bob", pinned: false },
    { id: 4, text: "Pay electricity bill", pinned: false },
    { id: 5, text: "Read a book", pinned: false },
    { id: 6, text: "Go for a walk", pinned: false },
    { id: 7, text: "Fix bug #234", pinned: false },
    { id: 8, text: "Review pull requests", pinned: false },
  ]);

  // toggle pin status
  const togglePin = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, pinned: !item.pinned } : item
    );

    // reorder: pinned items on top
    updated.sort((a, b) => (b.pinned === a.pinned ? 0 : b.pinned ? 1 : -1));

    setItems(updated);
  };

  return (
    <div className="container" data-testid="app-container">
      <h3 data-testid="main-title">Pin Items To Top</h3>
      <ul data-testid="item-list">
        {items.map((item) => (
          <li key={item.id} className={item.pinned ? "pinned" : ""}>
            <label>
              <input
                type="checkbox"
                checked={item.pinned}
                onChange={() => togglePin(item.id)}
                data-testid={`pin-checkbox-${item.id}`}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
