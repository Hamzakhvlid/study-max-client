import { FiUsers, FiFileText } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/atoms/card/card";
import Button from "../../components/atoms/button";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-white font-poppins_semibold py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Study Max</h1>
        <p className="text-xl ">Your Gateway to Exam Success</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-poppins_semibold mb-4">About Us</h2>
          <p className="text-lg max-w-2xl text-muted-foreground mx-auto">
            Study Max is your comprehensive resource for accessing past exams
            from various subject boards. We're dedicated to helping students
            prepare effectively for their exams by providing a vast collection
            of previous test papers.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-poppins_semibold mb-6 text-center">
            Why Choose Study Max?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Extensive Collection",
                description:
                  "Access a wide range of past exams from multiple subject boards",
                icon: FiFileText,
              },
              {
                title: "Subject-Specific",
                description:
                  "Find exams tailored to your specific subjects and curriculum",
                icon: BiBookOpen,
              },
              {
                title: "User-Friendly",
                description:
                  "Easy-to-use interface for quick access to the exams you need",
                icon: BsCheck2Circle,
              },
              {
                title: "Community-Driven",
                description:
                  "Join a community of students sharing insights and tips",
                icon: FiUsers,
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                At Study Max, we believe that practice makes perfect. Our
                mission is to empower students with the tools they need to excel
                in their exams. By providing access to past papers, we help
                students familiarize themselves with exam formats, question
                types, and time management strategies.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-poppins_semibold mb-4">
            Ready to Ace Your Exams?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of students who have improved their exam performance
            with Study Max.
          </p>
          <Button
            text="Get Started"
            typeofButton="button"
            backgroundColor="bg-black"
            borderRadius="rounded-lg"
            width="w-fit"
            padding="px-2"
          />
        </section>
      </div>
    </div>
  );
}
