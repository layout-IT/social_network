import React from "react";
import {Preloader} from "../components/common/preloader/preloader";

export const WithSuspense = (Component : any) => {
    return  (props:any) => {
       return  <React.Suspense fallback={<div><Preloader/></div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}