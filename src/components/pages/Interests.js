import React, { useState, useCallback } from 'react'
import './Interests.css'
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
import space_music from '../../assets/images/interests/music/space-music.png'
import Gallery from "react-photo-gallery";
import { photos } from "../DogImages";
import Zoom from 'react-reveal/Zoom';
import Carousel, { Modal, ModalGateway } from "react-images";

function Interests() {

    const [needleAnimate, setNeedleAnimate] = useState(false);
    const [recordAnimate, setRecordAnimate] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const getSelectedRecordData = useCallback(() => {
        let record_image = null;
        let concert_image = null;
        let title = "";
        let description = "";
        let name = "";

        if (selectedRecord === "metallica") {
            record_image = metallica_record
            concert_image = metallica_concert
            title = "Metallica - 22 Jan 2017"
            description = "Metallica performed at the Singapore Indoor Stadium as part of their WorldWired Tour in 2017. It As a huge Metallica fan, this was undoubtedly the most memorable concert I have ever attended."
            name = "Metallica"
        } else if (selectedRecord === "gnr") {
            record_image = gnr_record
            concert_image = gnr_concert
            title = "Guns N Roses - 25 Feb 2017"
            description = "Guns N Roses performed at the Changi Exhibition Centre Singapore as part of their Not in This Lifetime Tour in 2017. I was incredibly fortunate to witness Given Axl Rose, Slash, and Duff McKagan perform together after more than 25 years apart!"
            name = "Guns N Roses"
        } else if (selectedRecord === "rhcp") {
            record_image = rhcp_record
            concert_image = rhcp_concert
            title = "Red Hot Chili Peppers - 22 Sep 2019"
            description = "Red Hot Chili Peppers performed at The Padang as part of the Formula 1 Singapore Grand Prix in 2019. Their energertic set consisting of hits from various albums definitely left me wanting for more."
            name = "Red Hot Chili Peppers"
        } else if (selectedRecord === "queen") {
            record_image = queen_record
            concert_image = queen_concert
            title = "Queen + Adam Lambert - 17 Sep 2016"
            description = "Queen and Adam Lambert performed at The Padang as part of the Formula 1 Singapore Grand Prix in 2016. I was thrilled to see original band members like Brian May perform all the crowd favourites!"
            name = "Queen + Adam Lambert"
        } else if (selectedRecord === "muse") {
            record_image = muse_record
            concert_image = muse_concert
            title = "Muse - 21 Sep 2019"
            description = "Muse performed at The Padang as part of the Formula 1 Singapore Grand Prix in 2019. They put on an electrifying performance consisting of songs from their latest album as well as their older hits."
            name = "Muse"
        } else if (selectedRecord === "shinoda") {
            record_image = shinoda_record
            concert_image = shinoda_concert
            title = "Mike Shinoda - 22 Aug 2018"
            description = "Mike Shinoda performed at Zepp @ BigBox Singapore as part of his Post Traumatic Tour in 2018. After Chester Bennington's untimely death, I was glad to be able to watch Mike Shinoda perform some Linkin Park crowd favourites as well as his solo projects!"
            name = "Mike Shinoda"
        } else {
            record_image = null;
            concert_image = null;
            title = "";
            description = "";
            name = "";
        }
        return {
            record_image: record_image,
            concert_image: concert_image,
            title: title,
            description: description,
            name: name
        }
    }, [selectedRecord])

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

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }, []);

    return (
        <div className='interests-wrapper' id='interests'>
            <h1 className='interests-header'>
                Interests
            </h1>
            <div className='music-wrapper'>
                <div className='music-header'>
                    Music

                    <Zoom left duration={1500}>
                        <img className='space-music-image' src={space_music} alt='music' />
                    </Zoom>
                </div>
                <div className='music-description'>
                    Whether it is the aggressive riffs of Metallica or the dreamy vocals of Radiohead,
                    listening to and playing music is a cathartic experience for me.
                    I have been incredibly fortunate to watch some of my favourite artists perform live—here are some of the most memorable concerts I have attended:
                </div>
                <div className='turntable-container'>
                    <div className='turntable-wrapper'>
                        {selectedRecord ? (
                            <img className={`selected-record-image ${recordAnimate ? 'animate-record' : ''}`} src={getSelectedRecordData().record_image} alt={`${getSelectedRecordData().name} record`} />
                        ) : (
                            <div className='turntable-instructions'>click on any of the records to view more details!</div>
                        )
                        }
                        <img className={needleAnimate ? "needle-image animate-needle" : "needle-image"} onAnimationEnd={() => { setRecordAnimate(true) }} src={needle_image} alt="needle" />
                    </div>

                    <div className='record-catalog'>
                        <img className={`record-img ${selectedRecord === "queen" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "queen") }} src={queen_record} alt='Queen record' />
                        <img className={`record-img ${selectedRecord === "metallica" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "metallica") }} src={metallica_record} alt="Metallica record" />
                        <img className={`record-img ${selectedRecord === "gnr" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "gnr") }} src={gnr_record} alt="Guns N Roses Record" />
                        <img className={`record-img ${selectedRecord === "shinoda" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "shinoda") }} src={shinoda_record} alt="Mike Shinoda Record" />
                        <img className={`record-img ${selectedRecord === "muse" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "muse") }} src={muse_record} alt="Muse record" />
                        <img className={`record-img ${selectedRecord === "rhcp" ? 'selected-record' : ''}`} onClick={(e) => { onRecordClick(e, "rhcp") }} src={rhcp_record} alt="Red Hot Chili Peppers Record" />
                        <div className='catalog-instructions'>click on any of the records to view more details!</div>
                    </div>
                </div>
                <div className='concert-wrapper' style={{ display: recordAnimate ? 'flex' : 'none' }}>
                    <img className='concert-img' src={getSelectedRecordData().concert_image} alt={`${getSelectedRecordData().name} concert`} />
                    <div className='concert-title'>{getSelectedRecordData().title}</div>
                    <div className='concert-description'>{getSelectedRecordData().description}</div>
                </div>
            </div>
            <div className='dogs-wrapper'>
                <div className='dogs-header'>
                    Dogs
                    <Zoom right duration={1500}>
                        <img className='space-dog-image' src={space_dog} alt='space dog' />
                    </Zoom>
                </div>
                <div className='dogs-description'>
                    I am passionate about issues surrounding animal welfare.
                    In my free time, I volunteer at a local dog shelter that rehabilitates and rehomes stray dogs.
                    Here are pictures of some of the dogs I have interactive with:
                </div>
                <div className='dog-images-container'>
                    <Gallery photos={photos} className='dog-images-container' onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>

        </div>
    )
}

export default Interests
