import { z } from "zod";

const TaskFields = {
  content: "content",
  // completed: "completed",
};

export const taskSchema = z.object({
  [TaskFields.content]: z.string().max(255),
  // [TaskFields.completed]: z.boolean().optional(),
});
