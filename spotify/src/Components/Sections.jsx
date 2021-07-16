import React from 'react'

function Sections(props) {
    return (
        <section class="row d-flex flex-column mt-3 py-0 px-4 m-0" id={props.sectionTitle}>
            <div class="col-12 p-0 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                    <h2 class="m-0">
                        {props.sectionTitle}
                    </h2>
                    <span class="section-text-aux mt-1 mb-2">Latest music</span>
                </div>

                <span class="seeMore">SEE ALL</span>
            </div>
        </section>
    )
}

export default Sections
