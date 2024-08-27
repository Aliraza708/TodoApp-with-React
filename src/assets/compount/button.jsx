

function Button({text,onpress}){
  return(
    <button className="m-4 text-white w-24 bg-red-600 rounded-sm" onClick={onpress}>{text}</button>
  )
}


export default Button