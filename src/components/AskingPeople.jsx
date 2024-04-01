import React from 'react'
import { useNavigate } from 'react-router-dom'

const AskingPeople = () => {
    const navigation = useNavigate()
    const handleclick=() => {
        navigation("/card")
    }
  return (<>

  <div class="alert alert-primary " role="alert">
 
🎉 आज की स्पेशल ऑफर! 🎉

आज ही आइए और लाभ उठाएं - खरीदें 1 और पाएं 1 मुफ्त! 😍

यह अवसर मत छोड़िए! आज ही खरीदारी करें और दोहरी मस्ती का आनंद लें! 💸✨
</div>
  <div className="container fs-2">

  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Where Do You Live </label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-dark" onClick={handleclick}>Order-Now</button>
</form>
  </div>
  </>
  )
}

export default AskingPeople