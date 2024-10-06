import { useEffect, useState } from "react"
import Searchbar from "../components/Searchbar";
import Card from "../components/Card";
import Skeletonloader from "../components/Skeletonloader";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchData, setSearchData] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
    const params = {
        location: searchParam.get('location'),
        date: searchParam.get('date'),
        guests: searchParam.get('guests'),
        rooms: searchParam.get('rooms')
    }

    useEffect(() => {
        const search = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setSearchData(data.slice(0, 3))
        }
        search()
    }, [])


    return (
        <div>
            <Searchbar param={params} />
            {
                searchData.length === 0 &&
                <>
                    <Skeletonloader />
                    <Skeletonloader />
                    <Skeletonloader />
                </>
            }
            {searchData.length > 1 &&
                <section>
                    {searchData.map(data => (
                        <Card key={data.id} title={data.title} userId={data.userId} id={data.id} />
                    ))}
                </section>
            }

        </div>
    )
}

export default Search
