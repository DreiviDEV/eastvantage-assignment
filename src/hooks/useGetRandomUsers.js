// create a custom hook to fetch random users from the API using react-query and axios
import { useQuery } from "react-query";
import axios from "axios";

export const useGetRandomUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get("https://randomuser.me/api");
      localStorage.setItem("users", JSON.stringify(data.results[0]));
      return data.results[0];
    },
    refetchOnWindowFocus: false,
  });
};
