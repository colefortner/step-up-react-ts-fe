import { useState, useEffect } from "react"

interface ITest {
    title: string;
}
// test
export const Test = () => {
  const [data, setData] = useState<ITest[]>([])
 

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/connection_tests`)
            .then(response => response.json())
            .then((respData) => {
            console.log(respData);
            setData(respData);
        })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
         } , []);


        return (
        <>
        <div className="App">
            {data[0].title}
        </div>
        </>
        );

}