import TheaterCard from "@/modules/Theater/components/TheaterCard";

interface Theater {
  id: string;
  name: string;
}

interface Object {
  theaters: Theater[];
}

async function getData() {
  const res = await fetch("http://localhost:8080/theater/getAllTheater");
  return res.json();
}

const TheaterHome = async () => {
  const data: Object = await getData();
  const theaters: Theater[] = data.theaters;
  console.log(theaters);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-8">Hệ thống rạp</h1>
      {theaters.length > 0 && (
        <div className="flex flex-wrap max-w-[1322px] mx-auto">
          {theaters.map((theater: any, index) => (
            <TheaterCard key={index} name={theater.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TheaterHome;
