export default function DynamicPage({ params }: { params: { slug: string } }) {
  return <p>This is dynamic page: {params.slug}</p>;
}
