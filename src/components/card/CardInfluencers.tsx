import Instagram from "../icons/Instagram";
import Linkedin from "../icons/Linkedin";
import Tiktok from "../icons/Tiktok";
import Twich from "../icons/Twitch";
import Youtube from "../icons/Youtube";

export default function CardInfluencers() {
  return (
    <article className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md items-center">
      <img
        src="https://yt3.ggpht.com/0wKflpV0DaoxzPpYO7qqmu8adavadBHZDpoIRElzwUdsswAmJ0Zk-jI0IrEzisA_48L0PlrGDQ=s48-c-k-c0x00ffffff-no-rj"
        alt=""
        className="size-16 rounded-full object-cover"
      />
      <div>
        <h4 className="font-bold">Aprede a Programar</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          consequuntur quam nesciunt quis itaque mollitia eveniet, eius corrupti
          ad dolor, nisi blanditiis dolore autem facilis sequi! Alias nostrum
          quia perferendis!
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a href="">
          <Twich h="16" />
        </a>
        <a href="">
          <Youtube h="16" />
        </a>
        <a href="">
          <Instagram h="16" />
        </a>
        <a href="">
          <Tiktok h="16" />
        </a>
        <a href="">
          <Linkedin h="16" />
        </a>
      </div>
    </article>
  );
}
