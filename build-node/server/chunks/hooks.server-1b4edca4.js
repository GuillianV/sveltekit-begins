import './index-39e97e00.js';
import { d as db } from './index5-21780dd4.js';
import '@prisma/client';

async function handle({ event, resolve }) {
  const session = event.cookies.get("session");
  if (!session) {
    return await resolve(event);
  }
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true, role: true }
  });
  if (user) {
    event.locals.user = {
      name: user.username,
      role: user.role.name
    };
  }
  return await resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-1b4edca4.js.map
