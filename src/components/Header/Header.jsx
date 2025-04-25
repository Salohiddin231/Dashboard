import './header.css'
import search from '../../assets/images/search.svg'
import sub from '../../assets/images/sub2.svg'
import jon from '../../assets/images/jon.svg'

export function Header(props) {
    return (
        <header className='header'>
            <div className="container">

                <div className="header_wrapper">
                    <h2 className="header_pagesName">{props.text}</h2>


                    <div className="header_left_wrapper">
                        <div className="header_search_wrapper">
                            <img src={search} alt={search} />
                            <img src={sub} alt={sub} />
                        </div>
                        <hr className='header_hr' />
                        <div className="header_jon_wrapper">
                            <p className="header_text">Jones Ferdinand</p>
                            <img src={jon} alt={jon} />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}
