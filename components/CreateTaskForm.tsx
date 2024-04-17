"use client";

import { createTask } from "@/utils/task-actions/actions";
import { initialState } from "@/utils/task-actions/state";
import { useFormState } from "react-dom";

const CreateTaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);
  return (
    <form action={formAction}>
      <div className="join w-full ">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="add task"
          name="content"
        />
        <button className="btn btn-primary join-item" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default CreateTaskForm;
