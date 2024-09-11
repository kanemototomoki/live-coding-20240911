import type { Metadata, ResolvingMetadata } from "next";

const title = "Media Query Page";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;
  const parentTitle = parentMetadata.title?.absolute;

  return {
    title: `${title} - ${parentTitle}`,
  };
}

export default function Page() {
  return (
    <main className="main">
      <div className="fv">
        <div className="wrapper">
          <h1 className="title">Bolt Theme</h1>
          <p className="sub-title">FREE BOOTSTRAP THEME</p>
        </div>
      </div>
      <div className="what-we-can-do">
        <div className="wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/iphone.png" alt="" />
          <div className="content">
            <h2 className="title">WHAT WE CAN DO?</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
