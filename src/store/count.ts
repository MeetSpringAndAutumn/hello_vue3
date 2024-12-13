import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state: () => {
    return {
      sum: 0,
    };
  },
  actions: {
    increment(value:number) {
      this.sum+=value;
    },
  },
});