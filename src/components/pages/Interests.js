import React, { useState } from 'react'
import './Interests.css'
import turntable_image from '../../assets/images/interests/music/turntable.png'
import needle_image from '../../assets/images/interests/music/needle.png'
import rhcp_record from '../../assets/images/interests/music/rhcp-record.png'
import metallica_record from '../../assets/images/interests/music/metallica-record.png'
import gnr_record from '../../assets/images/interests/music/gnr-record.png'
import muse_record from '../../assets/images/interests/music/muse-record.png'
import queen_record from '../../assets/images/interests/music/queen-record.png'
import shinoda_record from '../../assets/images/interests/music/shinoda-record.png'
import rhcp_concert from '../../assets/images/interests/music/rhcp-concert.jpeg'
import metallica_concert from '../../assets/images/interests/music/metallica-concert.jpeg'
import gnr_concert from '../../assets/images/interests/music/gnr-concert.jpeg'
import muse_concert from '../../assets/images/interests/music/muse-concert.jpeg'
import queen_concert from '../../assets/images/interests/music/queen-concert.jpeg'
import shinoda_concert from '../../assets/images/interests/music/shinoda-concert.jpeg'
import space_dog from '../../assets/images/interests/dogs/space-dog.png'
import Gallery from "react-photo-gallery";
import { photos } from "../DogImages";
import Zoom from 'react-reveal/Zoom'

function Interests() {

    const [needleAnimate, setNeedleAnimate] = useState(false);
    const [recordAnimate, setRecordAnimate] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null)

    const getSelectedRecordData = () => {
        let record_image = null;
        let concert_image = null;
        let title = "";
        let description = "";

        if (selectedRecord === "metallica") {
            record_image = metallica_record
            concert_image = metallica_concert
            title = "Metallica - 22 Jan 2017"
            description = "Metallica performed at the Singapore Indoor Stadium as part of their Worldwired Tour in 2017. Being a huge Metallica fan, this was the most memorable concert I have ever attended!"
        } else if (selectedRecord === "gnr") {
            record_image = gnr_record
            concert_image = gnr_concert
            title = "Guns N Roses - 25 Feb 2017"
            description = "Guns N Roses performed at the Changi Exhibition Centre Singapore as part of their Not in This Lifetime Tour in 2017. Given that Axl Rose and Slash came together to perform after more than 25 years, I was incredibly fortunate to watch them perform!"
        } else if (selectedRecord === "rhcp") {
            record_image = rhcp_record
            concert_image = rhcp_concert
            title = "Red Hot Chili Peppers - 22 Sep 2019"
            description = "Red Hot Chili Peppers performed at The Padang as part of the Formula 1 Singapore Grand Prix in 2019. I was thrilled to be able to watch them perform songs from many different albums!"
        } else if (selectedRecord === "queen") {
            record_image = queen_record
            concert_image = queen_concert
            title = "Queen + Adam Lambert - 17 Sep 2016"
            description = "Queen and Adam Lambert performed at The Padang as part of the Formula 1 Singapore Grand Prix in 2016. I was thrilled to see original band members like Brian May perform all the crowd favourites!"
        } else if (selectedRecord === "muse") {
            record_image = muse_record
            concert_image = muse_concert
            title = "Muse - 21 Sep 2019"
            description = "Muse performed at The Padang as part of the Formula 1 Singapore Grand Prix in 2019. They put on a rather electrifying performance, during which they performed songs from both their older and newer albums! "
        } else if (selectedRecord === "shinoda") {
            record_image = shinoda_record
            concert_image = shinoda_concert
            title = "Mike Shinoda - 22 Aug 2018"
            description = "Mike Shinoda performed at Zepp @ BigBox Singapore as part of his Post Traumatic Tour in 2018. After Chester Bennington's untimely death, I was glad to be able to watch Mike Shinoda perform some Linkin Park crowd favourites as well as his solo projects!"
        } else {
            record_image = null;
            concert_image = null;
            title = "";
            description = "";
        }
        return {
            record_image: record_image,
            concert_image: concert_image,
            title: title,
            description: description
        }
    }

    const onRecordClick = (e, value) => {
        if (selectedRecord === value) {
            setSelectedRecord(null)
            setNeedleAnimate(false)
            setRecordAnimate(false);
        } else {
            setSelectedRecord(value)
            if (needleAnimate) {
                setNeedleAnimate(false)
                setRecordAnimate(false)
                setTimeout(() => {
                    setNeedleAnimate(true)
                }, 10)
            } else {
                setNeedleAnimate(true)
            }
        }
    }

    return (
        <div className='interests-wrapper' id='interests'>
            <h1 className='interests-header'>
                Interests
            </h1>
            <div className='music-wrapper'>
                <div className='music-header'>
                    Music
                </div>
                <div className='music-description'>
                    I listen to weird music. I get high listening to people scream. The adrenaline I get cannot be matched by any amount of weed I smoke.
                </div>
                <div className='turntable-container'>
                    <div className='turntable-wrapper'>
                        {selectedRecord ? (
                            <img className={`selected-record-image ${recordAnimate ? 'animate-record' : ''}`} src={getSelectedRecordData().record_image} />
                        ) : (
                            <div className='turntable-instructions'>click on any of the records to view more details!</div>
                        )
                        }
                        <img className={needleAnimate ? "needle-image animate-needle" : "needle-image"} onAnimationEnd={() => { setRecordAnimate(true) }} src={needle_image} />
                    </div>

                    <div className='record-catalog'>
                        <img className={`record-img ${selectedRecord === "queen" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "queen") }} src={queen_record} />
                        <img className={`record-img ${selectedRecord === "metallica" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "metallica") }} src={metallica_record} />
                        <img className={`record-img ${selectedRecord === "gnr" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "gnr") }} src={gnr_record} />
                        <img className={`record-img ${selectedRecord === "shinoda" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "shinoda") }} src={shinoda_record} />
                        <img className={`record-img ${selectedRecord === "muse" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "muse") }} src={muse_record} />
                        <img className={`record-img ${selectedRecord === "rhcp" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "rhcp") }} src={rhcp_record} />
                        <div className='catalog-instructions'>click on any of the records to view more details!</div>
                    </div>
                </div>
                <div className='concert-wrapper' style={{ display: recordAnimate ? 'flex' : 'none' }}>
                    <img className='concert-img' src={getSelectedRecordData().concert_image} />
                    <div className='concert-title'>{getSelectedRecordData().title}</div>
                    <div className='concert-description'>{getSelectedRecordData().description}</div>
                </div>
            </div>
            <div className='dogs-wrapper'>
                <div className='dogs-header'>
                    Dogs
                    <Zoom right duration={1000}>
                    <img className='space-dog-image' src={space_dog}/>
                    </Zoom>
                </div>
                <div className='dogs-description'>
                    I like dogs. The small ones are cute but the big ones are cuter. People who breed dogs should recieve a death sentence, and buying dogs should be illegal. Adopt don't shop.
                </div>
                <div className='dog-images-container'>
                    <Gallery photos={photos} className='dog-images-container' />
                </div>
            </div>

        </div>
    )
}

export default Interests
