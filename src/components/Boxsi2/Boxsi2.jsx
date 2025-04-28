import Plus from '../../assets/images/plus.svg'
import '../../assets/css/boxsi.css'

export function Boxsi2() {
    return (
        <li className='boxsi_li'>
            <div className="boxsi_wrap1">
                <h3 className='boxsi_title'>Tasks</h3>
                <p className='boxsi_suptitle'>View all</p>
            </div>
            <p className='boxsi2_grey_text'>Today</p>
            <div className="boxsi2_wrap2">
                <p className="boxsi2_grey_text">Create new task</p>
                <img src={Plus} alt="" />
            </div>
            <hr className='boxsi_hr'/>
            <div className="boxsi_wrap2">
                <input className='boxsi_checkbox' type='checkbox' />
                <p className="boxsi_info">Finish ticket update</p>
                <button className='boxsi2_btn_yellow boxsi2_btn'>Urgent</button>
            </div>
            <hr className='boxsi_hr'/>
            <div className="boxsi_wrap2">
                <input className='boxsi_checkbox' type='checkbox' />
                <p className="boxsi_info">Create new ticket example</p>
                <button className='boxsi2_btn_green boxsi2_btn'>New</button>
            </div>
            <hr className='boxsi_hr'/>
            <div className="boxsi_wrap2">
                <input className='boxsi_checkbox' type='checkbox' />
                <p className="boxsi_info">Update ticket report</p>
                <button className='boxsi2_btn_grey boxsi2_btn'>Default</button>
            </div>
            <hr className='boxsi_hr'/>
        </li>
    )
}
