import axios from "axios";
import { useState } from "react";

export function useRequest<T>(url: string, payload: T) {
  const base = `http://localhost:3333/${url}`;
  axios
    .post(base, payload)
    .then((response) => {
      console.log(response);
      window.location.reload()
    })
    .catch((err) => {
      console.log(err);
    });
}
