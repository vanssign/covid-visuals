import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import RenderNews from './NewsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCases, fetchTests, fetchNews } from "../redux/ActionCreaters";
import Statewise from './StatewiseComponent';


const mapStateToProps = state => {
    return {
        cases: state.cases,
        tests: state.tests,
        news: state.news
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchCases: () => dispatch(fetchCases()),
    fetchTests: () => dispatch(fetchTests()),
    fetchNews: () => dispatch(fetchNews())
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchCases();
        this.props.fetchTests();
        this.props.fetchNews();
    }

    render() {
        const HomePage = () => {
            return (
                <div className="container-2">
                    <Home cases={this.props.cases.cases}
                        isLoading={this.props.cases.isLoading}
                        errMess={this.props.cases.errMess}
                        tests={this.props.tests.tests}
                        testsisLoading={this.props.tests.isLoading}
                        testserrMess={this.props.tests.errMess}
                    />
                </div>
            )
        }
        const StatewisePage = () => {
            return (
                <div className="container-2">
                    <Statewise cases={this.props.cases.cases}
                        isLoading={this.props.cases.isLoading}
                        errMess={this.props.cases.errMess} />
                </div>
            )
        }
        const NewsWithId = ({ match }) => {

            return (
                <div className="container-2">
                <RenderNews
                    indexCount={parseInt(match.params.newsId, 10)}
                    news={this.props.news.news.filter((allNews, index) => index == [parseInt(match.params.newsId, 10)])}
                    isLoading={this.props.news.isLoading}
                    errMess={this.props.news.errMess}

                />
                </div>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route path="/home/state-wise" component={StatewisePage} />
                    <Route exact path="/about" component={() => <About />} />
                    <Route path="/news/:newsId" component={NewsWithId} defaultParams={{ newsId: 0 }} />
                    <Redirect to="/news/0" />
                </Switch>

            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
