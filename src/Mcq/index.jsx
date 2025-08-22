import React, { useState } from "react";

const mcq = {
  questions: [
    {
      id: 1,
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Number", "Boolean", "Character"],
      answer: "Character",
    },
    {
      id: 2,
      question:
        "Which method is used to add an element at the end of an array in JavaScript?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()",
    },
    {
      id: 3,
      question: "In React, which hook is used to handle side effects?",
      options: ["useState", "useEffect", "useReducer", "useRef"],
      answer: "useEffect",
    },
    {
      id: 4,
      question:
        "Which SQL command is used to remove all records from a table without deleting the table itself?",
      options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
      answer: "TRUNCATE",
    },
    {
      id: 5,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Syntax",
        "Colorful Style Sheet",
      ],
      answer: "Cascading Style Sheets",
    },
  ],
};

const Mcq = () => {
  const [data] = useState(mcq.questions);
  const [selected, setSelected] = useState({}); // stores user answers

  const handleChange = (qid, option) => {
    setSelected((prev) => ({ ...prev, [qid]: option }));
  };

  return (
    <div className="space-y-6 p-4">
      {data.map((q) => (
        <div key={q.id} className="p-4 border rounded-lg">
          <div className="font-semibold mb-2">{q.question}</div>
          <div className="grid grid-cols-2 gap-2">
            {q.options.map((option, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  checked={selected[q.id] === option}
                  onChange={() => handleChange(q.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
          {/* Show result if answered */}
          {selected[q.id] && (
            <div
              className={`mt-2 text-sm ${
                selected[q.id] === q.answer ? "text-green-600" : "text-red-600"
              }`}
            >
              {selected[q.id] === q.answer
                ? "✅ Correct!"
                : `❌ Wrong! Correct answer: ${q.answer}`}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Mcq;
