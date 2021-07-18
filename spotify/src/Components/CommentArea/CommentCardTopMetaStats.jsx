import React from 'react'
import CommentMenu from './CommentMenu'
function CommentCardTopMetaStats() {
    return (
        <div className="CommentCardTopMetaStats-Wrapper d-flex justify-content-between align-items-center">
            <div className="UserInfo-Wrapper d-flex justify-content-center align-items-center">
                <div className="Avatar-Wrapper">
                    <img src="https://i.pravatar.cc/64" alt=''></img>
    
                </div>
                <div className="Username-Wrapper">
                    Martha
                </div>
                <div className="PublishedDate-Wrapper">
                    05/11/2021
                </div>
            </div>

            <div className="CardMenu-Wrapper">
                <CommentMenu></CommentMenu>

            </div>
            
        </div>
    )
}

export default CommentCardTopMetaStats
