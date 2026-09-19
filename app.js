// Latihan 1
async function dataAPI() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if(!response.ok) {throw new Error(`Error status: ${response.status}`)};
        const result = await response.json();
        console.log(`name : ${result.name}`);
        console.log(`email: ${result.email}`);
    } catch(err) {
        console.error(err.message);
    }
}
dataAPI();

// Latihan 2
async function data2API() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/9999"); 
    if (!res.ok) {                                                              
      throw new Error(`Server merespons dengan status ${res.status}`);          
    }
    const hasil = await res.json();
    console.log(hasil);
  } catch (err) {
    if (err instanceof TypeError) {                    
      console.error("Tidak dapat terhubung ke server:", err.message);
    } else {
      console.error(err.message);                      
    }
  }
}
data2API();