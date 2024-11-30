import Navbar from "@/components/Navbar/Navbar"

interface TeamMember {
    name: string;
    linkedin: string;
    image: string;
  }
  
  const team: TeamMember[] = [
    {
      name: "Aleix Rosinach",
      linkedin: "https://www.linkedin.com/in/aleix-rosinach/",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFWRL1KyJohzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696319656044?e=1738195200&v=beta&t=nebtqKFoPlVwx93K8uNqPJhJcZcv43KwcDEpk6GCZkc",
    },
    {
      name: "Joel Ros",
      linkedin: "https://www.linkedin.com/in/joel-ros-peropadre/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGHewmV-NtjDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715276000379?e=1738195200&v=beta&t=ICn0J5YWjCZQPGtFj3dMzG-gmCUl1jXJQFOrfkMEbHQ",
    },
    {
      name: "Òscar van de Crommert",
      linkedin: "https://www.linkedin.com/in/oscar-van-de-crommert-rodoreda/",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFbj028oZ01QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712860478796?e=1738195200&v=beta&t=6bj5UNOgrxX39pUKTPs2FtnyXo8DLY1iaDcvj1lvt_o",
    },
    {
        name: "Pol Llinàs",
        linkedin: "www.linkedin.com/in/pol-llinas-vaquer",
        image: "https://media.licdn.com/dms/image/v2/D5603AQEt3ZMvju9FhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728896614909?e=1738195200&v=beta&t=sZSUwY8hlOhUdjQKC-XdlPfd261oW-Ob9PTDoGZq1ck",
      },
  ];

const Page: React.FC = () => {
    return (
      <div>
            {/* Include Navbar */}
            <Navbar />
    
        <div className="text-gray-800 p-8">
          <div className="h-200 max-w-7xl mx-auto">
            <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
                We are a team of four passionate Computer Science students from Lleida, united by our shared membership in student association LleidaHack. While we share a common drive for innovation, each of us brings a unique area of expertise to the table: from software and hardware development to cybersecurity and UI/UX design. Together, we aim to tackle challenges creatively, combining our diverse skill sets to build solutions that leave an impact. Collaboration and learning are at the core of everything we do, and we’re excited to take on whatever comes next!
            </p>
            </header>

            <h2 className="text-3xl font-bold mb-6 text-center">Meet The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <a href={member.linkedin} className="text-blue-600">{"LinkedIn"}</a>
                </div>
                ))}
            </div>
         
            <div className="flex flex-col justify-end text-center">
                <p className="text-black">We’re excited to share our project. Feel free to take a look!</p>
                <a href="https://github.com/MakeGreatBox" className="text-center text-blue-600">Check out in GitHub!</a>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Page;  