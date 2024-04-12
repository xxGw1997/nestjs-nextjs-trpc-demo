import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({ name: "ywx" });

  return <main>{response}</main>;
}
