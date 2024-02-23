import { Box } from "@mui/material";
import UserCardComponent from "./UserCard";
import { useGetRandomUsers } from "../hooks/useGetRandomUsers";

export const UserCardContainer = () => {
  const {
    //  data,
    isLoading,
    refetch,
  } = useGetRandomUsers();

  // Improvements, use directly the data from useRandomUsers/useQuery

  const localStorageData = JSON.parse(localStorage.getItem("users"));

  const transformNameToFullname = (name) => {
    if (!name) return "";
    return `${name.title} ${name.first} ${name.last}`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <UserCardComponent
        email={localStorageData?.email}
        name={transformNameToFullname(localStorageData?.name)}
        isLoading={isLoading}
        refetch={refetch}
      />
    </Box>
  );
};
