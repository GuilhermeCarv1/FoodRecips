import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between gray-100 items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Digite os itens..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favoritos"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
