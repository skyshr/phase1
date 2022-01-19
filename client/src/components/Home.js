import React,{useState} from 'react';
import styled from 'styled-components';
const MainStory = styled.div`
  
.container11{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  /* background-color: mediumaquamarine; */
  padding-left: 120px;
  padding-right: 120px;

}
.container22{
    width: 80%;
    position: absolute;
    /* position: relative; */
  margin: auto;

}

.containerbutton{
  width: 150px;
  margin: auto;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.containerbutton:hover{
  transform: scale(1.1);
  /* 지정한 사이즈에서 키우기 */
  /* box-sizing: 0px 0px 15px 10px; */
}


.containertext{
  bottom: 10%;
  width: 100px;
  /* background-color: blue; */
  position: absolute;
  color: white;
  font-size: 30px;
  
}

.Image{
  width: 250px;
  height: 300px;
  justify-content: center;
  align-items: center;
  }

.Image:hover{
  background: silver;
}



.button1 {
  width: 100px;
  padding: 160px 100px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
font-family: 'Roboto', sans-serif;

`;



function Home() {

return (
  <>
      <MainStory >
        <div>Hello Pirates!</div>
      </MainStory>
  </>
);
}




export default Home;