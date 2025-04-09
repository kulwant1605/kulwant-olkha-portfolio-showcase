
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-6 text-lg">
            I am a third-year Computer Science Engineering student with a passion for problem-solving and software development. My technical expertise includes Data Structures and Algorithms, core programming languages (C, C++, Python, Java), and various developer tools.
          </p>
          <p className="mb-6 text-lg">
            I'm experienced in developing applications in multiple domains including machine learning, web development, and data analysis. My projects showcase my ability to apply theoretical knowledge to practical solutions.
          </p>
          <p className="text-lg">
            In addition to technical skills, I pride myself on being an efficient learner, adaptive to new technologies, and a team player who can collaborate effectively in diverse environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-portfolio-blue mr-3" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-600">
              B.Tech in Computer Science & Engineering from Lovely Professional University with a CGPA of 7.67
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-portfolio-blue mr-3" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <p className="text-gray-600">
              Worked on various projects including a Restaurant Recommendation System, Titanic Survival Prediction, and a Chatbot using NLP
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-portfolio-blue mr-3" />
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            <p className="text-gray-600">
              Solved 200+ problems on coding platforms, actively participated in contests, and earned certificates in Machine Learning and NLP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
