interface InfoUserProps {
    avatar: string;
    nombre: string;
}
export default function InfoUser({avatar, nombre}: InfoUserProps) {
  return (
    <div className="flex justify-center items-center gap-2">
        <img className="rounded-full size-4" src={avatar} alt={`Avatar de ${nombre}`} />
        <span>
            <p className=" font-medium">{nombre}</p>
        </span>
    </div>
  )
}
