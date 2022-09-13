export const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
