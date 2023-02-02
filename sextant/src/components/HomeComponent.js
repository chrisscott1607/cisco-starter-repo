import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import Banner from './Banner'

function RenderPoints({point}) {  
    return (
        <Card>
            <CardBody>
                <div className='col-md'>
                    <CardTitle>Point-{point.key}</CardTitle>
                </div>  
                <CardText>{point.id}</CardText>    
            </CardBody>  
        </Card> 

    )         
}

function Home (props) {
    
    const pointCard = props.points.map(point => {
        return (
            <RenderPoints point={point} key={point.key}/>
        )
    })

    return (
        <div className="container" >      
            <Banner/>

            <div className='row'>
                {pointCard}
            </div>

            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            </a>
        </div>    
    )
}

export default Home 

