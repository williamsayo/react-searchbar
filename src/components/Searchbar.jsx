import { useState } from "react"
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Searchbar = ({param}) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState({ adult: 1, children: 0, rooms: 1 })

  const handleShowMenu = () => {
    setToggleMenu(prevState => !prevState);
  }

  const locationInput = (e) => {
    setLocation(e.target.value)
  }

  const dateInput = (e) => {
    setDate(e.target.value)
  }

  const handleClick = (value, text) => {
    setGuests(prevState => {
      if (value === '-' && prevState[text] != 0) {
        return { ...prevState, [text]: prevState[text] - 1 }
      }
      if (value === '-' && prevState[text] === 0) {
        return prevState
      }
      else {
        return { ...prevState, [text]: prevState[text] + 1 }
      }
    })
  }

  const handleSubmit = async () => {
    navigate(`/search?location=${location}&date=${date}&guests=${guests.adult + guests.children}&rooms=${guests.rooms}`);
  }

  return (
    <div className='card'>
      <form onSubmit={handleSubmit} method='GET'>
        <div className='input-container location'>
          <input required type="text" value={location} onChange={locationInput} placeholder="Where are you going?" name="Destination" />
          <label className="label" htmlFor="Destination"> Destination</label>
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22 21H2V19H3V4C3 3.44772 3.44772 3 4 3H18C18.5523 3 19 3.44772 19 4V9H21V19H22V21ZM17 19H19V11H13V19H15V13H17V19ZM17 9V5H5V19H11V9H17ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM7 7H9V9H7V7Z"></path></svg>
        </div>
        <div className='input-container date'>
          <input required value={date} onChange={dateInput} type="date" />
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 8H4V19H20V8ZM15.0355 10.136L16.4497 11.5503L11.5 16.5L7.96447 12.9645L9.37868 11.5503L11.5 13.6716L15.0355 10.136Z"></path></svg>
        </div>
        <div className='input-container guests'>
          <button className="multiselect" type="button" onClick={handleShowMenu}> {guests.rooms} Room(s) - {guests.adult + guests.children} Guest(s) </button>
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
          {toggleMenu &&
            <div className="guest-dropdown">
              <ul>
                <li>
                  <div>
                    <p>Adults</p>
                    <p> `&gt;`12years</p>
                  </div>
                  <div className="btn-container">
                    <Button text={'adult'} value={'-'} handleOnClick={handleClick} />
                    <span> {guests.adult}</span>
                    <Button text={'adult'} value={'+'} handleOnClick={handleClick} />
                  </div>
                </li>
                <li>
                  <div>
                    <p>Children</p>
                    <p> 2-12 years</p>
                  </div>
                  <div className="btn-container">
                    <Button text={'children'} value={'-'} handleOnClick={handleClick} />
                    <span> {guests.children}</span>
                    <Button text={'children'} value={'+'} handleOnClick={handleClick} />
                  </div>
                </li>
                <li>
                  <div>
                    <p>Rooms</p>
                    <p> number</p>
                  </div>
                  <div className="btn-container">
                    <Button text={'rooms'} value={'-'} handleOnClick={handleClick} />
                    <span> {guests.rooms}</span>
                    <Button text={'rooms'} value={'+'} handleOnClick={handleClick} />
                  </div>
                </li>
              </ul>
            </div>
          }
        </div>
        <div className="input-container">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
          <button className="search-button">Search </button>
        </div>
      </form>
    </div>
  )
}

export default Searchbar
