import CodeInterpreter from "@e2b/code-interpreter";

export async function POST(req: Request) {
  const { code } = await req.json();
  const interpreter = await CodeInterpreter.create();
  const result = await interpreter.notebook.execCell(code);
  return Response.json(result.toJSON());
}
