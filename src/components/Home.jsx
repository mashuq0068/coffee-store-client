import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Coffee from "./Coffee";

import Modal from 'react-modal';


const Home = () => {
    const [allCoffee , setAllCoffee] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allCoffee')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setAllCoffee( data)
        })

    },[])
    let subtitle;
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:"600px",
          height:"400px",
          backgroundColor:"#E3B577",
          zIndex:2
        },
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
//   }
  }
  function closeModal() {
    setIsOpen(false);
  }
    
    // const handelAllDelete = () => {
    //     fetch('http://localhost:5000/allCoffee',{
    //         method:"DELETE"
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }
    return (
        <div className="px-[15%] py-[3%] text-center">
           
            {/* end */}
            <Link className="hover:rounded-2xl mb-16  btn  hover:bg-[#f0a038] rounded-md drop-shadow-xl shadow-xl bg-[#E3B577]" to="/addCoffee">Add coffee</Link>
            <button onClick={openModal} className="hover:rounded-2xl mb-16  btn  hover:bg-[#f0a038] rounded-md drop-shadow-xl shadow-xl bg-[#E3B577]">Delete All</button>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        
      </Modal>
            <div className="grid xl:grid-cols-1 2xl:grid-cols-2 gap-24">
            {allCoffee.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)}
            </div>
        </div>
    );
};

export default Home;