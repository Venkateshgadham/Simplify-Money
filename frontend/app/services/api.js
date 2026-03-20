export const fetchMetalPrice = async (metal) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
          metal,
          price: (Math.random() * 10000 + 1000).toFixed(0),
          open: (Math.random() * 10000 + 1000).toFixed(0),
          close: (Math.random() * 10000 + 1000).toFixed(0),
          time: new Date().toLocaleTimeString(),
        });
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};