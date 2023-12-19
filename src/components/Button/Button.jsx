
const Button = ({btnName}) => {
    return(
        <div>
            <button className={`btn border-0 text-white font-semibold bg-[#F7A582] ${btnName==="Book Now" && "btn-block"}`}>{btnName}</button>
        </div>
    )}
export default Button;