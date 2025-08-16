const CustomSort = () => {
  const arr = [1, 2, "BLA", "ALa", 4];

  function customSort(arr) {
   return arr.sort((a, b) => {
      const isNumA = typeof a === "number";
      const isNumB = typeof b === "number";

      // 1. Numbers come before strings
      if (isNumA && !isNumB) return -1; // a is number, b is string → a first
      if (!isNumA && isNumB) return 1; // a is string, b is number → b first

      // 2. If both are numbers → sort numerically
      if (isNumA && isNumB) return a - b;

      // 3. If both are strings → sort alphabetically
      return a.localeCompare(b);
    });
  }


  console.log(  customSort(arr));
  return <div>CustomSort</div>;
};

export default CustomSort;
