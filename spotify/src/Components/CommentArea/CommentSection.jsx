import React from 'react'
import CommentCard from './CommentCard'
import CommentSectionHeader from './CommentSectionHeader'

function CommentSection() {
    return (
        <div id="Comment-Section" className="d-flex flex-column justify-content-center">
            <CommentSectionHeader></CommentSectionHeader>
            <CommentCard></CommentCard>
        </div>
    )
}

export default CommentSection
