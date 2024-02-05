export const getData = async <T>(url: string):Promise<T> => {
    const fetchData =  await fetch("https://trai-agencies-api.onrender.com/api/v1/get_agencies")
    const res = await fetchData.json()
    console.log("books:" , res)
}