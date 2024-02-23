import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function UserCardComponent({ email, name, refetch, isLoading }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "15rem",
          height: "100%",
          width: "100%",
          minWidth: "10rem",
          maxWidth: "50rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(1rem)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 2rem 8rem 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <React.Fragment>
              <Typography gutterBottom variant="h5" component="div">
                {email ? email : <Skeleton variant="text" width={100} />}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {name ? name : <Skeleton variant="text" width={100} />}
              </Typography>
            </React.Fragment>
          )}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={refetch}>
            Refetch
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

UserCardComponent.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  refetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

UserCardComponent.defaultProps = {
  email: "",
  name: "",
  refetch: () => {},
  isLoading: false,
};
