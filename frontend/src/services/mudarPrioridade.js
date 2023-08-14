import api from "./api";

export function mudarPrioridade(id) {
    return api.post(`/priorities/${id}`);
  }