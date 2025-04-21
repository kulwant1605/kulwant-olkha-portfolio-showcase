import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      duration: "Aug 2022 - Present",
      location: "Punjab, India",
      details: "CGPA: 7.67",
    },
    {
      institution: "Gyanodaya Public School",
      degree: "Higher Secondary Education",
      duration: "Apr 2019 - Mar 2021",
      location: "Sikar, Rajasthan",
      details: "Percentage: 76.80%",
    },
    {
      institution: "Tagore Public School",
      degree: "Secondary Education",
      duration: "Apr 2017 - Mar 2019",
      location: "Gudha Gorji, Rajasthan",
      details: "Percentage: 91.80%",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">Education</h2>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-portfolio-blue" />
                    <CardTitle>{edu.institution}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">{edu.location}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-600 mt-1">{edu.details}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 md:mt-0">{edu.duration}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
