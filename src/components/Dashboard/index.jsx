import { RiCalendarEventFill ,RiGroupLine,RiGuideFill,RiMoneyDollarCircleFill
     ,RiArrowRightDownLongFill ,RiShoppingBasket2Fill ,RiTextWrap} from "@remixicon/react"

     import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const MyBarChart = () => {
  // Simple Data (Jo dataset aapne manga tha uska alternative)
  const chartData = [
    { month: 'Jan', temp: 5 },
    { month: 'Feb', temp: 10 },
    { month: 'Mar', temp: 15 },
    { month: 'Apr', temp: 22 },
  ];

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>Monthly Temperature</h2>
      <BarChart
        dataset={chartData}
        xAxis={[{ scaleType: 'band', dataKey: 'month', label: 'Months' }]}
        series={[
          { 
            dataKey: 'temp', 
            label: 'Temperature (°C)', 
            valueFormatter: (value) => `${value}°C` 
          }
        ]}
        width={600}
        height={300}
      />
    </div>
  );
};




const DashboardPage=()=>{

    return(
        <>
        <header className="flex justify-between  ">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button className="p-2 bg-gray-200 flex gap-2">
                <RiCalendarEventFill   /> Time Period : 
            </button>
        </header>
        <div className="grid grid-cols-5 gap-2">
            <div className="border shadow-2xl bg-white rounded-2xl p-4 gap-3 ">
                <p className="flex text-gray-150 mb-2"><RiGroupLine /> Total Customer</p>
                
                <div className="flex justify-between gap-3">
                    <h1 className="text-3xl font-bold">56,7899</h1>
                    <h1 className="text-green-500 flex"><RiGuideFill />50%</h1>
                </div>
                
                
            </div>

            <div className="border shadow-2xl bg-white rounded-2xl p-4 gap-3 ">
                <p className="flex text-gray-150 mb-2"><RiMoneyDollarCircleFill /> Total revenue</p>

                
                <div className="flex justify-between gap-3">
                    <h1 className="text-3xl font-bold">56,7899</h1>
                    <h1 className="text-green-500 flex"><RiGuideFill />50%</h1>
                </div>
                
                
            </div>

            <div className="border shadow-2xl bg-white rounded-2xl p-4 gap-3 ">
                <p className="flex text-gray-150 mb-2"><RiShoppingBasket2Fill   /> Total Orders</p>
                
                <div className="flex justify-between gap-3">
                    <h1 className="text-3xl font-bold">56,7899</h1>
                    <h1 className="text-green-500 flex"><RiGuideFill />50%</h1>
                </div>
                
                
            </div>

             <div className="border shadow-2xl bg-white rounded-2xl p-4 gap-3 ">
                <p className="flex text-gray-150 mb-2"><RiTextWrap /> Total Returns</p>
                
                <div className="flex justify-between gap-3">
                    <h1 className="text-3xl font-bold">56,7899</h1>
                    <h1 className="text-rose-500 flex"><RiArrowRightDownLongFill/>-50%</h1>
                </div>
                
                
            </div>
        </div>
        <div>
        {
             MyBarChart()
        }
           
        </div>
                
        </>
    )
}

export default DashboardPage