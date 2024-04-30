import { AxiosResponse } from "axios";
import { axiosInstance } from "../shared/axios";

const baseUrl = "/movie/";

class MovieService {
  async getAllMovies() {
    const res: AxiosResponse = await axiosInstance.get(baseUrl + "getAllMovie");
    return res.data.movies;
  }

  async getMovieById(id: string) {
    const res: AxiosResponse = await axiosInstance.get(baseUrl + id);
    return res.data.movie;
  }

  async searchMovie(keyword: string) {
    const res: AxiosResponse = await axiosInstance.get(baseUrl + "/search", {
      params: { keyword: keyword },
    });
    return res.data.movies;
  }
}

export const movieService = new MovieService();
