"use client";

import { updateTask } from "@/utils/task-actions/actions";
import { initialState } from "@/utils/task-actions/state";
import { Task } from "@prisma/client";
import { FC, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface Props {
  task: Task;
}

const SubmitBtn: FC = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn" type="submit" disabled={pending}>
      save
    </button>
  );
};

const EditTaskForm: FC<Props> = ({ task }) => {
  const { id, content, completed } = task;
  const [state, formAction] = useFormState(updateTask, initialState);
  const inputErrStyle = "input-error";

  //FIXME: this modal is closed always. i need close it when the task is updated but not when the body have an error
  // useEffect(() => {
  //   //close modal
  //   if (state.data.validatedData.content !== content) {
  //     const dialog = document.getElementById(
  //       `edit-task-${id}`
  //     ) as HTMLDialogElement | null;
  //     dialog?.close();
  //   }
  // }, [state.data.validatedData]);

  return (
    <>
      <button
        className="btn btn-info"
        onClick={() =>
          (
            document.getElementById(
              `edit-task-${task.id}`
            ) as HTMLDialogElement | null
          )?.showModal?.()
        }
      >
        Edit
      </button>
      <dialog id={`edit-task-${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Task</h3>
          <div className="modal-action justify-center ">
            <form
              method="dialog"
              className="flex  flex-col gap-2"
              action={formAction}
            >
              <input type="hidden" name="id" value={id} />
              <label className="form-control">
                <input
                  type="text"
                  name="content"
                  className={`input input-bordered ${
                    state.err?.content ? inputErrStyle : ""
                  }`}
                  defaultValue={content}
                />
                {state.err?.content && (
                  <div className="label">
                    <span className="label-text-alt">{state.err.content}</span>
                  </div>
                )}
              </label>

              <SubmitBtn />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditTaskForm;
