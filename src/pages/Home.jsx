import Searchbar from "../components/Searchbar"
import classes from './Home.module.css'

const Home = () => {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes['btn-container']}>
                    <button className='btn-text'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path></svg><span>Hotels</span></button>
                    <button className='btn-text'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg><span>Late-Night deals</span></button>
                </div>

                <div>
                    <p className={classes['text-lg']}>Relax and Search for your next hotel stay.</p>
                    <p className={classes['text-sm']}>Find affordable hotel deals and everything in-between.</p>
                </div>
            </header>
            <div>
                <Searchbar />
            </div>
        </div>
    )
}

export default Home
