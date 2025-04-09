
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Braces, Code, Database, Globe, Server, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-portfolio-blue" />,
      skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Developer Tools",
      icon: <Braces className="h-6 w-6 text-portfolio-blue" />,
      skills: ["Git", "GitHub", "Oracle SQL", "VS Code"],
    },
    {
      title: "Data Science & Machine Learning",
      icon: <Database className="h-6 w-6 text-portfolio-blue" />,
      skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Tableau"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6 text-portfolio-blue" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    },
    {
      title: "Areas of Interest",
      icon: <Server className="h-6 w-6 text-portfolio-blue" />,
      skills: ["Competitive Programming", "Machine Learning", "Data Structures & Algorithms", "Web Development"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6 text-portfolio-blue" />,
      skills: ["Problem-Solving", "Team Player", "Project Management", "Adaptability", "Efficient Learner"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
