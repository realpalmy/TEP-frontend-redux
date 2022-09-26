import React from 'react';
import styled from 'styled-components';

export function ContainerNavbar({ children, className, position }) {
    return (
        <div className={className}>
            <div></div>
            <div class={`${position == 'Home' ? 'bg-orange home' : 'bg-orange other-page'}`}>
                {children}
            </div>
        </div>
    );
}

export default styled(ContainerNavbar)`
.bg-orange {
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
    border-radius: 0px 0px 200px 200px;
}

.home{
    height: 55rem;
}

.other-page{
    height: 35rem;
}
`;