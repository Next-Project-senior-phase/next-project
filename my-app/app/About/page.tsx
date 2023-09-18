
import Services from "./Components/Services";
import OurStory from "./Components/OurStory";
import Stats from "./Components/Stats";
import Team from "./Components/Team";


export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pl-5 pr-5 dark:bg-neutral-900">
      <OurStory />
      <Stats />
      <Team />
      <Services />
    </main>
  );
}
