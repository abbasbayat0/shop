const Nav = () => {
    return (
        <div className="bg-black w-full flex">
            {/* left container */}
            <div className="flex flex-row w-1/2">
                {/* logo */}
                <img src={require("../images/carLogo.png")} alt="car logo" className="w-32" />

                {/* title */}
                <p className="text-white">autopile</p>
            </div>
            <div className="flex w-1/2 justify-end">
                <p className="text-white">test</p>
            </div>
        </div>
    );
}
 
export default Nav;