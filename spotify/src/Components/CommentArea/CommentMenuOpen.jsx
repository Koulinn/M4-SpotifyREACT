import React from 'react'

function CommentMenuOpen() {
    return (
        <div class="OpenMenu-Outter-Wrapper position-absolute">
            <div className="OpenMenu-InnerWrapper position-relative">
                <div className="MenuTriangle"></div>
                <div className="MenuOptions">
                    <ul>
                        <li><span>Delete comment</span></li>
                        <li><span>Edit comment</span></li>
                        <hr />
                        <li className="d-flex align-items-center justify-content-center">
                            <div className="menuClose-btn">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                                <span>Close</span>
                            </div>
    
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CommentMenuOpen
