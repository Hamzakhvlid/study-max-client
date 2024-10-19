import CategoriesCard from "../../atoms/categorycard/Card";

export default function Categories() {
  return (
    <section className="py-10 px-10">
      <div className="flex justify-end items-center gap-10 cursor-pointer">
        <h1 className="text-base font-poppins text-linkColor">
          Explore all Categories{" "}
        </h1>
        <img src="/images/tail-right.svg" alt="" />
      </div>
      <div className="grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-10 mt-10">
        <CategoriesCard title="Chemistry" />
        <CategoriesCard title="Applied Physics" />
        <CategoriesCard title="Finace" />
        <CategoriesCard title="Math" />
        <CategoriesCard title="Biology" />
        <CategoriesCard title="Arts" />
      </div>
    </section>
  );
}
