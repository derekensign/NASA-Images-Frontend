import axios from 'axios'

const Homepage = (props) => {


console.log(`${process.env.REACT_APP_NASA_APOD_API_URL}`)

    const getAPOD = async () => {

        try {
        let apod = await axios.get(`${process.env.REACT_APP_NASA_APOD_API_URL}`)

        return apod

        } catch (error) {
        console.log(error)
        }

    }
    const apodData = getAPOD()

        return (
            <div>
                {/* <h2>{apodData.data.title}</h2>
                <img src={apodData.data.url}/>
                <p>{apodData.data.explanation}</p> */}
    
            </div>
        )


}

export default Homepage
