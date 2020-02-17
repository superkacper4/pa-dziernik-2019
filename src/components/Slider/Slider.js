import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
  min-height: 90%;
  width: 100%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledSliderTitle = styled.h2`
  font-size: 20px;
`;

const StyledSliderDot = styled.button`
  height: 25px;
  width: 25px;
  border: solid 1px black;
  border-radius: 50px;
  background-color: white;
  margin: 0 10px;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledSliderItem = styled.div`
  width: 100%;
  background-color: lightcoral;
  font-size: 2rem;
  text-align: justify;
  /* transform: ${({ xD }) => (xD ? 'scale(0)' : 'scale(1)')}; */
  /* transform: scale( 
    ${({ key, i }) => {
      if (key === i) return 1;
      return 0;
    }} ); */
  position: absolute;
  top:0;
  left:0;
  transform:  ${({ xD, i }) => {
    if (xD === i) return 'scale(1)';
    return 'scale(0)';
  }};
`;

const aboutElementsArray = [
  {
    xD: 0,
    key: 0,
    title: 'Who are we?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    xD: 1,
    key: 1,
    title: 'What makes us better?',
    content:
      'Lorem ipsum dolor bla bla bla bla sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    xD: 2,
    key: 2,
    title: 'xD',
    content:
      'Lorem ipsum dolor XDDDDD sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Slider = () => {
  const [i, setI] = useState(0);
  // let i = 0;

  /* eslint-disable */

  const sliderFn = () => {
    // setInterval(() => {
    // do {
    //   setTimeout(() => {
    if (i < aboutElementsArray.length - 1) {
      console.log('i1: ', i);
      setI(i + 1);
      console.log('i2: ', i);
    } else {
      console.log('XD: ', i);
      setI(0);
    }
    //   }, 500)
    // } while (i >= aboutElementsArray.length)

    // }, 1500)
    console.log('123');
  };
  /* eslint-enable */

  // const sliderStart = () => {
  //   setInterval(() => sliderFn(), 500);
  // };

  // useEffect(() => {
  //   sliderFn();
  // })

  return (
    <StyledSlider onClick={sliderFn}>
      {/* <div onLoad={sliderFn}>
        xD
        {i}
      </div> */}

      {aboutElementsArray.map(element => {
        return (
          <StyledSliderItem key={element.key} i={i} xD={element.xD}>
            <StyledSliderTitle>{element.title}</StyledSliderTitle>
            {element.content}
          </StyledSliderItem>
        );
      })}

      <div>
        <StyledSliderDot />
        <StyledSliderDot />
      </div>
    </StyledSlider>
  );
};

export default Slider;
