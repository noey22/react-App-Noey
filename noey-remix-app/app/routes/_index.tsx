import type { MetaFunction } from "@remix-run/node";
import MyContact from "./myContact";

export const meta: MetaFunction = () => {
  return [
    { title: "noey Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <hr className="mt-4"/>
      <h1 className="text-3xl mt-4"> My Profile</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>Author: Siriyakorn Songsalee</li>
        <li>Class: Information Technology</li>
        <li>E-mail: siriyakorn.son@rmutto.ac.th</li>
        </ul>
        <hr />
        < MyContact />

    </div>
  );
}
