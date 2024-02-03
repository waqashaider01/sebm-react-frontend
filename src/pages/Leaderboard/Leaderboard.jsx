import React, { useState } from 'react';
import styles from './index.module.css';
import Timer from '../../components/Timer/Timer';

const Leaderboard = () => {
    const [Table, setTable] = useState([0, 0, 0, 0, 0, 0]);
    return (
        <div className='inner-container'>
            <div data-aos="fade-in" className="container">
                <h1 className="title text-center"><span className='text-primary'>$10,000</span> Monthly Leaderboard</h1>
                <p className='text-center mx-auto' style={{ maxWidth: '600px' }}>All players who use my link to 500.casino or Code "SEBM" will be eligible to prizes on this Exclusive Leaderboard. Updates every 30 minutes.</p>
                <p className='text-center'>1M XP ~ $600</p>
            </div>
            <div className="container">
                <div className="row my-5 pt-5">
                    <div data-aos="fade-down" data-aos-delay="100" className="col-md-4">
                        <div className={`${styles.card} card my-2`}>
                            <div className="card-header-half">2</div>
                            <h3 className="card-title text-center fw-bold">SEBM1337</h3>
                            <p className='fw-bold text-center py-3'>
                                Wagered:
                                <br />
                                <span className='text-outline-primary'>$22,450.87</span>
                            </p>
                            <a href="#" className="btn btn-primary mt-2">Price: $2,500</a>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="col-md-4">
                        <div className={`${styles.card} card scaled my-2`}>
                            <div className="card-header-half">1</div>
                            <h3 className="card-title text-center fw-bold">ZyonStuff</h3>
                            <p className='fw-bold text-center py-3'>
                                Wagered:
                                <br />
                                <span className='text-outline-primary'>$28,820.17</span>
                            </p>
                            <a href="#" className="btn btn-primary mt-2">Price: $5,000</a>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="200" className="col-md-4">
                        <div className={`${styles.card} card my-2`}>
                            <div className="card-header-half">3</div>
                            <h3 className="card-title text-center fw-bold">TheSuspect</h3>
                            <p className='fw-bold text-center py-3'>
                                Wagered:
                                <br />
                                <span className='text-outline-primary'>$19,820.17</span>
                            </p>
                            <a href="#" className="btn btn-primary mt-2">Price: $1,000</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <Timer
                            hour={2}
                            minute={1}
                            day={3}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Wagered</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Table.map((v, k) => {
                                            return <tr data-aos="fade-right" data-aos-delay={k*200} data-aos-offset={-k*200} key={k}>
                                                <td><div className='table-index'>1</div></td>
                                                <td>User1From500</td>
                                                <td>$11,280.17</td>
                                                <td className='text-primary'>$500</td>
                                            </tr>;
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;
