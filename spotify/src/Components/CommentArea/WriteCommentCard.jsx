import React from 'react'
import WriteCommentArea from './WriteCommentArea'
import CommentCardTopMetaStats from './CommentCardTopMetaStats'
import PublishCommentBtn from './PublishCommentBtn'

function WriteCommentCard() {
    return (
        <div className="card-Wrapper">
        <CommentCardTopMetaStats isTextArea={true}></CommentCardTopMetaStats>
        <WriteCommentArea></WriteCommentArea>
        <PublishCommentBtn></PublishCommentBtn>
       
        
    </div>
    )
}

export default WriteCommentCard
