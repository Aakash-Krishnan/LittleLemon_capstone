export const updateTimes = (state, action) => {
  console.log("updateTimes");
};

export const initializeTimes = () => {
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return { times: times };
};
