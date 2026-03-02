// DRILL 2: Async patterns


const BASE_URL = 'https://jsonplaceholder.typicode.com';

// basic fetch with error handling
async function fetchItem(item){
    try{
        const response = await fetch(`${BASE_URL}/${item}`);

        if(!response.ok){
            throw new Error(`HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        return data;
    }catch(error){
        console.log(`Error: ${error}`);
        throw error;
    }
}


// multiple parallel fetches with Promise.all
async function multipleParalleFetches() {
    const [postsRes, todosRes] = await Promise.all([
        fetch(`${BASE_URL}/posts`),
        fetch(`${BASE_URL}/todos`)
    ]);

    const [posts, todos] = await Promise.all([
        postsRes.json(),
        todosRes.json()
    ]);

    return {posts, todos};
}


// sequential fetches
// fetch(`${BASE_URL}/todos`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         return fetch(`${BASE_URL}/posts`)
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(`Error: ${error}`));

async function sequentialFetches(){
    const todoRes = await fetch(`${BASE_URL}/todos`);
    const todos = await todoRes.json();
    console.log(`Todos: ${todos}`);


    const postsRes = await fetch(`${BASE_URL}/posts`);
    const posts = await postsRes.json();
    console.log(`Posts: ${posts}`);
}

// fetch with timeout
async function fetchWithTimeout(url, timeOut){
    const controller = new AbortController();
    const timeOutId = setTimeout(() => controller.abort(), timeOut);

    try{
        const response = await fetch(url, {
            signal: controller.signal
        });

        if(!response.ok){
            throw new Error(`HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(`Error fetching data: ${error}`);
        throw error;
    }finally{
        clearTimeout(timeOutId);
    }
}


// retry logic
async function fetchWithRetry(url, maxRetries = 3, delayMs = 500){
    
    let attempt = 0;

    while(true){
        try{
            const response = await fetch(url);

            if(!response.ok){
              throw new Error(`HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            return data
        }catch(error){
            attempt++;

            if(attempts > maxRetries){
                throw error;
            }

            await new Promise(r => setTimeout(r, delayMs))


        }
    }
}

