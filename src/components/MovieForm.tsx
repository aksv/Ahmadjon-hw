import React, {  useState }  from 'react'
import Modal from 'react-modal';
import { StyledForm } from '../styles/Form.styled';
import Button from './Button';
import Input from './Input';
import { IForm } from './types';
import { Modal as AntModal } from 'antd';


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
    modalClose,
    addMovie
}:IForm) {

    const [data, setData] = useState({
        id: "",
        title: '',
        releaseDate: '',
        rate: '0',
        url: '',
        genre: '',
        runtime: '',
        description:'',
    })

    function success() {
        AntModal.success({
          content: 'The movie has been added to database successfully ',
          title: "congratulations !"
        });
      }

    const changeHandler = (e: any): void => {
        const {name, value} = e.target;
        setData((prev) => ({...prev, [name]: value}))
    }

    const submitHandler = (e: any )=> {

        console.log('submittted', data);
        addMovie(data)
        resetHandler()
        modalClose()
        success()
    }

    const resetHandler = () => {
        setData({
            id: "",
            title: '',
            releaseDate: '',
            rate: '0',
            url: '',
            genre: '',
            runtime: '',
            description:'',
        })
        console.log('resetted')
    }
    const {title, releaseDate, description, rate, url, genre, runtime, } = data
    return (

        <Modal 
            isOpen={isOpen} 
            onRequestClose={modalClose}
            style={customStyles}
            // contentLabel={"Add Movie"}
        >
            <StyledForm>
                <div className="row">
                    <div style={{
                        color: "#fff",
                        fontSize: "40px",
                        fontWeight: 300,
                        lineHeight: "49px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "20px"
                        }} className="form__title">
                        Add movie
                    </div>
                    <button onClick={modalClose} className="modal__btn-close">X</button>
                </div>
                <div className="row">
                    <Input 
                        width="525px"
                        label="Title" 
                        name="title"
                        id="title"
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
                <div className="row">
                    <Input 
                        width="525px"
                        label="Movie Url" 
                        name="url"
                        id="url"
                        type="text"
                        placeholder="https://"
                        value={url}
                        onchange={changeHandler}
                        marginRight="40px"
                    />
                    <Input 
                        width="300px"
                        label="Rating" 
                        name="rate"
                        id="rate"
                        type="text"
                        placeholder="Select Date"
                        value={rate}
                        onchange={changeHandler}
                    />
                </div>
                <div className="row">
                    <Input 
                        width="525px"
                        label="Genre" 
                        name="genre"
                        id="genre"
                        type="text"
                        placeholder="Select genre"
                        value={genre}
                        onchange={changeHandler}
                        marginRight="40px"
                    />
                    <Input 
                        width="300px"
                        label="Runtime" 
                        name="runtime"
                        id="runtime"
                        type="text"
                        placeholder="Minutes"
                        value={runtime}
                        onchange={changeHandler}
                    />
                </div>
                <textarea 
                    name="description"
                    id="description"
                    placeholder="Movie description"
                    value={description}
                    onChange={changeHandler}
                />
                <div className="row mt-20 justtify-right mr-40">
                    <Button handler={resetHandler} bg="transparent" label="RESET"/>
                    <Button handler={submitHandler} bg="" label="SUBMIT"/>
                </div>
            </StyledForm>

        </Modal>
    )
}

export default Form
