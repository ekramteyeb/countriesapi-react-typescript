import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

import SearchComponent from '../components/Search'
import Cart from '../components/Cart'
import Navigation from '../components/Navigation'
import Table from '../components/Table'
import useDebounce from '../hooks/useDebounce'
import useFetchCountries from '../hooks/useFetchCountries'
import { useTheme } from '../context/Context'


import './styleHome.scss'
import { AppState } from '../types'
//import { addCountry } from '../redux/actions'

//import { Link } from 'react-router-dom'

//import { Country, AppState } from '../types'
//import { addCountry, removeCountry } from '../redux/actions'

export default function Home() {
  //const dispatch = useDispatch()
  const countries = useSelector((state: AppState) => state.country.inCart)
  const [search, setSearch] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('name')
  const [sortOrder, setSortOrder] = useState(true)
  const debounceValue = useDebounce(search, 1000)
  
  //context 
  const { theme } = useTheme()
  
  console.log(countries.length, 'countries')

  const [error, data] = useFetchCountries(debounceValue, sortOrder, sortColumn)

  const handleChange = useCallback((event: React.BaseSyntheticEvent) => {
    setSearch(event.target.value)
  }, [])

  const handleSort = useCallback(
    (event: string) => {
      setSortColumn(event)
      setSortOrder(sortOrder ? false : true)
    },
    [sortOrder]
  )
  const backgroundStyle = {
    backgroundColor : theme
  }
  return (
   
    <Container fluid>
      <header className="header" style={backgroundStyle}>
        <Navigation />
        <div className="header__div">
          <p>Countries</p>
        </div>
        <SearchComponent
          handleChange={handleChange}
          placeholder="search by country name,region, or language"
        />
        <Cart items={countries.length} handleClick={() => alert(`${countries.length} items in cart`)} />
      </header>
      <main className="main">
        {error !== '' ? (
          'there is error while fetchig data'
        ) : (
          <Table
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            handleSort={handleSort}
            countries={data}
          />
        )}
    
      </main>
    </Container>
    
  )
}
