import React from 'react'
import CommentCardBottomStats from './CommentCardBottomStats'
import CommentCardTopMetaStats from './CommentCardTopMetaStats'
import CommentDisplayArea from './CommentDisplayArea'

function CommentCard() {
    return (
        <div className="card-Wrapper">
            <CommentCardTopMetaStats></CommentCardTopMetaStats>
            <CommentDisplayArea></CommentDisplayArea>
            <CommentCardBottomStats></CommentCardBottomStats>
            
        </div>
    )
}

export default CommentCard
