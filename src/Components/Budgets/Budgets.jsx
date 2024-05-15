import { data } from "../../data/data";
import {useShipping } from "../../context/ShippingContext";



export const Budgets = () => {
  const { shipping, total, handleShipping,incrementCount,decrementCount } = useShipping();
 
  return (
    <>
      {data.map((courses) => (
        <div
          key={courses.id}
          className="my-6 bg-white p-4 shadow-2xl rounded-lg"
        >
          <table className="table w-ful h-1/2">
            <tr className="text-gray-700">
              <th className="text-2xl text-left">{courses.course}</th>
              <th className="text-2xl text-center">{courses.price}€</th>
              <th>
                <input
                  type="checkbox"
                  checked={shipping[courses.id].checked}
                  className="checkbox"
                  name={courses.course}
                  value={courses.price}
                  onChange={() => handleShipping(courses.id)}
                />
              </th>
              <th>Afegir</th>
            </tr>

            <tr className="text-gray-700">
              <td>{courses.description}</td>
            </tr>
          </table>
          <div className={`${shipping[courses.id].checked ? "block" : "hidden"} pl-6 spacey-2`}>
            {courses.subItems.map((subItem) => (
              <div key={subItem.id} className="flex items-center space-x-2">
                <label className="block text-sm font-medium">
                  {subItem.label}
                </label>
                <button type="button" onClick={()=> decrementCount(courses.id,subItem.id)}
                className="px-2 py-1 border-2 border-gray-300 rounded-full"
                >
                  -
                </button>
                <input type="number" 
                value={shipping[courses.id].subItems[subItem.id].count}
                readOnly
                className="w-11 text-center border"
                />
                <button
                type="button"
                onClick={()=>incrementCount(courses.id,subItem.id)}
                className="px-2 py-1 bg-white-200 border-2 border-gray-300 rounded-full"
                >
                  +
                </button>
              </div>
            ))}

          </div>
          
        </div>
      ))}
      <h2 className="text-2xl"> <strong>Preu pressuposat</strong></h2>
      <h2 className="text-2xl"><strong>{total}€</strong></h2>
    </>
  );
};
