import { json, error, type RequestHandler } from "@sveltejs/kit";

import prisma from "$lib/prisma";

export const GET = (async ({ params }) => {
  const userID = Number(params.user_id);
  const posts = await prisma.post.findMany({
    where: {
      authorID: userID,
    },
  });

  return json({
    posts,
  });
}) satisfies RequestHandler;
