import './index-39e97e00.js';

function GET(req) {
  req.params;
  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function POST(req) {
  req.params;
  let { request } = req;
  await request.json();
  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export { GET, POST };
//# sourceMappingURL=_server-a9dd0d10.js.map
