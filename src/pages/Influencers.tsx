import CardInfluencers from "../components/card/CardInfluencers";

export default function Influencers() {
  return (
    <>
      <section>
        <h1>INFLUENCERS DE LOS CONTENIDOS</h1>
      </section>
      <section>
        <div className="grid grid-cols-4 gap-4 p-4">
            <CardInfluencers />
            <CardInfluencers />
            <CardInfluencers />
            <CardInfluencers />
            <CardInfluencers />
            <CardInfluencers />
            <CardInfluencers />
        </div>
      </section>
    </>
  );
}
