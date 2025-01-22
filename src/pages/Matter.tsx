import CardMatter from "../components/card/CardMatter"
export default function Matter() {
  return (
    <section className="flex flex-col gap-4 mt-20 mb-4 w-11/12">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
            <CardMatter />
        </ul>
    </section>
  )
}
