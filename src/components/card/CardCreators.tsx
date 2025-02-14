import { creators } from "../../mock/creators";

export default function CardCreators({ id }: { id: string }) {
  // const creator = creators.find((creator) => creator.id === id);
  // if (!creator) {
  //   return <div>Creator not found</div>;
  // }
  const creator = creators[0];
  const { name, description, avatar, history, achievements, contributions } =
    creator;

  return (
    <>
      <div className="text-center">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
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
          <h2 className="text-lg font-semibold text-gray-800">
            Contribuciones
          </h2>
          <p className="text-gray-700">{contributions}</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mt-4">
          Redes Sociales
        </h2>
        <div className="flex gap-4 mt-2">
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="youtube"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/twitch.png"
              alt="twitch"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
              alt="instagram"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/facebook.png"
              alt="facebook"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="github"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/medium-monogram.png"
              alt="medium"
            />
          </a>
        </div>
      </div>
    </>
  );
}
