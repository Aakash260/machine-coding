"use client";
import React, { useState, useRef } from "react";
import { Plus, X } from "lucide-react";

interface Note {
  id: number;
  text: string;
  color: string;
  position: { x: number; y: number };
}

const COLORS = [
  "#FFD6A5",
  "#FDFFB6",
  "#CAFFBF",
  "#9BF6FF",
  "#A0C4FF",
  "#BDB2FF",
  "#FFC6FF",
  "#FFFFFC",
];

export default function StickyNotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const addNote = () => {
    const newNote: Note = {
      id: Date.now(),
      text: "",
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      position: {
        x: (notes.length % 3) * 180 + 20, // grid layout: 3 columns
        y: Math.floor(notes.length / 3) * 180 + 20,
      },
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id: number, newText: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const handleMouseDown = (id: number) => {
    setDraggingId(id);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setNotes((prev) =>
        prev.map((note) =>
          note.id === draggingId
            ? {
                ...note,
                position: {
                  x: Math.min(
                    Math.max(e.clientX - rect.left - 75, 0),
                    rect.width - 150
                  ),
                  y: Math.min(
                    Math.max(e.clientY - rect.top - 40, 0),
                    rect.height - 150
                  ),
                },
              }
            : note
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] border border-gray-300 rounded-md overflow-auto bg-gray-100 p-4"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Notes */}
      {notes.map((note) => (
        <div
          key={note.id}
          style={{
            backgroundColor: note.color,
            left: note.position.x,
            top: note.position.y,
          }}
          className="absolute w-40 h-40 shadow-md rounded-md p-2 cursor-move"
          onMouseDown={() => handleMouseDown(note.id)}
        >
          <button
            onClick={() => deleteNote(note.id)}
            className="absolute top-1 right-1 text-gray-700 hover:text-red-500"
          >
            <X size={16} />
          </button>
          <textarea
            className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-sm"
            placeholder="Enter Text"
            value={note.text}
            onChange={(e) => updateNote(note.id, e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ))}

      {/* Add Note Button */}
      <button
        onClick={addNote}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <Plus size={24} />
      </button>
    </div>
  );
}
