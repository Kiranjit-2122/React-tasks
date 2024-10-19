import { Fragment } from "react"
export default function Country(){
    var country=['india',"canada","australia","london",]
    return(
        <>
        <h1>this is country</h1>
        {
            country.map(
                (el,index)=>{
                    return(
                        <Fragment key={index}>
                            <div>{index+1}.country is {el}</div>
                        </Fragment>
                    )
                }
            )
        }
        </>
    )
}