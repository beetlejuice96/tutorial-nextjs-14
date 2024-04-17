"use client";

import { deleteTask } from "@/utils/task-actions/actions";

interface Props {
  id: string;
}

const SubmitButton = () => {
  return <button className="btn btn-danger">Delete</button>;
};

export const DeleteTaskForm: React.FC<Props> = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-danger">Delete</button>
    </form>
  );
};
