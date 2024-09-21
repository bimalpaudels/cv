import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="font-semibold pt-6">Bimal Paudel</h1>
        <p>
          I am a software developer based in Berlin, originally from Nepal. I
          like to <Link href="/learn">learn</Link> different tech stacks, new or
          old, to constantly expand my skillset. My{" "}
          <Link href="/about">about</Link> page goes into more detail regarding
          my background and professional journey.
        </p>
        <p>
          When I am not studying or writing code, my{" "}
          <Link href="/interests">hobbies and interests</Link> involve cycling
          around this wonderful city, watching movies and sports at home or
          sharpening my chess skills (it is not going well).
        </p>
        <p>
          Thank you for visiting this page. Feel free to contact me with any of
          the provided details.
        </p>
      </div>
    </>
  );
}
