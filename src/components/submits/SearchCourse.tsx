export default function SearchCourse() {
  return (
    <section className="w-10/12 mx-auto mt-4 md:mt-8 bg-white py-4 px-8 rounded-xl shadow-md">
      <search className="flex items-center justify-center gap-4  flex-col  md:flex-row">
        <input
          type="text"
          placeholder="Buscar cursos"
          className="w-full p-2 border border-gray-300 rounded-md focus-visible:border-[#ff3131] focus-visible:ring-2 focus-visible:ring-[#ff3131] focus-visible:ring-opacity-50 outline-none"
        />
        <select className="w-full p-2 border border-gray-300 rounded-md focus-visible:border-[#ff3131] focus-visible:ring-2 focus-visible:ring-[#ff3131] focus-visible:ring-opacity-50 outline-none">
          <option value="todos">Todos los cursos</option>
          <option value="matematica">Matematica</option>
          <option value="algebra">Algebra</option>
          <option value="fisica">Fisica</option>
          <option value="quimica">Quimica</option>
        </select>
        <select className="w-full p-2 border border-gray-300 rounded-md focus-visible:border-[#ff3131] focus-visible:ring-2 focus-visible:ring-[#ff3131] focus-visible:ring-opacity-50 outline-none">
          <option value="todos">Todos los profes</option>
          <option value="algebra_para_todos">Algebra para todos</option>
          <option value="el_traductor_de_ingenieria">El traductor de ingenieria</option>
          <option value="el_profe_alex">El profe alex</option>
        </select>
        <button className="w-full py-2 px-4 bg-[#ff3131] text-white rounded-md flex sm:w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 21 21"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8.5" cy="8.5" r="5" />
              <path d="M17.571 17.5L12 12" />
            </g>
          </svg>
          Buscar
        </button>
      </search>
    </section>
  );
}
