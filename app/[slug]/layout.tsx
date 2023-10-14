export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="prose">
      {children}
    </article>
  )
}