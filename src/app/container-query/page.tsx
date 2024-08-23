import type { Metadata, ResolvingMetadata } from "next";

const title = "Container Query Page";
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
  return <h1>{title}</h1>;
}
