import React from 'react'

const VideoListItem = props => {
    const video = props.video;
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li className='list-group-item' onClick={() => props.onSelected(video)}>
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem
