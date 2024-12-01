import Navbar from "@/components/Navbar/Navbar";
import data from "@/api/data/data_settings.json";

export default function Drttingd() {
  return (
    <div>
      <Navbar />
    
      <div className="flex flex-col items-center w-full max-w-3xl mt-8 px-4">
        {data.map((item) => (
          <div key={item.id} className="mb-4">
            <h1 className="text-black">
              Machine number <span className="text-red-500">{item.id}</span>
            </h1>
            <p className="text-black">
              It is located in <span className="text-red-500">{item.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

