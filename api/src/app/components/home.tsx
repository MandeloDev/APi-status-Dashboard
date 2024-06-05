
/////// current ui ///////

"use client";

import { useState, useEffect } from "react";

interface DataItem {
  fileName: string;
  uploadId: string;
  status: string;
  timeStamp: number;
  message: string;
  code: number;
  productCount: number;
  date: string;
}

const Home = ({ data }: { data: { data1: DataItem[], data2: DataItem[], data3: DataItem[], data4: DataItem[] } }) => {
  const [selectedTable, setSelectedTable] = useState<string>(() => {
    return localStorage.getItem('selectedTable') || 'Vans';
  });

  useEffect(() => {
    localStorage.setItem('selectedTable', selectedTable);
  }, [selectedTable]);

  // const googleChatNotification = async (message: string) => {
  //   const url = "https://chat.googleapis.com/v1/spaces/AAAA2_eR2OY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jOUtgTcAbCqbWCG8q-rxnXCl0OW-OZYs9yfyzH301qI";
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json; charset=UTF-8" },
  //     body: JSON.stringify({ text: message })
  //   });
  //   return await res.json();
  // };

  
 




  // const refreshData = async () => {
  //   const message = `@pieter@wbwr.io Please run a production sync on ${selectedTable}`;
    
  //   try {
  //     await googleChatNotification(message);
  //     console.log(`Notification sent to Google Chat: ${message}`);
  //   } catch (error) {
  //     console.error(`Failed to send notification: ${error}`);
  //   }
  // };

  ////// test ///////

  // const googleChatNotification = async (message: string, email: string) => {
  //   const url = "https://chat.googleapis.com/v1/spaces/AAAA2_eR2OY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jOUtgTcAbCqbWCG8q-rxnXCl0OW-OZYs9yfyzH301qI";
    
  //   const body = {
  //     cards: [
  //       {
  //         sections: [
  //           {
  //             widgets: [
  //               {
  //                 textParagraph: {
  //                   text: `<users/${email}> ${message}`,
  //                 },
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   };
  
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json; charset=UTF-8" },
  //     body: JSON.stringify(body),
  //   });
  
  //   if (!res.ok) {
  //     throw new Error(`Failed to send notification: ${res.statusText}`);
  //   }
  
  //   return await res.json();
  // };
  
  // const refreshData = async () => {
  //   const email = "pieter@wbwr.io"; 
  //   const message = email + "Please run a production sync on " + selectedTable;
  
  //   try {
  //     await googleChatNotification(message, email);
  //     console.log(`Notification sent to Google Chat: ${message}`);
  //   } catch (error) {
  //     console.error(`Failed to send notification: ${error}`);
  //   }
  // };


  //// recent
  // const googleChatNotification = async (message: string, email: string, displayName: string) => {
  //   const url = "https://chat.googleapis.com/v1/spaces/AAAA2_eR2OY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jOUtgTcAbCqbWCG8q-rxnXCl0OW-OZYs9yfyzH301qI";

  //   const body = {
  //     text: `@${displayName} ${message}`,
  //   };

  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json; charset=UTF-8" },
  //     body: JSON.stringify(body),
  //   });

  //   const result = await res.json();
  //   console.log(result); // Log the response for debugging

  //   if (!res.ok) {
  //     throw new Error(`Failed to send notification: ${res.statusText}`);
  //   }

  //   return result;
  // };

  // const refreshData = async () => {
  //   const message = `Please run a production sync on ${selectedTable}`;
  //   const email = "pieter@wbwr.io"; // The email of the person to mention
  //   const displayName = "Pieter Slabbert"; // The display name of the person to mention

  //   try {
  //     await googleChatNotification(message, email, displayName);
  //     console.log(`Notification sent to Google Chat: ${message}`);
  //   } catch (error) {
  //     console.error(`Failed to send notification: ${error}`);
  //   }
  // };


  const googleChatNotification = async (message: string, email: string, displayName: string) => {
    const url = "https://chat.googleapis.com/v1/spaces/AAAA2_eR2OY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jOUtgTcAbCqbWCG8q-rxnXCl0OW-OZYs9yfyzH301qI";

    const body = {
        text: `${message}`,
        cards: [
            {
                sections: [
                    {
                        widgets: [
                            {
                                textParagraph: {
                                    text: `<users/${email}> ${message}`
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(body),
    });

    const result = await res.json();
    console.log(result); // Log the response for debugging

    if (!res.ok) {
        throw new Error(`Failed to send notification: ${res.statusText}`);
    }

    return result;
};

const refreshData = async () => {
    const selectedTable = "Vans"; // Replace with the actual selected table logic
    const message = `Please run a production sync on ${selectedTable}`;
    const email = "pieter@wbwr.io"; // The email of the person to mention
    const displayName = "Pieter Slabbert"; // The display name of the person to mention

    try {
        await googleChatNotification(message, email, displayName);
        console.log(`Notification sent to Google Chat: ${message}`);
    } catch (error) {
        console.error(`Failed to send notification: ${error}`);
    }
};







  // const validateData = async () => {
  //   try {
  //     const newData1 = await fetchData('https://feed.unbxd.io/api/auk-prod-wbwr-vans-shopify48861701268322/catalog/status', true);
  //     const newData2 = await fetchData('https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-Crocs-shopify48861706029242/catalog/status', true);
  //     const newData3 = await fetchData('https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-UnderArmour-shopify48861706029107/catalog/status', true);
  //     const newData4 = await fetchData('https://feed.unbxd.io/api/ss-unbxd-auk-prod-wbwr-Birkenstock-shopify48861706029306/catalog/status', true);

  //     setData({ data1: newData1, data2: newData2, data3: newData3, data4: newData4 });
  //     console.log("Data validated successfully");
  //   } catch (error) {
  //     console.error(`Failed to validate data: ${error}`);
  //   }
  // };



  const renderTable = (data: DataItem[], title: string) => (
    <div className="w-full pb-4">
      <h2 className="text-xl text-black uppercase font-bold mb-4">{title}</h2>

      <div className="flex mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white"
          onClick={refreshData}
        >
          Request Sync Data
        </button>

        {/* <button
          className="px-4 py-2 ml-2 bg-blue-500 text-white"

          onClick={validateData}
        >
          Validate Data
        </button> */}
        
      </div>

      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 text-center py-2 border text-black border-gray-300">Upload ID</th>
            <th className="px-4 text-center py-2 border text-black border-gray-300">Status</th>
            <th className="px-4 text-center py-2 border text-black border-gray-300">Timestamp (UTC)</th>
            <th className="px-4 text-center py-2 border text-black border-gray-300">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="px-4 text-[13px] py-2 border text-black border-gray-300">{item.uploadId}</td>
              <td className="px-4 text-[13px] py-2 border text-black border-gray-300">{item.status}</td>
              <td className="px-4 text-[13px] py-2 border text-black border-gray-300">{new Date(item.timeStamp).toUTCString()}</td>
              <td className="px-4 text-[13px] py-2 border text-black border-gray-300">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderSelectedTable = () => {
    switch (selectedTable) {
      case 'Vans':
        return renderTable(data.data1, 'Vans');
      case 'Crocs':
        return renderTable(data.data2, 'Crocs');
      case 'UnderArmour':
        return renderTable(data.data3, 'UnderArmour');
      case 'Birks':
        return renderTable(data.data4, 'Birks');
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center text-black font-bold mb-4">UNBXD FEEDS INGESTION STATUS</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-2 ${selectedTable === 'Vans' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelectedTable('Vans')}
        >
          VANS
        </button>
        <button
          className={`px-4 py-2 mr-2 ${selectedTable === 'Crocs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelectedTable('Crocs')}
        >
          CROCS
        </button>
        <button
          className={`px-4 py-2 mr-2 ${selectedTable === 'UnderArmour' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelectedTable('UnderArmour')}
        >
          UNDERARMOUR
        </button>
        <button
          className={`px-4 py-2 ${selectedTable === 'Birks' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelectedTable('Birks')}
        >
          BIRKS
        </button>
      </div>
      {renderSelectedTable()}
    </div>
  );
};

export default Home;
