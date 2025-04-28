import '../../assets/css/tick.css'
import { Header } from '../Header'
import tick_sort from '../../assets/images/sort.svg'
import tick_filter from '../../assets/images/filter.svg'
import tick_profile from '../../assets/images/jon.svg'
export default function Tickets() {
  return (
    <>
      <Header text='Tickets' />
      <main>
        <section className='tick'>
          <div className="container">
            <div className="tick_box">
              <div className="tick_head">
                <h1 className="tick_title">All Tickets</h1>
                <div className="tick_head_wrap">
                  <div className="tick_head_wraps">
                    <img src={tick_sort} alt="" />
                    <p className="tick_suptitle">Sort</p>
                  </div>
                  <div className="tick_head_wraps">
                    <img src={tick_filter} alt="" />
                    <p className="tick_suptitle">Sort</p>
                  </div>
                </div>
              </div>
              <div className="tick_main">
                <div className="tick_main_wrap">
                  <div className="tick_main_start">
                    <p className="tick_main_grey_text tick_details">Ticket details</p>
                    <p className="tick_main_grey_text tick_name">Customer name</p>
                    <p className="tick_main_grey_text tick_date">Date</p>
                    <p className="tick_main_grey_text tick_priority">Priority</p>
                  </div>
                  <hr className="tick_hr" />
                  <ul className="tick_main_list">
                    <li className="tick_main_li">
                      <img src={tick_profile} alt="" />
                      <div className="tick_main_texts">
                        <p className="tick_main_email">Contact Email not Linked</p>
                        <p className="tick_main_day">Updated 1 day ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
