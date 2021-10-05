import React, {  useState }  from 'react'
import Modal from 'react-modal';
import { StyledForm } from '../styles/Form.styled';
import Input from './Input';
import { IForm } from './types';

const customStyles = {
  content: {
    padding: "20px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#232323"
  },
};


Modal.setAppElement('#modal');

function Form({
    isOpen,
    modalClose
}:IForm) {

    const [data, setData] = useState({
        title: '',
        releaseDate: '',
        rate: 0,
        url: '',
        genre: '',
        runtime: '',
        description:'',
    })

    const changeHandler = (e: any): void => {
        const {name, value} = e.target;
        setData((prev) => ({...prev, [name]: value}))
    }

    const {title, releaseDate, description, rate, url, genre, runtime, } = data
    return (

        <StyledForm>
            <Modal 
                isOpen={isOpen} 
                onRequestClose={modalClose}
                style={customStyles}
                contentLabel={"Add Movie"}
            >
                <div className="row">
                    <Input 
                        width="525px"
                        label="Title" 
                        name="title"
                        id="name"
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onchange={changeHandler}
                        marginRight="40px"
                    />
                    <Input 
                        width="300px"
                        label="Release Date" 
                        name="releaseDate"
                        id="releaseDate"
                        type="text"
                        placeholder="Select Date"
                        value={releaseDate}
                        onchange={changeHandler}
                    />
                </div>

            </Modal>
        </StyledForm>
    )
}

export default Form
