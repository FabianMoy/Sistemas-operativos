export const homecontainer = {
    hidden: {
      x:-2000,
      y:0
    },
    show: {
      x:0,
      y:0,
      transition: {
        duration: 0.4,
      },
    },
    hide: {
      x: 0,
      y:-1000,
      transition: {
        duration: 0.4,
      },
    },
  };
  export const homeh2 = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
    hide: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 0.75,
      },
    },
  };
  export const homebtn = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
    hide: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 0.75,
      },
    },
  };
  
  // services page animations
  export const servicesh3btn = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  export const cards = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  export const card = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      scale: 0.75,
      transition: {
        duration: 0.5,
      },
    },
  };