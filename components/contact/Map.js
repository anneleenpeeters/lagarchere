import ReactMapGL, {Marker} from "react-map-gl"
import {useState} from "react"
import mapboxlogo from '../../images/mapbox_logo.png'

function Map () {
    const maptoken = "pk.eyJ1IjoiYW5uZWxlZW5wZWV0ZXJzIiwiYSI6ImNrYXd5d2QxYjAxNGgyeW5pNTJhaDdoMXEifQ.ls-zfu0zpOvHmm_xWvClfw"
    const [viewport, setViewport]= useState({
        latitude: 46.86702346801758,
        longitude: 4.08235502243042,
        width: '100vw',
        height: '600px',
        zoom: 14
    })

    return(
        <div>
            <ReactMapGL
                {...viewport} 
                mapboxApiAccessToken={maptoken} 
                mapStyle="mapbox://styles/anneleenpeeters/ckbau3sns00mm1ir3ghx6aya1"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                <Marker latitude={46.86702346801758} longitude={4.08235502243042}>
                    <div>
                        <img src={mapboxlogo} className="mapbox-logo"/>
                    </div>
                </Marker>
            </ReactMapGL>
            <style jsx>{`
                .mapbox-logo { width: 150px; }
            `}</style>
        </div>
    )
}

export default Map;
