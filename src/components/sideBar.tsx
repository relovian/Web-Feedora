import { useState } from 'react'

const SideBar = () => {

    const [iconName, setIconName] = useState("")

    const handleIcon = (icon: string) => {
        setIconName(icon)
    }

    return (

        <>
            <nav>
                <h1 className="nameApp">Feedora</h1>

                <div className="searchContent">
                    <img src="src/assets/search.png" alt="search"/>
                    <input type="text" placeholder='Search Pengguna...' />
                </div>

                <div className="icon">
                    <button onClick={() => handleIcon("home")}><img src={`src/assets/home${iconName === "home" ? "Active" : ""}.png`} alt="Home" /> </button>
                    <button onClick={() => handleIcon("explore")}><img src={`src/assets/explore${iconName === "explore" ? "Active" : "" }.png`}alt="explore" /></button>
                    <button onClick={() => handleIcon("plus")}><img src={`src/assets/plus${iconName === "plus" ? "Active" : ""}.png`} alt="plus" /></button>
                    <button onClick={() => handleIcon("notif")}><img src={`src/assets/notif${iconName === "notif" ? "Active" : "" }.png`} alt="notif" /></button>
                    <button onClick={() => handleIcon("profil")}><img src={`src/assets/profil${iconName === "profil" ? "Active" : "" }.png`}alt="profil" /></button>
                </div>

            </nav>
        </>
    )
}

export default SideBar;