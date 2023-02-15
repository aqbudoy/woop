

function Scheduling() {
    return(
        <div className="row w-100 m-0 p-0">
            <div className="col-4">
                <div className="card level1-indicator">
                    <h5 className="card-title mb-4 text-center text-semibold">Pending</h5>
                    <div className="card-body">
                        <div className="card-toast">
                            Contents
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className="slot">
                    <div className="card-toast contents">
                        Contents
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row w-100 m-0 mb-5 p-0">
                    <div className="col-12">
                        <div className="card level2-indicator">
                            <h5 className="card-title mb-4 text-semibold">
                                <span className="d-inline-block w-100 text-center ">On-going</span>
                                <a className="card-link text-end">
                                    Show All
                                </a>
                            </h5>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row w-100 m-0 p-0">
                    <div className="col-12">
                        <div className="card level3-indicator">
                            <h5 className="card-title mb-4 text-semibold">
                                <span className="d-inline-block w-100 text-center ">Completed</span>
                                <a className="card-link text-end">
                                    Show All
                                </a>
                            </h5>
                            <div className="card-body">
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scheduling;