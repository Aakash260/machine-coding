import React, { useState, useMemo } from 'react';

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

function buildParentMap(data, parent = null, map = {}) {
  data.forEach((node) => {
    if (parent) {
      map[node.id] = parent;
    }
    if (node.children) {
      buildParentMap(node.children, node, map);
    }
  });
  return map;
}

const Checkbox = ({ data, checked, setChecked, parentMap }) => {
  const handleChange = (e, node) => {
    setChecked((prev) => {
      const newSt = { ...prev, [node.id]: e.target.checked };

      // 1. Update children
      const updateChild = (node) => {
        node.children?.forEach((child) => {
          newSt[child.id] = e.target.checked;
          updateChild(child);
        });
      };
      updateChild(node);

      // 2. Update all parents upward
      const updateParents = (node) => {
        const parent = parentMap[node.id];
        if (!parent) return;

        const allChecked = parent.children.every(
          (child) => newSt[child.id]
        );
        newSt[parent.id] = allChecked;

        updateParents(parent);
      };
      updateParents(node);

      return newSt;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div className="ml-10" key={node.id}>
          <div className="flex gap-1">
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e, node)}
            />
            <div>{node.label}</div>
          </div>
          {node.children && (
            <Checkbox
              data={node.children}
              checked={checked}
              setChecked={setChecked}
              parentMap={parentMap}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheck = () => {
  const [checked, setChecked] = useState({});
  const parentMap = useMemo(() => buildParentMap(CheckboxesData), []);

  return (
    <div>
      <h1>NestedCheck</h1>
      <div className="w-fit">
        <Checkbox
          data={CheckboxesData}
          checked={checked}
          setChecked={setChecked}
          parentMap={parentMap}
        />
      </div>
    </div>
  );
};

export default NestedCheck;
