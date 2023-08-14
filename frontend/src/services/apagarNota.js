import api from "./api";

export function apagarNota(id) {
    return api.delete(`/annotations/${id}`);
  }