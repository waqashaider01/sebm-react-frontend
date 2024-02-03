import React, { useState, useEffect } from "react";
import thumbnail_1 from "../../assets/images/videos/thumbnail_1.png";
import thumbnail_2 from "../../assets/images/videos/thumbnail_2.png";

function Videos() {
    const [TwitchVideos, setTwitchVideos] = useState([0, 0]);
    const [YoutubeVideos, setYoutubeVideos] = useState([0, 0, 0, 0]);

    return (
        <>
            <div className="inner-container">
                <div className="container my-2">
                    <h1 className="title text-center">
                        <span className="text-primary">Biggest </span>Wins
                    </h1>
                    <p className="text-center mb-5">
                        Checkout some of my biggest wins here!
                    </p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="youtube-tab" data-bs-toggle="tab" data-bs-target="#youtube" type="button" role="tab" aria-controls="youtube" aria-selected="false">Youtube</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="twitch-tab" data-bs-toggle="tab" data-bs-target="#twitch" type="button" role="tab" aria-controls="twitch" aria-selected="true">Twitch</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="youtube" role="tabpanel" aria-labelledby="youtube-tab"><div className="row mt-4 mb-5">
                            {
                                YoutubeVideos.map((v, k) => {
                                    return <div key={k} data-aos={(k % 2 == 0) ? 'fade-right' : 'fade-left'} className="col-md-6">
                                        <div className="vCard">
                                            <img className="img-fluid" src={thumbnail_1} alt="" />
                                            <p className="mt-1 fst-italic mb-0 ">
                                                WORLDS *FIRST* MAX WIN ON NET GAINS!
                                            </p>
                                            <div className="mb-2 d-flex">
                                                <p className="text-muted fw-bold">Date: 09.12.2022</p>
                                                <p className="text-muted fw-bold ms-4">Win: $15,000</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div></div>
                        <div className="tab-pane fade show active" id="twitch" role="tabpanel" aria-labelledby="twitch-tab"><div className="row mt-4 mb-5">
                            {
                                TwitchVideos.map((v, k) => {
                                    return <div key={k} data-aos={(k % 2 == 0) ? 'fade-right' : 'fade-left'} className="col-md-6">
                                        <div className="vCard">
                                            <img className="img-fluid" src={thumbnail_1} alt="" />
                                            <p className="mt-1 fst-italic mb-0 ">
                                                WORLDS *FIRST* MAX WIN ON NET GAINS!
                                            </p>
                                            <div className="mb-2 d-flex">
                                                <p className="text-muted fw-bold">Date: 09.12.2022</p>
                                                <p className="text-muted fw-bold ms-4">Win: $15,000</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div></div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Videos;