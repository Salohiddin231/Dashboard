import '../../assets/css/boxsi.css'

export function Boxsi() {
    return (
        <li className='boxsi_li'>
            <div className="boxsi_wrap1">
            <h3 className='boxsi_title'>Unresolved tickets</h3>
            <p className='boxsi_suptitle'>View details</p>
            </div>
            <p className='boxsi_grey_text'>Group: <span>Support</span></p>
            <div className="boxsi_wrap2">
                <p className='boxsi_info'>Waiting on Feature Request</p>
                <p className='boxsi_state'>4238</p>
            </div>
            <hr className='boxsi_hr' />
            <div className="boxsi_wrap2">
                <p className='boxsi_info'>Awaiting Customer Response</p>
                <p className='boxsi_state'>1005</p>
            </div>
            <hr className='boxsi_hr' />
            <div className="boxsi_wrap2">
                <p className='boxsi_info'>Awaiting Developer Fix</p>
                <p className='boxsi_state'>914</p>
            </div>
            <hr className='boxsi_hr' />
            <div className="boxsi_wrap2">
                <p className='boxsi_info'>Pending</p>
                <p className='boxsi_state'>281</p>
            </div>
            <hr className='boxsi_hr' />
        </li>
    )
}
