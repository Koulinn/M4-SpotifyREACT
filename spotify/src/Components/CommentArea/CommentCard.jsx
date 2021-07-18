import React from 'react'
import CommentCardTopMetaStats from './CommentCardTopMetaStats'
import CommentTextArea from './CommentTextArea'

function CommentCard() {
    return (
        <div className="card-Wrapper">
            <CommentCardTopMetaStats></CommentCardTopMetaStats>
            <CommentTextArea></CommentTextArea>
            
        </div>
    )
}

export default CommentCard
