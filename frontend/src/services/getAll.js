import api from "./api";

export function getAll() {
    return api.get('/annotations/');
  }