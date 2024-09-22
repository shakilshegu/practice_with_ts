export const initialItems = new Array(100000).fill(0).map((_, i) => {
    return {
      id: i,
      isSelected: i === 100000,
    };
  });