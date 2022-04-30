import React from 'react'
import styled from 'styled-components'

export default function Advice({generateAdvice, setNewAdvice}) {
	
	const regenerateAdvice = () =>{
		setNewAdvice({})
	}

  return (
    <AdviceContainer>
        <AdviceInner>
						<h5>Advice #{generateAdvice.slip.id}</h5>
						<p>“{generateAdvice.slip.advice}”</p>
						<img src="./images/pattern-divider-desktop.svg" alt="divider" />
        </AdviceInner>
				<AdviceGenerator onClick={regenerateAdvice}>
					<img src="./images/icon-dice.svg" alt="dice"/>
				</AdviceGenerator>
    </AdviceContainer>
  )
}

const AdviceContainer = styled.div`
	background-color: var(--dark-grayish-blue);
	border-radius: 10px;
	box-sizing: border-box;
	color: #fff;
	padding: 25px;
	position: relative;
	text-align: center;
`
const AdviceInner = styled.div`
	h5{
		color: var(--neon-green);
		letter-spacing: 0.3rem;
		text-transform: uppercase;
	}

	p{
		font-size: 28px;
	}

	img{
		margin: 20px 0 50px;
		width: 100%;
	}
`
const AdviceGenerator = styled.div`
	background-color: var(--neon-green);
	border-radius: 50%;
	color: var(--light-cyan);
	padding: 20px;
	position: absolute;
	bottom: -20px;
	left: 50%;
	transform: translate(-50%);
	width: 24px;
	height: 24px;

	:hover{
		box-shadow: 0 0 20px var(--neon-green);
		cursor: pointer;
	}
`