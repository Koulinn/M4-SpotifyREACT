import React from 'react'
import CommentCardBottomStats from './CommentCardBottomStats'
import CommentCardTopMetaStats from './CommentCardTopMetaStats'
import CommentTextArea from './CommentDisplayArea'

function CommentCard() {
    return (
        <div className="card-Wrapper">
            <CommentCardTopMetaStats></CommentCardTopMetaStats>
            <CommentTextArea></CommentTextArea>
            <CommentCardBottomStats></CommentCardBottomStats>
            
        </div>
    )
}

export default CommentCard
