import { data } from "../../data/data";
import { useShipping } from "../../context/ShippingContext";
import { Navbar } from "../Navbar/Navbar";
import { Section } from "../Section/Section";


export const Budgets = () => {
  const { shipping, total, handleShipping, incrementCount, decrementCount,clientEmail,
    clientName,
    clientTelephone,
    estimate,addBudget,setClientName,
    setclientEmail,
    setClientTelephone
} =
    useShipping();

  return (
    <>
      <Navbar />
      <Section />
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
          <div
            className={`${
              shipping[courses.id].checked ? "block" : "hidden"
            } pl-6 spacey-2`}
          >
            {courses.subItems.map((subItem) => (
              <div key={subItem.id} className="flex items-center space-x-2">
                <label className="block text-sm font-medium">
                  {subItem.label}
                </label>
                <button
                  type="button"
                  onClick={() => decrementCount(courses.id, subItem.id)}
                  className="px-2 py-1 border-2 border-gray-300 rounded-full"
                >
                  -
                </button>
                <input
                  type="number"
                  value={shipping[courses.id].subItems[subItem.id].count}
                  readOnly
                  className="w-11 text-center border"
                />
                <button
                  type="button"
                  onClick={() => incrementCount(courses.id, subItem.id)}
                  className="px-2 py-1 bg-white-200 border-2 border-gray-300 rounded-full"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <h2 className="text-2xl">
        {" "}
        <strong>Preu pressuposat</strong>
      </h2>
      <h2 className="text-2xl">
        <strong>{total}€</strong>
      </h2>
      <div className="p-4 max-w-lg mx-auto ">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Nombre del cliente/a
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Introduce el nombre del cliente"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email del cliente/a
          </label>
          <input
            type="text"
            value={clientEmail}
            onChange={(e) => setclientEmail(e.target.value)}
            placeholder="Introduce el Email del cliente"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Telefono del cliente/a
          </label>
          <input
            type="text"
            value={clientTelephone}
            onChange={(e) => setClientTelephone(e.target.value)}
            placeholder="Introduce el telfono del cliente"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          onClick={addBudget}
          className="mt-4 px-4 py-2 bg-blue-500 tex-white rounded"
        >
          Añadir Presupuesto
        </button>
      </div>
      <div className="mb-3bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between ">
        {estimate.length > 0 && (
          <div className="mt-8">
            <h3 className="text-3xl font-bold">Demanar pressupost</h3>
            <ul className="mt-4">
              {estimate.map((budget, index) => (
                <li key={index} className="">
                  <strong>
                    <label className="block text-sm font-medium mb-1">
                      Nombre del cliente/a
                    </label>
                  </strong>
                  <strong>{budget.clientName}</strong>  
                  <strong>
                    <label className="block text-sm font-medium mb-1">
                      Email del cliente/a
                    </label>
                  </strong>
                  <strong>{budget.clientEmail}{" "}</strong>
                  <strong>
                    <label className="block text-sm font-medium mb-1">
                      Telefono del cliente/a
                    </label>
                  </strong>
                  <strong>{budget.clientTelephone}</strong>
                  <label className="block text-sm font-medium mb-1">
                    Total:
                  </label>
                  <strong>{budget.total}€</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
