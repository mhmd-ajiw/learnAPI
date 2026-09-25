async function main(){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok) {throw new Error(`Server merespons dengan status ${res.status}`)}
    const hasil = await res.json();

    const data = hasil
      .filter( function(p) {return p.userId === 3})
      .slice(0, 5)
      .map((p) => p.title);
    
    const jumlahData = hasil.reduce((acc, n) => {
      acc[n.userId] = (acc[n.userId] || 0) + 1;
      return acc;
    }, {});
    console.log(`Total User ID : ${jumlahData}`);

  } catch(err){
    console.error("ERROR:", err.message);
  }

}

main()