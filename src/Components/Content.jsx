import React, { useEffect, useState } from 'react'
import HelperCard from './HelperCard'
import { CardGroup, Container, Row } from 'react-bootstrap'

const Content = React.memo(({category, set}) => {

    const API_KEY = '384098e1d41745668c8bf2f3a05e0fc7'

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        try {
            async function getData(){
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
                if(!response.ok){
                    setError(true)
                }
                const resData = await response.json()
                if(resData.totalResults === 0){
                    setError(true)
                }
                const {articles} = resData
                setData(articles)
                setIsLoading(false)
            }

            getData()
        } catch (err) {
            console.log(err);
        }
    },[category])

    if(isLoading){
        return (
            <>
                <div className='d-flex justify-content-center align-items-center' style={{height : '100vh', width : '100vw'}}>
                    <span className="spinner-border"></span>
                    <span className='ms-2'>Loading Please Wait</span>
                </div>
            </>
        )
    }

    if(error){
        return (
            <>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{height : '100vh', width : '100vw'}}>
                    <p>Oops Error Occured!</p>
                    <button className='btn btn-success' onClick={()=> set('general')}>Retry</button>
                </div>
            </>
        )
    }


    return (
      <>
        {data && <CardGroup>
            <Container fluid>
                <Row >
                    {data.map((d, i)=>{
                        return <HelperCard key={i} 
                            imgUrl = {d.urlToImage}
                            title = {d.title}
                            des = {d.description}
                            srcName = {d.source.name}
                            url = {d.url}
                            pAt = {d.publishedAt}
                        />
                    })} 
                </Row>
            </Container>
        </CardGroup>}

      </>
    )
  })

export default Content