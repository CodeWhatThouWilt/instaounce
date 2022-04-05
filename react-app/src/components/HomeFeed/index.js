import './HomeFeed.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowedPosts } from '../../store/posts';
import HomeFeedCard from '../HomeFeedCard';

const HomeFeed = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)

    const [posts, setPosts] = useState([]);


    const followedPosts = useSelector(state => {
        return state.feedState.followedPosts
    })
    useEffect(() => {
        dispatch(getFollowedPosts()).then(() => setIsLoaded(true))
    }, [dispatch])



    return (
        <div className='home-feed-body'>
            {isLoaded &&
                <div className='home-feed-list'>
                    {followedPosts.map(post => (
                            <HomeFeedCard key={post.id} post={post} />
                        ))}
                </div>}
        </div>
    )
};

export default HomeFeed;