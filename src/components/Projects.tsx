import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Recommendation System",
      description: "Built a Restaurant Recommendation System using K-Means clustering for personalized suggestions. Preprocessed data by managing missing values, normalizing, and converting ratings for accuracy. Applied data visualization to analyze user preferences, restaurant trends, and season patterns.",
      duration: "Sept 2024-Nov 2024",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Git"],
      github: "https://github.com/Kulwantolkha/Flood-Management-"
    },
    {
      title: "Titanic Survival Prediction",
      description: "Built a machine learning model to analyze survival probabilities in the Titanic disaster. Performed exploratory data analysis identifying correlations among data sets, age, and survivor quality. Configured feature engineering and applied supervised learning models to make accurate predictions. Debugged and optimized model performance through iterative testing.",
      duration: "Jun 2024-Jul 2024",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      github: "https://github.com/Kulwantolkha/Titanic-Survival-Project"
    },
    {
      title: "Plastic Waste Management Website",
      description: "A website dedicated to raising awareness about plastic waste management. Built using HTML, CSS, and JavaScript for a responsive and user-friendly design. Offers informative content on the environmental impact of plastic pollution. Provides practical solutions and tips for plastic waste reduction and recycling. Promotes sustainable alternatives and encourages user engagement in environmental issues.",
      duration: "Jan 2024-Feb 2024",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Kulwantolkha/Flood-Management-"
    },
    {
      title: "Chatbot using NLP",
      description: "Developed an intelligent chatbot using Natural Language Processing to provide automated responses to user queries. Implemented sentiment analysis to understand user emotions and adjust responses accordingly. Integrated with various APIs to fetch real-time data for providing accurate information.",
      duration: "Mar 2024-Apr 2024",
      techStack: ["Python", "NLTK", "TensorFlow", "API Integration"],
      github: "https://github.com/Kulwantolkha/Intelligent-Chatbot-Using-ML-and-Seq2Seq-Models"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-blue">{project.title}</CardTitle>
                <CardDescription>{project.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-50 text-portfolio-blue text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" size="sm" className="mr-2">
                  <Github className="h-4 w-4 mr-2" />
                  <span>Code</span>
                </Button>
                <Button size="sm" className="bg-portfolio-blue hover:bg-portfolio-lightblue">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span>Demo</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
