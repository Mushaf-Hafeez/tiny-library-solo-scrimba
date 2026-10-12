import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="pb-3">
        <div className="max-w-sm mx-auto space-y-2">
          <p className="uppercase text-sm">ways to reach us</p>
          <h1 className="text-5xl font-bold">Contact</h1>
          <ul className="list-disc space-y-2 text-md ps-4 py-4">
            <li>Book suggestions: Tell us what we should add to the shelf.</li>
            <li>
              Corrections: Spotted an error? Let us know so we can fix it.
            </li>
            <li>
              Careers: Interested in joining Tiny Library? Send a short note and
              we’ll get back to you.
            </li>
          </ul>
          <p className="text-md">
            Email: hello@tinylibrary.example
            <br />
            <br />
            We’re a small team, so we don’t list a phone number—email is best.
          </p>
        </div>
      </section>

      <center>
        <Image
          src={"/logo.png"}
          alt="Error rendering the logo"
          height={200}
          width={200}
        />
      </center>
    </main>
  );
};

export default page;
