import NavPanel from "./Components/NavPanel";
import MainPanel from "./Components/MainPanel";

export default function Account() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between pt-20 pl-5 pr-5 dark:bg-neutral-900">
      <div className="inline-flex gap-10">
        <NavPanel />
        <MainPanel />
      </div>
    </main>
  );
}
