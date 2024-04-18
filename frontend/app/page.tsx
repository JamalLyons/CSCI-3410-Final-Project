import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="bg-zinc-900 text-zinc-100">
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">
          Search a dog
        </h1>
        <SearchBar />
      </div>
    </main>
  );
}
