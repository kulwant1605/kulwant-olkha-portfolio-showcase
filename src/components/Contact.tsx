import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would send this data to a server
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-navy">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me for any opportunities, collaborations, or just to say hi!
            </p>
            
            <div className="space-y-4">
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <Mail className="h-5 w-5 text-portfolio-blue mr-3" />
                  <div>
                    <CardTitle className="text-sm font-medium">Email</CardTitle>
                    <CardDescription className="text-sm">
                      <a href="mailto:kulwantolkha@gmail.com" className="text-portfolio-blue hover:underline">
                        kulwantolkha@gmail.com
                      </a>
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <Phone className="h-5 w-5 text-portfolio-blue mr-3" />
                  <div>
                    <CardTitle className="text-sm font-medium">Phone</CardTitle>
                    <CardDescription className="text-sm">+91 7727846777</CardDescription>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <Linkedin className="h-5 w-5 text-portfolio-blue mr-3" />
                  <div>
                    <CardTitle className="text-sm font-medium">LinkedIn</CardTitle>
                    <CardDescription className="text-sm">
                      <a 
                        href="https://www.linkedin.com/in/kulwantolkha/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-blue hover:underline"
                      >
                        linkedin.com/in/kulwantolkha
                      </a>
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <Github className="h-5 w-5 text-portfolio-blue mr-3" />
                  <div>
                    <CardTitle className="text-sm font-medium">GitHub</CardTitle>
                    <CardDescription className="text-sm">
                      <a 
                        href="https://github.com/kulwantolkha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-blue hover:underline"
                      >
                        github.com/kulwantolkha
                      </a>
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
