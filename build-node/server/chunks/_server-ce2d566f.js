import { t as traductions } from './traductions-90478fe2.js';
import './index-36410280.js';

function GET(req) {
  let { langCode } = req.params;
  return new Response(JSON.stringify(traductions[langCode]), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function POST(req) {
  let { langCode } = req.params;
  let { request } = req;
  let { name } = await request.json();
  return new Response(JSON.stringify(traductions[langCode]["intro"] + " " + name), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export { GET, POST };
//# sourceMappingURL=_server-ce2d566f.js.map
