import Image from "next/image";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <Timeline data={getTimeline()}>
          <div className="max-w-7xl md:px-8 lg:px-10">
            <h1 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              <b>Feodor</b> Rusanov
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4 max-w-sm">
              Welcome to my personal webpage! I&apos;m a software engineer,
              Linux enthusiast
            </p>
            <h3 className="mb-4">I&apos;m using in my practice:</h3>
            <Badge variant="outline">JavaScript</Badge>
          </div>
          {
            // <div className="flex items-center justify-center">
            //   <button
            //     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            //     className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800"
            //   >
            //     {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            //   </button>
            // </div>
          }
        </Timeline>
      </div>
    </main>
  );
}

function getTimeline(): TimelineEntry[] {
  return [
    {
      title: "NOW",
      content:
        "Working at Webgears as Software Engineer and Lead Frontend Developer",
    },
    {
      title: "2021 Q4",
      content:
        "Stop working at Serenity Agency and start working at Webgears as a Frontend Developer",
    },
    {
      title: "2020 Q4",
      content: "Start working at Serenity Agency as a Frontend Developer",
    },
    {
      title: "2020 Q1",
      content: "Stop working at Unisender. Fuck Unisender.",
    },
    {
      title: "2019",
      content: "Start Working at Unisender as a Frontend Developer",
    },
    {
      title: "2017",
      content: "Graduated from the Stroganov Academy of Arts and Industry",
    },
    {
      title: "2014",
      content:
        "Start freelancing as a web developer, working with HTML, CSS, and JavaScript",
    },
    {
      title: "2013",
      content: "Enrolled at the Stroganov Academy of Arts and Industry",
    },
    {
      title: "2008",
      content: "Create my first website",
    },
    {
      title: "2002",
      content: "Went to school in Moscow, Russia",
    },
    {
      title: "2001",
      content: "Became familiar with the Adobe Photoshop",
    },
    {
      title: "1996",
      content: <div>Born in Russia</div>,
    },
  ];
}
