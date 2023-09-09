import * as React from "react"

export function timeConvert (t:number) {
    const hours = Math.floor((t/60))
    const minutes = t % 60
    return (minutes === 0 ? hours + "h" : hours + "h" + minutes + "m")
}

export interface Cook {
    cookName: string,
    cookRub?: string,
    cookTemp: number,
    cookTime: number,
    id: string,
    meatCut?: string,
    meatType: string,
    meatWeight?: number,
}

export const updateCook = (cooks: Cook[], cookName: string, cookRub: string, cookTemp: number, cookTime: number, id: string, meatCut: string, meatType: string, meatWeight: number): Cook[] => cooks.map((cook) => ({
    ...cook,
    cookName: cook.id === id ? cookName: cook.cookName,
}))

export type DataProps = {
    cookName: string,
    cookTemp: number,
    cookTime: number,
};



export const useCooks = (initial: Cook[]) => React.useState<Cook[]>(initial);
export type UseCooksType = ReturnType<typeof useCooks>;
export type CooksType = UseCooksType[0];
export type SetCooksType = UseCooksType[1];


