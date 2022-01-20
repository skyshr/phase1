import React,{useState} from 'react';
import realman from '../assets/img/realman.png'
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
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const openModal1 = () => {
    setShowModal1(prev => !prev);
  };

  const openModal2 = () => {
    setShowModal2(prev => !prev);
  };

  const openModal3 = () => {
    setShowModal3(prev => !prev);
  };

  const openModal4 = () => {
    setShowModal4(prev => !prev);
  };

  const openModal5 = () => {
    setShowModal5(prev => !prev);
  };

  const openModal6 = () => {
    setShowModal6(prev => !prev);
  };
  

  return (
    <>
      {/* <Container> */}
        <MainStory >
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
              <div className='container11'>
                      <div className='containerbutton' >
                          <div className="Image" onClick={openModal1}>
                              <img src={realman} width="100%" height="100%" />
                              
                          </div>
                          <div className='containertext'>
                              Home_T
                          </div>
                      </div>

                  {/* 크로스핏 */}
                  <div className='containerbutton' >
                      <div className="Image" onClick={openModal2}>
                          <img src={require('../assets/img/CrossfitMain.png')} width="100%" height="100%" />
                          
                      </div>
                      <div className='containertext'>
                          Crossfit
                      </div>
                  </div>

                  {/* sport */}
                  <div className='containerbutton' >
                      <div className="Image" onClick={openModal3}>
                          <img src={require('../assets/img/SportMain.png')} width="100%" height="100%" />
                          
                      </div>
                      <div className='containertext'>
                          Sport
                      </div>
                  </div>


                  {/* climbing */}
                  <div className='containerbutton' >
                      <div className="Image" onClick={openModal4}>
                          <img src={require('../assets/img/climbing1.png')} width="100%" height="100%" />
                          
                      </div>
                      <div className='containertext'>
                      Climbing
                      </div>
                  </div>
                  
                  {/* hiking */}
                  <div className='containerbutton' >
                      <div className="Image" onClick={openModal5}>
                          <img src={require('../assets/img/hiking1.png')} width="100%" height="100%" />
                          
                      </div>
                      <div className='containertext'>
                          Hiking
                      </div>
                  </div>

                  {/* lesure */}
                  <div className='containerbutton' >
                      <div className="Image" onClick={openModal6}>
                          <img src={require('../assets/img/leisure1.png')} width="100%" height="100%" />
                          
                      </div>
                      <div className='containertext'>
                          Leisure
                      </div>
                  </div>
              </div>
              
              
        </MainStory>
    </>
  );
}




export default Home;