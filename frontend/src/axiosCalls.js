import axios from "axios";
import { getGraphDataUrl, getPieDataUrl, getTableDataUrl } from "./urls";

export const getGraphData = async () => {
  return axios.get(getGraphDataUrl, {
    withCredentials: true,
  });
};
export const getPieData = async () => {
  return axios.get(getPieDataUrl, {
    withCredentials: true,
  });
};
export const getTableData = async () => {
  return axios.get(getTableDataUrl, {
    withCredentials: true,
  });
};
