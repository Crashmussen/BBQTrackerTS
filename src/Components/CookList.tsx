import { useState, useEffect } from "react"
import List from "@mui/material/List"
import CookItem from "./CookItem";
import CookForm from "./CookForm";
import './App.css'

const getInitialCooks = () => {
    const data = JSON.parse(localStorage.getItem("cooks"));
    if(!data) return [];
    return data;
}

export default function CookList() {
    const [cooks, setCooks] = useState(getInitialCooks);
    useEffect(() => {
        localStorage.setItem(
            "cooks",
            JSON.stringify(cooks)
        )
    }, [cooks])

    const addCook = (addCook: [number, string, number, number]) => {
        setCooks((prevCooks: []) => {
            return [...prevCooks, 
                    {id: self.crypto.randomUUID(),  
                    name: addCook.cookName, 
                    temperature: addCook.cookTemp, 
                    time: addCook.cookTime}
            ]
        })
    }
    const removeCook = (id: number) => {
        setCooks((prevCooks: []) => {
            return prevCooks.filter((c) => c.id !== id)
        });
    }
    
    
    return (
        <>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
            {cooks.map((item: []) => {
                return (
                    <CookItem 
                        item={item} 
                        key={item.id} 
                        remove={() => removeCook(item.id)}/>
                )
            })}
        </List>
        <CookForm addCook={addCook}/>
        </>
    );
}
