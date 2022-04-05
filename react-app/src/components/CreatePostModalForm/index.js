import { useState, useEffect } from 'react';
import postsReducer from '../../store/posts';
import "./index.css"

function CreatePostModalForm() {
    const [photos, setPhotos] = useState([])
    const [photoIndex, setPhotoIndex] =useState(0)
    const [photoExist, setPhotoExist] = useState(false)
    const [showMorePhotos, setShowMorePhotos] = useState(false)
    const [photoFinished, setPhotoFinished] = useState(false)
    const [caption, setCaption]  = useState('')


    const updateImageFirst = (e)=>{
        const file = e.target.files[0]
        setPhotos([...photos, file])
        setPhotoExist(true)
    }
    const updateImage = (e)=>{
        const file = e.target.files[0]
        setPhotos([...photos, file])
    }

    const updateCaption = (e) =>{
        setCaption(e.target.value)
    }
    const handlePostSubmit = () =>{

    }





    return (
        <div className='create-post-form-container'>
            {photoExist && photoFinished&&
            <div className='adding-caption-container'>
                <div className='top-adding-caption-nav'>
                    <div className='adding-caption-back-button'>

                    </div>
                    <div>
                        Create New Post
                    </div>
                    <div>
                        <button type='button' onClick={handlePostSubmit}>
                            Share
                        </button>
                    </div>
                </div>
                <div className='finished-photos-bottom-container'>
                    <div>
                        <img src={URL.createObjectURL(photos[0])}></img>
                    </div>
                    <div className='captions-adding-form'>
                        <form>
                            <input
                            type = 'textarea'
                            id='add-a-caption-input'
                            rows='20'
                            columns='30'
                            value = {caption}
                            onChange={updateCaption}>
                            </input>
                        </form>
                    </div>
                </div>
            </div>
            }
            {photoExist &&
            <div className='photo-exists-modal'>
                <div className='top-photos-nav'>
                    <div className='photos-back-button'>
                    </div>
                    <div>
                        Your photos
                    </div>
                    <div className='next-photos-button'>
                        <button type='button' onClick={() =>setPhotoFinished(true)}>
                            Next
                        </button>
                    </div>
                </div>
                <div>
                    <img src ={URL.createObjectURL(photos[photoIndex])}></img>
                    <button type='button' onClick={() => setShowMorePhotos(true)}>
                        Add more photos
                    </button>
                    {showMorePhotos &&
                    <div className='add-more-photos-button'>
                        {photos.map((ele,i) =>{
                            return (
                                <div key ={i} className='photo-preview'>
                                    <img src ={URL.createObjectURL(ele)}></img>
                                </div>
                            )
                        })}
                        <input
                        type='file'
                        accept='image/*'
                        id='add-more-photos'
                        onChange={updateImage}
                            >
                        </input>
                    </div>}
                </div>

            </div>}
            {!photoExist&&
            <div className='photo-absent-modal'>
                <div >
                    Create New Post
                </div>
                <div>
                    <form>
                        <input
                        type='file'
                        required
                        accept='image/*'
                        id='add-photo-1'
                        onChange={updateImageFirst}>
                        </input>
                    </form>
                </div>
            </div>}
        </div>

    )
}
export default CreatePostModalForm;
