import React from "react";
import MagicScrollButton from "../../components/MagicScrollButton/MagicScrollButton";
import arrow from "../../assets/images/rewards/arrow.png";

function Rewards() {
    return (
        <>
            <div className="inner-container">
                <div className="container my-2">
                    <h1 data-aos="fade-down" class="title text-center">
                        <span class="text-primary">Over $16,000 in</span> Level Up Rewards
                    </h1>
                    <p data-aos="fade-down" className="text-center mb-5">
                        if the deposit Bonuses / Leaderboard and Cashback of 500.casino
                        isn't enough for you, here are Level Rewards. <br /> If you signed
                        up under Code "SEBM" you will have access to these{" "}
                        <span class="text-primary text-center">
                            EXCLUSIVE Level Up Rewards
                        </span>
                    </p>
                    <div data-aos="fade-right" className="row my-5">
                        <div className="col-md-3 my-2">
                            <div className="card bgc1 p-2">
                                <p class="text-center fs-2 fw-bold">Level 300</p>
                                <div className="">
                                    <p className="text-primary fw-bolder text-center text-over-shade">
                                        $25
                                    </p>
                                    <p className="text-shade text-center">$25</p>

                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <button className="btn btn-primary w-100">
                                            Earn Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-2 align-self-center">
                            <img className="img-fluid" src={arrow} alt="" />
                        </div>
                        <div className="col-md-3 my-2">
                            <div className="card bgc1 p-2">
                                <p class="text-center fs-2 fw-bold">Level 400</p>
                                <div className="">
                                    <p className="text-primary fw-bolder text-center text-over-shade">
                                        $50
                                    </p>
                                    <p className="text-shade text-center">$50</p>

                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <button className="btn btn-primary w-100">
                                            Earn Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-2 align-self-center">
                            <img className="img-fluid" src={arrow} alt="" />
                            <p class="text-center fs-2 fw-bold">Level 500-600</p>
                        </div>
                    </div>
                    <div className="my-2 mb-5 pb-5 d-flex justify-content-center align-items-center">
                        <MagicScrollButton />
                    </div>
                    <p className="mt-5 text-center pt-5">
                        <span className="text-primary">Scroll down</span> to reveal Level Up Rewards with a total value of <span className="text-primary ">over $16000</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Rewards;