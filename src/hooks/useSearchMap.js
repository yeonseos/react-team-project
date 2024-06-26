import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import searchMapApi from "../utils/searchMapApi";
import { currentLocation } from "../redux/reducer/search/searchMapSlice";
import { useDispatch } from "react-redux";

const fetchSearchMap = ({ location, searchQuery, sortValue, searchPage }) => {
  const { latitude, longitude } = location;
  let url = "";

  if (searchQuery) {
    url = `/keyword.json?query=${searchQuery}&category_group_code=CE7&x=${longitude}&y=${latitude}&page=${searchPage}&size=15&sort=${sortValue}`;
  } else {
    url = `/category.json?category_group_code=CE7&x=${longitude}&y=${latitude}&page=${searchPage}&size=15&sort=${sortValue}`;
  }

  return searchMapApi.get(url);
};

export const useSearchMapQuery = ({ searchQuery, sortValue, searchPage }) => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });

    dispatch(
      currentLocation({
        latitude,
        longitude,
      })
    );
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess);
  }, []);

  return useQuery({
    queryKey: ["search-map", { location, searchQuery, sortValue, searchPage }],
    queryFn: () =>
      fetchSearchMap({ location, searchQuery, sortValue, searchPage }),
    select: (result) => result.data.documents,
  });
};
