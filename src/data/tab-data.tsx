interface TabData {
  title: string;
  id: string;
  content: any;
}

export const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Go</li>
        <li>Nodejs</li>
        <li>Nextjs</li>
        <li>Python</li>
        <li>Javascript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>NMK</li>
        <li>King mongkut</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud</li>
      </ul>
    ),
  },
];
