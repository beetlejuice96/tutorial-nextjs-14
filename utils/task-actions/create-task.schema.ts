import { z } from "zod";

const TaskFields = {
  content: "content",
};

export const taskSchema = z.object({
  [TaskFields.content]: z.string().max(255),
});
