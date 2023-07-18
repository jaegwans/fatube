import React from 'react';
import styled from 'styled-components';

function Waves() {
    return (
        <Styledback>
            <div className="wave" />
            <div className="wave" />
            <div className="wave" />
        </Styledback>
    );
}

export default Waves;

const Styledback = styled.div`
    @media screen and (min-width: 1024px) {
        height: 80px; /* change the height of the waves here */
        width: 100%;
        position: absolute;
        background-color: ${({ theme }) => theme.color.background};
        bottom: 0;
        left: 0;
        right: 0;
        overflow-x: hidden;
        .wave {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%236b6b6b'/%3E%3C/svg%3E");
            position: absolute;
            width: 200%;
            height: 100%;
            animation: wave 10s -3s linear infinite;
            transform: translate3d(0, 0, 0);
            opacity: 0.8;
        }

        .wave:nth-of-type(2) {
            bottom: 0;
            animation: wave 18s linear reverse infinite;
            opacity: 0.5;
        }

        .wave:nth-of-type(3) {
            bottom: 0;
            animation: wave 20s -1s linear infinite;
            opacity: 0.5;
        }

        @keyframes wave {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(-25%);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    }
`;
