import './write.css'
import {MdAddCircleOutline} from 'react-icons/md'

function Write() {
  return (
    <div className='write'>
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
        <form className='writeForm'>
          <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
              <MdAddCircleOutline/>
            </label>
            <input type='file' id='fileInput' style={{display:"none" }}></input>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}></input>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder='Tell Your Story...' type="text" className='writeInput writeText'></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write