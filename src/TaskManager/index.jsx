import React, { useState } from "react";

const TaskManager = () => {
  const [task, setTask] = useState([]);
  const [dragTask, setDragTask] = useState({});
  const handleSubmit = (e) => {
    const myTask = e.get("task");
    if (myTask.trim("").length === 0) return;
    console.log(myTask);
    setTask((prev) => [
      ...prev,
      {
        task: myTask,
        status: "todo",
        id: Date.now(),
      },
    ]);
  };
  console.log(task);
  const handleDrag = (e, task) => {
    console.log(e, task);
    setDragTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragNDrop = (status) => {
    let copyTask = [...task];
    copyTask = copyTask.map((item) => {
      if (item.id === dragTask.id) {
        item.status = status;
      }
      return item;
    });
    setTask(copyTask);
    setDragTask({})
  };

  const handleOnDrop = (e) => {
    const status = e.target.getAttribute("data-status");
    if (status === "todo") {
      handleDragNDrop("todo");
    } else if (status === "doing") {
      handleDragNDrop("doing");
    } else if (status === "done") {
      handleDragNDrop("done");
    }
  };
  return (
    <div>
      <h1>Task Manager</h1>
      <form action={handleSubmit}>
        <input type="text" className="border" name="task" />
        <button className="border p-1 ml-4 cursor-pointer">Add</button>
      </form>
      <div className="contain  gap-4 w-full grid grid-cols-3 mt-4">
        <div
          className="border p-2"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          data-status="todo"
        >
          <h3 className="bg-yellow-500 ">To do</h3>
          <div className="grid gap-4 p-2 ">
            {task.map((item) => {
              return (
                item.status === "todo" && (
                  <div
                    draggable
                    onDrag={(e) => handleDrag(e, item)}
                    key={item.id}
                    className="flex justify-around border p-1"
                  >
                    {item.task}
                    <div className="cursor-pointer bg-gray-200 p-1">Edit</div>
                    <div className="cursor-pointer bg-gray-400 p-1">Delete</div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div
          className="border p-2"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          data-status="doing"
        >
          <h3 className="bg-green-500 ">Doing</h3>
          <div className="grid gap-4 p-2">
            {task.map((item) => {
              return (
                item.status === "doing" && (
                  <div
                    draggable
                    onDrag={(e) => handleDrag(e, item)}
                    key={item.id}
                    className="flex justify-around  border p-1"
                  >
                    {item.task}
                    <div className="cursor-pointer bg-gray-200 p-1">Edit</div>
                    <div className="cursor-pointer bg-gray-400 p-1">Delete</div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div
          className="border p-2"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          data-status="done"
        >
          <h3 className="bg-yellow-500 ">Done</h3>
          <div
            className="grid gap-4 p-2"
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
          >
            {task.map((item) => {
              return (
                item.status === "done" && (
                  <div
                    draggable
                    onDrag={(e) => handleDrag(e, item)}
                    key={item.id}
                    className="flex justify-around  border p-1"
                  >
                    {item.task}
                    <div className="cursor-pointer bg-gray-200 p-1">Edit</div>
                    <div className="cursor-pointer bg-gray-400 p-1">Delete</div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
