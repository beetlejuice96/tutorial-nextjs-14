import CreateTaskForm from "@/components/CreateTaskForm";
import { DeleteTaskForm } from "@/components/DeleteTaskForm";
import EditTaskForm from "@/components/EditTaskForm";
import { getALLTasks } from "@/utils/task-actions/actions";
import React from "react";

const TaksPage = async () => {
  const tasks = await getALLTasks();

  return (
    <div className="max-w-lg">
      <CreateTaskForm />
      {tasks.map((task) => (
        <div
          key={task.id}
          className="card flex-row justify-between items-center shadow-lg p-4 m-4 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <p className="text-lg font-semibold text-gray-800">{task.content}</p>
          <div className="flex gap-2">
            <DeleteTaskForm id={task.id} key={task.id} />
            <EditTaskForm task={task} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaksPage;
