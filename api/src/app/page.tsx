// import Home from "./components/home";

// async function getData() {
//   const endpoint1 =
//     "https://feed.unbxd.io/api/auk-prod-wbwr-vans-shopify48861701268322/catalog/status";
//   const endpoint2 =
//     "https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-Crocs-shopify48861706029242/catalog/status";
//   const endpoint3 =
//     "https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-UnderArmour-shopify48861706029107/catalog/status";
//   const endpoint4 =
//     "https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-Birkenstock-shopify48861706029306/catalog/status";

//   const fetchData = async (url:string) => {
//     const response = await fetch(url, { cache: 'no-store' });
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data from ${url}`);
//     }
//     return response.json();
//   };

//   const [data1, data2, data3, data4] = await Promise.all([
//     fetchData(endpoint1),
//     fetchData(endpoint2),
//     fetchData(endpoint3),
//     fetchData(endpoint4),
//   ]);

//   return {
//     data1,
//     data2,
//     data3,
//     data4,
//   };
// }

// const HomePage = async () => {
//   const data = await getData();
   
  

//   return (
//     <div className=" bg-white  mx-auto p-4">
//       <Home data={data}/>
//     </div>
//   );
// };

// export default HomePage;





import Home from "./components/home";

async function getData() {
  const endpoint1 =
    "https://feed.unbxd.io/api/auk-prod-wbwr-vans-shopify48861701268322/catalog/status";
  const endpoint2 =
    "https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-Crocs-shopify48861706029242/catalog/status";
  const endpoint3 =
    "https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-UnderArmour-shopify48861706029107/catalog/status";
  const endpoint4 =
    "https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-Birkenstock-shopify48861706029306/catalog/status";

  const fetchData = async (url: string, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

        const response = await fetch(url, {
          cache: 'no-store',
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }
        return response.json();
      } catch (error) {
        if (i < retries - 1) {
          console.warn(`Retrying fetch (${i + 1}/${retries}) for ${url}:`, error);
          await new Promise(res => setTimeout(res, delay));
        } else {
          console.error(`Failed to fetch data from ${url} after ${retries} retries:`, error);
          throw error;
        }
      }
    }
  };

  try {
    const [data1, data2, data3, data4] = await Promise.all([
      fetchData(endpoint1),
      fetchData(endpoint2),
      fetchData(endpoint3),
      fetchData(endpoint4),
    ]);

    return {
      data1,
      data2,
      data3,
      data4,
    };
  } catch (error) {
    console.error('Error fetching data from one or more endpoints:', error);
    throw new Error('Failed to fetch all data');
  }
}

const HomePage = async () => {
  try {
    const data = await getData();

    return (
      <div className="bg-white mx-auto p-4">
        <Home data={data} />
      </div>
    );
  } catch (error) {
    return (
      <div className="bg-white mx-auto p-4">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }
};

export default HomePage;
