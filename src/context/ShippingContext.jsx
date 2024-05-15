import { createContext,useContext,useState,useEffect } from "react";


const ShippingContext = createContext()



export const ShippingProvider = ({data,children}) => {
    const [shipping, setShipping] = useState(
        data.reduce(
          (acc, item) => ({
            ...acc,
            [item.id]: {
              checked: false,
              subItems: item.subItems.reduce(
                (subAcc, subItem) => ({
                  ...subAcc,
                  [subItem.id]: { count: 1, value: subItem.base }
                }), {})}
            
          }),
          {}
        )
      );  
      const [total, setTotal] = useState(0);
      useEffect(() => {
        const newTotal = data.reduce((acc, item) => {
          const itemTotal = shipping[item.id].checked ? item.price:0;
          const subItemsTotal = Object.values(shipping[item.id].subItems).reduce((subAcc,subItem)=>{
            return subAcc + (shipping[item.id].checked ? subItem.count * subItem.value : 0);
          },0)
         
          return acc + itemTotal + subItemsTotal
          
        }, 0);
        setTotal(newTotal);
      }, [shipping,data]);



      const handleShipping = (id,subId=null,value=null) => {
        setShipping((prev) => ({
          ...prev,
          [id]: subId?{
            ...prev[id],
            subItems:{
              ...prev[id].subItems,
              [subId]:{
                ...prev[id].subItems[subId],
                count: value !== null ? value :
                prev[id].subItems[subId].count + 1
              }
            }
          } : {...prev[id], checked: !prev[id].checked}
        }));
      
      }
      return (
        <ShippingContext.Provider value={{ shipping, total, handleShipping }}>
        {children}
      </ShippingContext.Provider>
  )


}

export const useShipping = () => useContext(ShippingContext);
