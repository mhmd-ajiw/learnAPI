// Latihan 3
async function ambilData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    const dataProcess = data
      .filter((n) => n.completed === true)
      .slice(0, 5)
      .map((n) => n.title);
    const jumlahData = data.reduce((acc, todo) => {
      acc[todo.userId] = (acc[todo.userId] || 0) + 1;
      return acc;
    }, {});
    console.log(dataProcess);
    console.log(jumlahData);
  } catch (err) {
    console.error("ERROR", err.message);
  }
}
ambilData();
