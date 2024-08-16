"use client";

export default function Home() {
  async function handleClick() {
    const res = await fetch("/api/e2b", {
      method: "POST",
      body: JSON.stringify({ code: "213*21389" }),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
