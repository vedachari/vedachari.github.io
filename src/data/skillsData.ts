export interface SkillType {
  name: string;
  skills: string[];
}

export const skills: SkillType[] = [
  {
    name: "Languages",
    skills: ["AutoCAD", "C", "C++", "CSS", "Go", "Java", "JavaScript", "MATLAB", "OCaml", "Python", "x86 Assembly"]
  },
  {
    name: "Developer Tools",
    skills: ["AWS", "Docker","Grafana",  "macOS", "Postman", "Prometheus", "Visual Studio",  "Windows"]
  },
  {
    name: "Technologies/Frameworks",
    skills: ["Git", "Node.js", "React" ]
  },
];
