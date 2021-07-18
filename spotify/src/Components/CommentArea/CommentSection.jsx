import React from 'react'
import CommentCard from './CommentCard'
import CommentSectionHeader from './CommentSectionHeader'
import CommentShowMoreInlineBtn from './CommentShowMoreInlineBtn'
import WriteCommentCard from './WriteCommentCard'
import CommentMenuOpen from './CommentMenuOpen'

function CommentSection() {
    return (
        <div id="Comment-Section" className="d-flex flex-column justify-content-center">
            <CommentSectionHeader></CommentSectionHeader>
            <div className="position-relative">
                <CommentCard></CommentCard>
                <CommentShowMoreInlineBtn></CommentShowMoreInlineBtn>
                <WriteCommentCard></WriteCommentCard>
                <CommentMenuOpen></CommentMenuOpen>
            </div>
        </div>
    )
}

export default CommentSection
