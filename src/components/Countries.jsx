import React from 'react'
import { connect } from 'react-redux'
import { getCountries } from '../store/actions'
function Countries(props) {
    console.log("props in countries::",props)
        React.useEffect(()=>{
            props.dispatch(getCountries())
        },[])
  return (
    <div className='betterview'>
        <h1>Countries....</h1>
        <ul>
            {
                props.countries.countries.map((country)=>{
                    return (<li>{country.name}</li>)
                })
            }
        </ul>
    </div>
  )
}

export default connect(store=>store)(Countries)

