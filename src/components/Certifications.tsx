import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Complete Machine Learning Course with Python",
      platform: "Udemy (Geeks for Geeks)",
      date: "Aug 2024",
      description: "Built a strong foundation in Python using libraries like NumPy, Pandas, and Matplotlib. Covered key topics in data analysis and machine learning (including neural networks). Gained practical experience through web scraping, Tableau dashboards, and real-world projects."
    },
    {
      title: "Social Networks",
      platform: "NPTEL",
      date: "Apr 2024",
      description: "Completed the 'Social Networks' course by NPTEL, gaining an in-depth understanding of various network structures. Applied analytical tools from graph theory, sociology, and game theory to interpret complex networks. Benefited from a flexible online learning environment, allowing for self-paced study suitable for both students and professionals."
    },
    {
      title: "Generative AI with Large Language Models",
      platform: "Coursera",
      date: "Mar 2024",
      description: "Studied transformer architecture and the fundamentals of large language models. Gained hands-on experience in fine-tuning models and effective prompt engineering. Developed practical NLP applications such as text generation, summarization, and chatbots. Explored ethical considerations and emerging use cases in generative AI."
    }
  ];

  const achievements = [
    {
      title: "Solved 300+ Problems on various coding platforms",
      date: "Jan 2025",
      description: "Solving DSA problems and regular participating at Leetcode and GeeksForGeeks."
    },
    {
      title: "Active Participation in Multiple Contests",
      date: "Jan 2025",
      description: "Competing in Various Coding and Tech Contests to Enhance Skills and Gain Experience."
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">Certifications & Achievements</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-portfolio-navy">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-portfolio-blue" />
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mt-1">{cert.platform}</p>
                  <p className="text-sm text-gray-600 mt-2">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-portfolio-navy">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-portfolio-blue" />
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {achievement.date}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
