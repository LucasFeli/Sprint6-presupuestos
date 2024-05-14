import { data } from "../../data/data";
import {useShipping } from "../../context/ShippingContext";


export const Budgets = () => {
  const { shipping, total, handleShipping } = useShipping();
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
                  checked={shipping[courses.id]}
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
        </div>
      ))}
      <h2 className="text-2xl"> <strong>Preu pressuposat</strong></h2>
      <h2 className="text-2xl"><strong>{total}€</strong></h2>
    </>
  );
};
