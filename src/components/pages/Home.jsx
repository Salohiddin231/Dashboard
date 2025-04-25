import React from 'react'
import { Header } from '../Header/Header'
import { CardItem } from '../CardItem'
import { CardItemTwo } from '../CardItemTwo'
import '../../assets/css/card.css'
import '../../assets/css/trend.css'
export default function Home() {
    return (
        <div>
            <Header text='overview' />
            <section className="card">
                <div className="container">
                    <div className="card_wrapper">
                        <CardItem title='Unresolved' num='60' />
                        <CardItem title='Overdue' num='16' />
                        <CardItem title='Open' num='43' />
                        <CardItem title='On hold' num='64' />
                    </div>
                </div>
            </section>

            <section className="trend">
                <div className="container">
                    <div className="trend_left_right">
                        <div className="trend_left_right">
                            <div className="trend_left">
                                <div className="trend_box">
                                    <div className="trend_text_wrapper">
                                        <div className="trend_first_text">
                                            <h3 className="trend_title">Today’s trends</h3>
                                            <p className="trend_subtitle">as of 25 May 2019, 09:41 PM</p>
                                        </div>
                                        <div className="trend_second_text">
                                            <p className='trend_hr'>
                                                <hr />
                                                Today
                                            </p>
                                            <p className='trend_hr2'>
                                                <hr />
                                                Yesterday
                                            </p>
                                        </div>
                                    </div>
                                    <input className='trend_inp' type="text" />
                                </div>
                            </div>
                            <div className="trend_right">
                                <CardItemTwo title='Resolved' num='449' />
                                <CardItemTwo title='Received' num='426' />
                                <CardItemTwo title='Average first response time' num='33m' />
                                <CardItemTwo title='Average response time' num='3h 8m' />
                                <CardItemTwo title='Resolution within SLA' num='94%
                                ' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
        </div>
    )
}
