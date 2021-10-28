import { useEffect, useState } from 'react'
import { fetchCountries } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

//import { addCountry } from "../redux/actions";
//import country from "../redux/reducers/country";

import { AppState, Country } from '../types'

const useFetch = (
  search: string,
  sortOrder: boolean,
  sortColumn: string
): [Error | unknown, Country[]] => {
  //const [data, setData] = useState<Country[]>([])
  const [error, setError] = useState<unknown>('') 
  const [filterdCountries, setFilterdCountries] = useState<Country[]>([])
  const data = useSelector((state:AppState) => state.country.allCountries)
  
  const dispatch = useDispatch()

  const url = 'https://restcountries.com/v2/all'
  
  useEffect(() => {
    dispatch(fetchCountries(url))
    setError('')
  },[dispatch])

  useEffect(() => {
    let filterdCountries = data.filter((country: Country) =>
      country.name
        .toLowerCase()
        .concat(country.region.toLowerCase())
        .concat(
          country.languages
            .map((lang) => lang.name)
            .toString()
            .toLowerCase()
        )
        .includes(search.toLowerCase())
    )
    //console.log(filterdCountries, "filterdContries ");

    // sort array of objects by property name/key
    let sortArray = (arr: [] | any, sortBy: string, isAsending: boolean) => {
      //let firstCountry = arr.length > 0 ? arr[arr.length - 1][sortBy] : "";
      if (arr.length > 0) {
        let sorted =
          typeof arr[0][sortBy] === 'number'
            ? arr.sort((a: any, b: any) => a[sortBy] - b[sortBy])
            : Array.isArray(arr[0][sortBy])
              ? arr.sort((a: any, b: any) => a[sortBy].length - b[sortBy].length)
              : arr.sort((a: any, b: any) => {
                if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return 1
                if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return -1
                return 0
              })

        return isAsending ? sorted : sorted.reverse()
      }
    }

    sortArray(filterdCountries, sortColumn, sortOrder)
    // console.log(filterdSortedCountries, "filterd and sorted countries");

    setFilterdCountries(filterdCountries)
  }, [data, search, sortColumn, sortOrder])

  return [error, filterdCountries]
}

export default useFetch
