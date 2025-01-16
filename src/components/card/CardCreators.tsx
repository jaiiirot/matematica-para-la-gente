import { creators } from "../../mock/creators";

export default function CardCreators({ id }: { id: string }) {
  const creator = creators.find((creator) => creator.id === id);
  if (!creator) {
    return <div>Creator not found</div>;
  }
  const { name, description, avatar, history, achievements, contributions } =
    creator;

  return (
    <div>
      <div className="text-center">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Historia</h2>
        <p className="text-gray-700 mt-2">{history}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Logros</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Contribuciones</h2>
        <p className="text-gray-700">{contributions}</p>
      </div>
    </div>
  );
}
