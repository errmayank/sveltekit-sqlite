import { json, error, type RequestHandler } from "@sveltejs/kit";

import prisma from "$lib/prisma";

export const GET = (async () => {
  const users = await prisma.user.findMany();

  return json({
    users,
  });
}) satisfies RequestHandler;
