import { movieService } from "@/core/apis/movie.service";
import Home from "@/modules/HomePage/pages/Home";

export default async function HomeMain(props: any) {
  return (
    <main>
      <Home></Home>
    </main>
  );
}
