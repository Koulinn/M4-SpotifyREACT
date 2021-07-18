import React from 'react'
import { Container } from 'react-bootstrap'
import CommentCardTopMetaStats from './CommentCardTopMetaStats'

function CommentCard() {
    return (
        <Container className="card-Wrapper px-0">
            <CommentCardTopMetaStats></CommentCardTopMetaStats>
            
        </Container>
    )
}

export default CommentCard
