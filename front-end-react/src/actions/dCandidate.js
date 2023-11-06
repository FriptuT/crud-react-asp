import api from "./api";
import { useDispatch } from "react-redux";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => {
  api
    .dCandidate()
    .fetchAll()
    .then((Response) => {
      const dispatch = useDispatch();

      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: Response.data,
      });
    })
    .catch((err) => console.log(err));
};
