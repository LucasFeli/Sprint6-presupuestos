import { createContext,useContext,useState,useEffect } from "react";

const ShippingContext = createContext()



export const ShippingProvider = ({data,children}) => {
    const [shipping, setShipping] = useState(
        data.reduce(
          (acc, item) => ({
            ...acc,
            [item.id]: false,
          }),
          {}
        )
      );  
      const [total, setTotal] = useState(0);
      useEffect(() => {
        const newTotal = data.reduce((acc, item) => {
          return acc + (shipping[item.id] ? item.price : 0);
        }, 0);
        setTotal(newTotal);
      }, [shipping,data]);

      const handleShipping = (id) => {
        setShipping((prev) => ({
          ...prev,
          [id]: !prev[id],
        }));
      
      }
      return (
        <ShippingContext.Provider value={{ shipping, total, handleShipping }}>
        {children}
      </ShippingContext.Provider>
  )


}

export const useShipping = () => useContext(ShippingContext);
