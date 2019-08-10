import React from 'react';


class Content extends React.Component {
    render() {
        return (
            <div className="row mb-2">


                <div className="col-md-6 course_1">
                    <div
                        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Course 1</h3>
                            <div className="mb-1 text-muted">Start date: 2019-09-13 12:00</div>
                            <p className="card-text mb-auto">Description 1</p>
                            <a href="#" className="stretched-link">Подробнее</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" src="/static/img/course/im.jpg" width="200"
                                 height="250"/>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 course_2">
                    <div
                        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Course 2</h3>
                            <div className="mb-1 text-muted">Start date: 2019-07-12 12:00</div>
                            <p className="card-text mb-auto">Desc 2</p>
                            <a href="#" className="stretched-link">Подробнее</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" src="/static/img/course/im2.jpg" width="200"
                                 height="250"/>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Content;