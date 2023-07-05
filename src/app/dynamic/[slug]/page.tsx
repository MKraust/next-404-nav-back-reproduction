import {notFound} from "next/navigation";

export default function DynamicPage({ params }: { params: { slug: string } }) {
  if (params.slug === '404') {
    notFound()
  }

  return <p>This is dynamic page: {params.slug}</p>;
}
