import React from "react";
import {UsersType} from "../components/redux/users-reducer";


export let updateObjectInArray = (items: UsersType[],itemId:number, objectPropName: any,newObjectProps:{}) => {



    return  items.map(m => {
        // @ts-ignore
            if (m[objectPropName]=== itemId) {
                return {...m, ...newObjectProps}
            }
            return m;
        }
    )
}