import React from "react";
import { styled } from "styled-components";

const PageSection = styled.div`
    height: 50px;
`;
const ButtonWrap = styled.div`
    flex-direction: row;
`;
const Button = styled.button`
    width: 30px;
    height: 30px;
    margin: 30px 2px 10px 2px;
    background-color: #f3f3f3;
    border-radius: 15px;
    border: none;
`;

const Pagination = ({totalPosts, limit, page, setPage}) => {
    const numPages = Math.ceil(totalPosts/limit);

    return (
        <PageSection>
            <ButtonWrap>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
                </Button>
                {Array(numPages).fill().map((_, i) => (
                        <Button
                            key={i+1}
                            onClick={() => setPage(i+1)}>
                            {i+1}
                        </Button>
                    ))
                }
                <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                &gt;
                </Button>
            </ButtonWrap>
        </PageSection>
    )
}

export default Pagination;