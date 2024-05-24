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

  const fetchData = async (url:string) => {
    const response = await fetch(url, {next: {revalidate: 10}});
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  };

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
}

const HomePage = async () => {
  const data = await getData();
 

  return (
    <div className=" bg-white  mx-auto p-4">
      <Home data={data}/>
    </div>
  );
};

export default HomePage;


// Second test //// 









/////////

// "use client";

// import { useState, useEffect } from "react";
// import Home from "./components/home";
// // import { getData, ApiResponse } from "../lib/api";

// import { getData, ApiResponse } from "./lib/apis/apiutility";


// const HomePage: React.FC = () => {
//   const [data, setData] = useState<ApiResponse | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const initialData = await getData();
//         setData(initialData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(); // Initial fetch

//     const intervalId = setInterval(fetchData, 3000); // Fetch data every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-white mx-auto p-4">
//       <Home data={data} />
//     </div>
//   );
// };

// export default HomePage;
