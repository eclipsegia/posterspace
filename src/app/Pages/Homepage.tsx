import Image, { type StaticImageData } from "next/image";

// Stap 1 voor een echte posterafbeelding: importeer het bestand uit de Posters-map.
import sombrPoster from "../Posters/voorbeeld poster sombr.jpg";
import f1poster from "../Posters/voorbeeld poster f1.jpg";
import kpopPoster from "../Posters/voorbeeld poster olivia.jpg";
import conanposter from "../Posters/voorbeeld poster conan.jpg";

type Poster = {
  title: string;
  creator: string;
  category: string;
  palette: string;
  image?: StaticImageData;
  status?: string;
};

// Deze lijst stelt de posters voor die van de ingelogde gebruiker zouden zijn.
const ownPosters: Poster[] = [

  {
    title: "Sombr",
    creator: "Gianna",
    category: "Music artis",
    palette: "from-[#111827] via-[#2563eb] to-[#f97316]",
    // Stap 2 voor een echte posterafbeelding: koppel de import aan deze poster.
    image: sombrPoster,
    status: "Concept",
  },
  {
    title: "Mclaren MCL39",
    creator: "Gianna",
    category: "Formule 1",
    palette: "from-[#f8fafc] via-[#facc15] to-[#ef4444]",
    status: "Gepubliceerd",
    image: f1poster,
  },
  {
    title: "Olivia Rodrigo",
    creator: "Gianna",
    category: "K-pop",
    palette: "from-[#14532d] via-[#86efac] to-[#f7fee7]",
    status: "Prive",
    image: kpopPoster,
  },
];

// Deze lijst stelt voorgestelde posters van andere makers voor.
const suggestedPosters: Poster[] = [
  {
    title: "Jazz After Dark",
    creator: "Mila Vos",
    category: "Music",
    palette: "from-[#0f172a] via-[#7c2d12] to-[#fbbf24]",
    image: conanposter,
  },
  {
    title: "Future Forms",
    creator: "Noah Klein",
    category: "Exhibition",
    palette: "from-[#e0f2fe] via-[#38bdf8] to-[#312e81]",
  },
  {
    title: "Soft Signals",
    creator: "Aya Chen",
    category: "Editorial",
    palette: "from-[#fff7ed] via-[#fb7185] to-[#4c1d95]",
  },
  {
    title: "City Layers",
    creator: "Sam Reed",
    category: "Architecture",
    palette: "from-[#1f2937] via-[#d1d5db] to-[#f59e0b]",
  },
];

export default function Home() {
  return (
    // Dit is de achtergrond van de hele homepage.
    <main className="min-h-screen bg-[#f4f1ea] text-[#171412]">
      {/* Deze wrapper houdt de content op grote schermen netjes gecentreerd. */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-6 sm:px-8 lg:px-12">
        {/* De navigatie laat de merknaam en simpele acties bovenaan zien. */}
        <header className="flex items-center justify-between border-b border-[#171412]/10 pb-5">
          <a href="#" className="text-xl font-black tracking-[0.18em]">
            POSTERSPACE
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#5f574f] md:flex">
            <a href="#">My posters</a>
            <a href="#">Favorites</a>
          </nav>
          <a
            href="#My-posters"
            className="rounded-full bg-[#171412] px-5 py-2.5 text-sm font-bold text-white"
          >
            Add poster
          </a>
        </header>

        {/* De hero introduceert wat je op de homepage kunt doen. */}
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#7b6f63]">
              Poster gallery
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl">
              Add, Save & Share Your Posters
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f574f]">
              Share your posters and get inspired by others. Create your own poster collection and discover new designs every day.
            </p>
          </div>

          {/* Deze grote poster-preview geeft meteen visueel aan waar de site over gaat. */}
          <article className="relative min-h-[430px] overflow-hidden rounded-lg bg-[#171412] p-6 text-white shadow-2xl shadow-[#171412]/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f97316_0,transparent_28%),radial-gradient(circle_at_82%_76%,#38bdf8_0,transparent_30%)] opacity-80" />
            <div className="relative flex h-full flex-col justify-between border border-white/25 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.35em]">
                Placeholder
              </p>
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
                  LOGO
                </p>
                <h2 className="max-w-xs text-6xl font-black leading-[0.85]">
                  
                </h2>
              </div>
            </div>
          </article>
        </section>

        {/* Deze sectie toont de posters van de gebruiker. */}
        <section id="mijn-posters" className="flex flex-col gap-5">
          <SectionHeading
            title="Your posters"
            description="A collection of posters you've created."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {ownPosters.map((poster) => (
              <PosterCard key={poster.title} poster={poster} />
            ))}
          </div>
        </section>

        {/* Deze sectie toont posters van andere mensen als inspiratie. */}
        <section className="flex flex-col gap-5 pb-12">
          <SectionHeading
            title="Suggested for you"
            description="Posters from other creators that match your style."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {suggestedPosters.map((poster) => (
              <PosterCard key={poster.title} poster={poster} compact />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    // Deze kop wordt hergebruikt boven elke poster-sectie.
    <div className="flex flex-col justify-between gap-2 border-t border-[#171412]/10 pt-5 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-2xl font-black">{title}</h2>
        <p className="mt-1 text-sm text-[#6d6258]">{description}</p>
      </div>
      <a href="#" className="text-sm font-bold text-[#171412]">
        View all

        
      </a>
    </div>
  );
}

function PosterCard({
  poster,
  compact = false,
}: {
  poster: Poster;
  compact?: boolean;
}) {
  return (
    // Deze card combineert een posterbeeld met metadata zoals titel en maker.
    <article className="group">
      {/* Dit vlak is het tijdelijke posterbeeld; later kun je dit vervangen door echte uploads. */}
      <div
        className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${poster.palette} ${
          compact ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        {/* Als deze poster een image heeft, toont Next/Image de echte afbeelding. */}
        {poster.image ? (
          <Image
            src={poster.image}
            alt={`Poster voor ${poster.title}`}
            fill
            className="object-cover"
            sizes={
              compact
                ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                : "(min-width: 768px) 33vw, 100vw"
            }
          />
        ) : null}

        {/* Als er nog geen image is, blijft de tijdelijke gradient-poster zichtbaar. */}
        {!poster.image ? (
          <>
            <div className="absolute inset-4 border border-white/55" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between text-xs font-bold uppercase tracking-[0.22em] text-white/85">
              <span>{poster.category}</span>
              <span>2026</span>
            </div>
            <div className="absolute inset-x-6 bottom-6">
              <h3 className="max-w-[12rem] text-4xl font-black leading-[0.9] text-white drop-shadow-sm">
                {poster.title}
              </h3>
            </div>
          </>
        ) : null}
      </div>

      {/* Dit deel laat informatie onder de poster zien. */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold">{poster.title}</h3>
          <p className="text-sm text-[#6d6258]">By {poster.creator}</p>
        </div>
        {poster.status ? (
          <span className="rounded-full border border-[#171412]/15 px-3 py-1 text-xs font-bold text-[#5f574f]">
            {poster.status}
          </span>
        ) : null}
      </div>
    </article>
  );
}
