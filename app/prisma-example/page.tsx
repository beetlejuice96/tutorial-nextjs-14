import React from "react";
import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "Wake up",
    },
  });
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-7xl">PrismaExamplePage</h1>

      {tasks.map((task) => (
        <div key={task.id}>
          <p className="text-4xl">{task.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrismaExamplePage;
