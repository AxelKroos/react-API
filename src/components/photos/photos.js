import React from 'react'
import classes from './photos.module.css'
import {connect} from "react-redux";
import {asyncGetPhoto} from "../../store/actions/actions";

class Photos extends React.Component {

    componentWillMount() {
        this.props.fetchData('https://api.nasa.gov/planetary/apod?api_key=kWpy5uGqeEmUFVjpOvAUPq1131uqVKeFd17d4d03')
    }

    render() {

        const photos = this.props.data.map((elem) => {

            return (
                <div className={classes.block}>
                    <p>{elem.title}</p>
                    <div className={classes.image}>
                        <a href={elem.src}><img src={elem.img}/></a>
                    </div>
                    <p>{elem.description}</p>
                </div>
            )
        })

        return (
            <div>
                {photos}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.currentInfo.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (url) => {
            const currentInfo = async () => {
                const api_url = await fetch(url)
                const data = await api_url.json()
                dispatch(asyncGetPhoto(data))
            }
            currentInfo()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
