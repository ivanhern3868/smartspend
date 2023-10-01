import React,{useState} from 'react'
import logo from '../images/SmartSpend.PNG'
import add_icon from '../images/add.png'
import remove_icon from '../images/minus.png'
import view_icon from '../images/file.png'


const HeaderMain = () => {

const [open, setOpen] = useState(false);

  return (
    <>
      <div className='Header_MAIN'>
        <div className='Logo_div'>
          <img className='Logo_img' src={logo} alt="logo"/>
        </div>
          
        <div className='Recipes_div'>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}> 
              <button className="Recipe_Btn">Recipes</button>

            <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
                <DropdownItem img={add_icon} text={"Add Recipe"}/>
                <DropdownItem img={remove_icon} text={"Remove Recipe"}/>
                <DropdownItem img={view_icon} text={"View Recipes"}/>
            </div>

          </div>
        </div>

        <div className='Supermarket_div'>
          <button className="Super_Btn">Supermarkets</button>
        </div>

      </div>
    </>
  )
}

function  DropdownItem(props){
  return(
    <div className = 'dropdownItem'>
      <img src={props.img} className='icon_add'/>
      <a>{props.text}</a>
    </div>
  )
}

export default HeaderMain
