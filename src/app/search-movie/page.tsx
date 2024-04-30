"use client";

import React, { useEffect, useState } from "react";
import { movieService } from "@/core/apis/movie.service";
import { IGetAllMovieRes, TypeMovie } from "@/models/movie";
import MovieCard from "@/modules/HomePage/components/MovieCard";
import { Input, Button } from "antd";
import { useDebouncedCallback } from "use-debounce";
import { Select } from "antd";
import Link from "next/link";

export default function SearchMovie() {
  const [listMovies, setListMovies] = useState<IGetAllMovieRes[]>([]);
  const [keyWord, setKeyword] = useState<string>();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const res = await movieService.getAllMovies();
    setListMovies(res?.slice(5));
    setValue(0);
  };

  const searchMovie = async (keyword: string) => {
    const res = await movieService.searchMovie(keyword);
    setListMovies(res);
    setValue(0);
  };

  const onInputChange = useDebouncedCallback(async (text: string) => {
    setKeyword(text);
    console.log(text.trim());
    if (text && text.trim() !== "") {
      const res = await movieService.searchMovie(text.trim());
      setListMovies(res);
    } else {
      getAllMovies();
    }
    setValue(0);
  }, 1000);

  const sortInByName = () => {
    const list: IGetAllMovieRes[] = listMovies.slice(); //dùng slice để tạo bản sao của listmovies react nhận biết render lại gd
    const newList = list.sort((a, b) => a.title!.localeCompare(b.title!));
    setListMovies(newList);
  };

  const sortDesByName = () => {
    const list: IGetAllMovieRes[] = listMovies.slice(); //dùng slice để tạo bản sao của listmovies react nhận biết render lại gd
    const newList = list.sort((a, b) => b.title!.localeCompare(a.title!));
    setListMovies(newList);
  };

  const onChange = (value: number) => {
    if (value === 0) {
      setValue(0);
      getAllMovies();
    } else if (value === 1) {
      setValue(1);
      sortInByName();
    } else if (value === 2) {
      setValue(2);
      sortDesByName();
    }
  };

  return (
    <main>
      <div className="px-[160px] py-[50px]">
        <p className="mb-6 font-medium text-xl">
          <Link href={"/"}>Trang chủ</Link> /{" "}
          <span className="!font-bold text-primary3">Danh sách phim</span>
        </p>
        <div className="flex justify-between mb-8">
          <div className="flex gap-2 w-2/5">
            <Input
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="Tìm kiếm phim..."
            />
            <Button
              onClick={() => searchMovie(keyWord!)}
              type="primary"
              className="!bg-primary3"
            >
              Tìm kiếm
            </Button>
          </div>
          <div className="w-1/5">
            <Select
              defaultValue={0}
              onChange={onChange}
              value={value}
              className="!w-full"
              options={[
                {
                  value: 0,
                  label: "Mặc định",
                },
                {
                  value: 1,
                  label: "Sắp xếp theo A - Z",
                },
                {
                  value: 2,
                  label: "Sắp xếp theo Z - A",
                },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-7">
          {listMovies?.map((item, index) => {
            return (
              <MovieCard key={index} data={item} type={TypeMovie.showing} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
