"use server";

import prisma from "@/utils/db";
import { Err, State, reducer } from "./state";
import { taskSchema } from "./create-task.schema";
import { ZodError } from "zod";
import { revalidatePath } from "next/cache";

export const createTask = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  if (prevState.showNotification) {
    return reducer(prevState, {
      type: "SET_SHOW_NOTIFICATION",
      payload: !prevState.showNotification,
    });
  }
  const allData = Object.fromEntries(formData.entries());
  const validatedData = taskSchema.safeParse(allData);

  if (!validatedData.success) {
    const zodError = validatedData.error as ZodError;
    const errMap = zodError.flatten().fieldErrors;
    const err: Err = {
      content: errMap.content?.map((e) => e).join(", ") || "",
    };
    return reducer(prevState, {
      type: "SET_ERR",
      payload: err,
    });
  }

  try {
    await prisma.task.create({
      data: {
        content: validatedData.data.content,
      },
    });
    revalidatePath("/tasks");
    return reducer(prevState, {
      type: "RESET_FORM",
    });
  } catch (error) {
    return reducer(prevState, {
      type: "SET_ERR",
      payload: {
        content: "An error occurred while creating the task",
      },
    });
  }
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

export const updateTask = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  if (prevState.showNotification) {
    return reducer(prevState, {
      type: "SET_SHOW_NOTIFICATION",
      payload: !prevState.showNotification,
    });
  }
  const allData = Object.fromEntries(formData.entries());
  const validatedData = taskSchema.safeParse(allData);

  if (!validatedData.success) {
    const zodError = validatedData.error as ZodError;
    const errMap = zodError.flatten().fieldErrors;
    const err: Err = {
      content: errMap.content?.map((e) => e).join(", ") || "",
    };
    return reducer(prevState, {
      type: "SET_ERR",
      payload: err,
    });
  }

  const id = formData.get("id") as string;
  try {
    await prisma.task.update({
      where: { id },
      data: {
        content: validatedData.data.content,
      },
    });
    revalidatePath("/tasks");
    return reducer(prevState, {
      type: "RESET_FORM",
    });
  } catch (error) {
    return reducer(prevState, {
      type: "SET_ERR",
      payload: {
        content: "An error occurred while updating the task",
      },
    });
  }
};

export const getTask = async (id: string) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const getALLTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
