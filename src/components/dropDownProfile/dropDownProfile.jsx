import React from "react";
export default DropDownProfile = ()=>{
    return (
        <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4">
                <li>My profile</li>
                <li>Setting</li>
                <li>Logout</li>
            </ul>
        </div>
    )
}